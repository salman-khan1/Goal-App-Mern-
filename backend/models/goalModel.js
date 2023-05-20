/* This is a code snippet written in JavaScript that defines a Mongoose schema for a "Goal" model. It
requires the Mongoose library, creates a schema with two fields (user and text), and exports a
Mongoose model for the "Goal" collection with the defined schema. The "user" field is a reference to
the "User" model, and the "text" field is a required string. The "timestamps" option is set to true,
which automatically adds "createdAt" and "updatedAt" fields to the documents. */
const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
