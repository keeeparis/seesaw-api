export default {
  routes: [
    { // Path defined with a URL parameter
      method: 'GET',
      path: '/tags/slug/:slug',
      handler: 'api::tag.tag.findOneBySlug',
      config: {
        auth: false
      }
    },
  ]
}
