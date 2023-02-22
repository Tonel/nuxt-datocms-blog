<template>
  <div class="header">
    <nuxt-link :to="`/`">My Fantastic Blog</nuxt-link>
  </div>
  <div class="container">
    <slot />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

body {
  font-family: "Poppins", Helvetica, Arial,serif;
  margin: 0;
}

.header {
  color: white;
  background-color: #696969;
  padding: 15px;
  margin-bottom: 30px;
}

.header a {
  all: unset;
  font-size: 1.3em;
}

.header a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.container {
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
