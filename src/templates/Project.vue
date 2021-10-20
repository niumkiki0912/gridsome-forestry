<template>
  <Layout>
    <div data-v-7f3c42a8="" class="project">
      <div data-v-7f3c42a8="" class="container">
        <div data-v-7f3c42a8="" class="project-header">
          <h1 data-v-7f3c42a8="" class="project-title">{{$page.project.title}}</h1>
          <div data-v-7f3c42a8="" class="project-info">
            <div data-v-7f3c42a8="" class="categories-container">
              <div data-v-7f3c42a8="" class="categories">
                <span data-v-7f3c42a8="" class="label">Categories</span>
                <span data-v-7f3c42a8="" class="category" v-for="cate in $page.project.categories" :key="cate.id">{{cate.name}}</span>
              </div>
            </div>
            <div data-v-7f3c42a8="" class="year-container">
              <span data-v-7f3c42a8="" class="label">Date</span>
              <div data-v-7f3c42a8="">{{$page.project.created_at}}</div>
            </div>
          </div>
        </div>
        <div data-v-7f3c42a8="" class="content" v-html="mdToHtml($page.project.content)">
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID) {
  project: strapiProject(id: $id) {
    id,
    title,
    content,
    created_at,
    categories {
      id,
      name
    },
   
  }
}
</page-query>

<script>
  import MarkdownIt from "markdown-it";
  const md = new MarkdownIt();
  export default {
    methods: {
      mdToHtml(markdown) {
        return md.render(markdown);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
