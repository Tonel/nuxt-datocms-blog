<template>
  <div class="page-title">
    <h1>
      Blog Posts
    </h1>
  </div>
  <div class="blog-articles">
    <div class="article-cards">
      <div v-for="article in articles" v-bind:key="article.slug">
        <nuxt-link :to="`/blog/${article.slug}`">
          <div class="article-card">
            <div class="article-title">
              {{article.title}}
            </div>
            <div v-if="article.publicationDate" class="article-publication-date">
              Article published on: {{ new Date(article.publicationDate).toLocaleString() }}
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
.page-title h1 {
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
}

.blog-articles a {
  all: unset;
}

.blog-articles a:hover {
  cursor: pointer;
}

.blog-articles .article-card {
  border-radius: 10px;
  border: solid 1px #696969;
  padding: 25px 15px;
  margin-bottom: 10px;
}

.blog-articles a:hover .article-card {
  border: solid 2px #FF7751;
}

.blog-articles a:hover .article-title {
  color: #FF7751;
}

.blog-articles .article-card .article-title {
  font-size: 1.4em;
  margin-bottom: 10px;
}

.blog-articles .article-card .article-publication-date {
  color: #696969;
  font-size: 0.9em;
}
</style>

<script setup>
// retrieve the articles to show on the
// home page of the blog
const { data, error } = await useGraphqlQuery({
  query: `
  {
  allArticles {
    id
    title
    slug
    publicationDate: _firstPublishedAt
  }
}`
});

// extract the articles from the data returned by DatoCMS
const articles = data.value?.allArticles || [];
</script>
