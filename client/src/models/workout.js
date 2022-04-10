const { Schema } = require('mongoose')
let Workout = new Schema(
  {
    duration: { type: Number, required: true },
    date: { type: Number, required: true },
    description: { type: Text, required: false }
  },
  { timestamps: true }
)
module.exports = Workout