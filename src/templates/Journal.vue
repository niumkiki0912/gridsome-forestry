<template>
  <Layout>
    <div data-v-2a0eef53="" class="journal">
      <div data-v-2a0eef53="" class="container journal-container">
        <div data-v-2a0eef53="" class="journal-header">
          <h1 data-v-2a0eef53="" class="journal-title">
            {{$page.journal.title}}
          </h1>
          <div data-v-2a0eef53="" class="journal-meta">
            <div data-v-2a0eef53="" class="journal-date">
              <span data-v-2a0eef53="" class="label">Date</span>
              <div data-v-2a0eef53="">{{$page.journal.created_at}}</div>
            </div>
            <div data-v-2a0eef53="" class="journal-time">
              <span data-v-2a0eef53="" class="label">Time</span
              ><span data-v-2a0eef53="">1 min read</span>
            </div>
          </div>
        </div>
        <div data-v-2a0eef53="" class="journal-content" v-html="mdToHtml($page.journal.content)">
        </div>
      </div>
    </div>
  </Layout>
</template>


<page-query>
query($id: ID) {
  journal: strapiJourney(id: $id) {
    id,
    title,
    content,
    created_at
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
