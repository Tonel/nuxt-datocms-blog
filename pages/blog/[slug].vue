<template>
  <div class="article">
    <h1 class="article-title">
      {{article.title}}
    </h1>
    <div v-if="article.publicationDate" class="article-publication-date">
      Article published on: {{ new Date(article.publicationDate).toLocaleString() }}
    </div>
    <datocms-structured-text :data="article.content" class="article-content"/>
  </div>
</template>

<style>
.article h1 {
  font-size: 4.5em;
  margin-bottom: 10px;
}

.article .article-publication-date {
  color: #696969;
  font-size: 0.9em;
  margin-bottom: 50px;
}

.article .article-content h2 {
  margin-top: 40px;
  font-size: 1.5em;
}

.article .article-content {
  font-size: 1.1em;
}
</style>

<script setup>
// to give the frontend page the ability to
// render rich-text content fields via the
// "<structured-text>" element
import { StructuredText as DatocmsStructuredText } from 'vue-datocms';

// to get access to the "slug" dynamic param
const route = useRoute()

// retrieve the data associated with an article
// based on its slug
const { data, error } = await useGraphqlQuery({
  query: `
    query BlogPostQuery($slug: String!) {
     article(filter: { slug: { eq: $slug } }) {
        title
        slug
        publicationDate: _firstPublishedAt
        content {
          value
          blocks
        }
      }
    }
  `,
  variables: {
    // the dynamic "slug" parameter read
    // from the URL
    slug: route.params.slug,
  },
});

// if the slug does not correspond to any articles,
// return a 404 page with the "Page Not Found" message
if (!data.value?.article) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const article = data.value?.article;
</script>
