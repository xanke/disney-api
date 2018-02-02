const Service = require('egg').Service

class ScanCalendarService extends Service {
  async findOne(find) {
    const data = await this.ctx.model.ScanCalendar.findOne(find, { _id: 0 })
    return data
  }
}

module.exports = ScanCalendarService
