/**
 * bot controller
 */

import { factories } from '@strapi/strapi'
import { sanitize } from '@strapi/utils'

export default factories.createCoreController('api::bot.bot', ({ strapi }) => ({
  async findOneBySlug (ctx) {
    await this.validateQuery(ctx);

    const { slug } = ctx.params;

    const entity = await strapi.entityService.findMany('api::bot.bot', { filters: { slug }, ...ctx.query })

    const sanitizedEntity = await sanitize.contentAPI.output(entity, strapi.contentType("api::bot.bot"))

    return this.transformResponse(sanitizedEntity[0]);
  }
}));
