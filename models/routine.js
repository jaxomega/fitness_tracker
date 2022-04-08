const { Schema } = require('mongoose')
const Routine = new Schema(
  {
    user: { type: String, required: true },
    workouts: [{ type: Schema.Types.ObjectId, ref: 'Workout', required: true }]
  },
  { timestamps: true }
)
module.exports = Routine