<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer &amp; Art Director
          focused on digital design for brands that like to have fun.
        </h2>
      </div>
      <div data-v-50cbff3e="" class="projects">
        <div
          data-v-50cbff3e=""
          v-for="edge in $page.project.edges"
          :key="edge.node.id"
          class="project"
        >
          <g-link
            data-v-50cbff3e=""
            :to="`/project/${edge.node.id}`"
            class="project-link"
          >
            <img
              data-v-50cbff3e=""
              :alt="edge.node.title"
              width="2560"
              :src="`${GRIDSOME_API_URL}${edge.node.cover.url}`"
              class="thumbnail"
            />
            <h3 data-v-50cbff3e="" class="project-title">
              {{ edge.node.title }}
            </h3>
            <div class="categories" data-v-50cbff3e="">
              <span
                class="category"
                data-v-50cbff3e=""
                v-for="cate in edge.node.categories"
                :key="cate.id"
                >{{ cate.name }}</span
              >
            </div>
          </g-link>
        </div>
      </div>
    </div>
    <div data-v-460714ac="">
      <div data-v-460714ac="" class="latest-journals-heading container">
        <span data-v-460714ac="" class="label">Latest and greatest</span>
      </div>
      <div data-v-460714ac="" class="latest-journals">
        <div data-v-460714ac="" class="container">
          <g-link
            data-v-460714ac=""
            v-for="edge in $page.project.edges"
            :key="edge.node.id"
            :to="`/journal/${edge.node.id}/`"
            class="journal"
          >
            <h3 class="journal-title" data-v-460714ac="">
              {{ edge.node.title }}
            </h3>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  project: allStrapiProject {
    edges {
      node {
        id, 
        title,
        categories {
          id,
          name
        },
        cover {
          url
        }
      }
    }
  }

  journey: allStrapiJourney {
    edges {
      node {
        id, 
        title,
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
/* .home-links a {
  margin-right: 1rem;
} */
</style>
