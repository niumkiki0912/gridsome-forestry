// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['project', 'journey'], // StrapiPost   tag---StrapiTag
        // singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: 'chuxiaimpala@163.com',
        //   password: 'Happyniu123'
        // }
      }
    }
  ],
  templates: {
    StrapiJourney: [
      {
        path: '/journal/:id',
        component: './src/templates/Journal.vue'
      }
    ],
    StrapiProject: [
      {
        path: '/project/:id',
        component: './src/templates/Project.vue'
      }
    ]
  }
}
