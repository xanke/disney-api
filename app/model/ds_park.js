module.exports = app => {
  const mongoose = app.mongoose
  const DsParkSchema = new mongoose.Schema({
    date: { type: String },
    local: { type: String },
    id: { type: String },
    startTime: { type: String },
    endTime: { type: String },
    status: { type: String },

    markMax: { type: Number },
    markAvg: { type: Number },
    markList: { type: Array },
    markHour: { type: Array },
    markMaxList: { type: Array },

    flowMax: { type: Number },
    flowAvg: { type: Number },
    flowList: { type: Array },
    flowHour: { type: Array },

    wea: { type: String },
    wind: { type: String },
    temMax: { type: String },
    temMin: { type: String },
    aqi: { type: String },

    utime: { type: Number }
  })

  return mongoose.model('DsPark', DsParkSchema, 'ds_parks')
}
