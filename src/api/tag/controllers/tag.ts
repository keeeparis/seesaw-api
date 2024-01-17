/**
 * tag controller
 */

import { factories } from '@strapi/strapi'
import { sanitize } from '@strapi/utils'

export default factories.createCoreController('api::tag.tag', ({ strapi }) => ({
  async findOneBySlug (ctx) {
    await this.validateQuery(ctx);

    const { slug } = ctx.params;

    const entity = await strapi.entityService.findMany('api::tag.tag', { filters: { slug }, ...ctx.query })

    const sanitizedEntity = await sanitize.contentAPI.output(entity, strapi.contentType("api::tag.tag"))

    return this.transformResponse(sanitizedEntity[0]);
  }
}));
