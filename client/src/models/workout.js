const { Schema } = require('mongoose')
let Workout = new Schema(
  {
    workout: {type: Text, requires: true},
    duration: { type: Number, required: true },
    description: { type: Text, required: false }
  },
  
)
module.exports = Workout