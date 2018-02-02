const Controller = require('egg').Controller

class ExplorerController extends Controller {
  // 演出时间表
  async calendars() {
    const { ctx, service } = this
    const params = ctx.params
    let { date, local } = params

    let find = {
      date,
      local
    }
    ctx.body = await service.explorer.calendar.findOne(find)
  }

  // 字典
  async destinations() {
    const { ctx, service } = this
    const query = ctx.query
    const params = ctx.params
    let { local } = params
    let { type } = ctx.query

    ctx.body = await ctx.service.explorer.destinations.getDestinations(
      local,
      type
    )
  }

  // 字典
  async destinations() {
    const { ctx, service } = this
    const query = ctx.query
    const params = ctx.params
    let { local } = params
    let { type } = ctx.query

    ctx.body = await ctx.service.explorer.destinations.getDestinations(
      local,
      type
    )
  }

  async facetGroups() {
    const { ctx, service } = this
    const query = ctx.query
    const params = ctx.params
    let { local } = params
    let { type } = ctx.query

    ctx.body = await ctx.service.explorer.destinations.getFacetGroups(local)
  }
}

module.exports = ExplorerController