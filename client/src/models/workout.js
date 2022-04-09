const { Schema } = require('mongoose')
let Workout = new Schema(
  {
    user: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Number, required: true },
    description: { type: Text, required: false }
  },
  { timestamps: true }
)
module.exports = Workout