export default {
  routes: [
    {
      method: 'GET',
      path: '/articles/slug/:slug',
      handler: 'api::article.article.findOneBySlug',
      config: {
        auth: false
      }
    },
  ]
}
