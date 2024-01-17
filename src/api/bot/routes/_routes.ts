export default {
  routes: [
    { // Path defined with a URL parameter
      method: 'GET',
      path: '/bots/slug/:slug',
      handler: 'api::bot.bot.findOneBySlug',
      config: {
        auth: false
      }
    },
  ]
}
