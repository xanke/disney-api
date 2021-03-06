const Service = require('egg').Service

class DestinationsService extends Service {
  async getDestinationsRaw(local) {
    let find = {
      local
    }
    let data = await this.ctx.model.ScanDestination.findOne(find, {
      _id: 0,
      local: 0,
      date: 0
    })

    return data
  }

  async getDestinations(local, type) {
    let find = {
      local
    }
    let data = await this.ctx.model.DsDestination.find(find, {
      _id: 0,
      local: 0,
      date: 0
    })

    return data
  }

  async updateDestinationsId(id, data) {
    let find = {
      id
    }
    let ret = await this.ctx.model.DsDestination.update(
      find,
      {
        $set: data
      },
      {
        upsert: true
      }
    )

    return ret
  }
}

module.exports = DestinationsService
