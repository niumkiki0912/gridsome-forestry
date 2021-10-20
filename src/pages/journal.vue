<template>
  <Layout>
    <div data-v-da896d1e="" class="container">
      <div data-v-da896d1e="" class="journal-hero">
        <h1 data-v-da896d1e="" class="journal-header">
          a wise person once said...
        </h1>
      </div>
    </div>
    <g-link
      data-v-da896d1e=""
      :to="`/journal/${edge.node.id}/`"
      v-for="edge in $page.journey.edges"
      :key="edge.node.id"
      class="journal-post"
      ><div data-v-da896d1e="" class="container journal">
        <h2 data-v-da896d1e="" class="journal-title">
          {{edge.node.title}}
        </h2>
        <p data-v-da896d1e="" class="journal-excerpt">
          {{edge.node.subTitle}}
        </p>
      </div></g-link
    >
  </Layout>
</template>

<page-query>
query {
  journey: allStrapiJourney {
    edges {
      node {
        id, 
        title,
        subTitle,
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "About us",
  },
};
</script>
