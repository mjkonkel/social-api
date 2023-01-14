// import reaction
const reactionSchema = require('./Reaction');

// import helper
const { format_date } = require('../utils/helpers')

const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // format timestamp
      get: (date) => format_date(date)
    },
    // add username of user that created the thought
    username: {
      type: String,
      required: true,
    },
    // add reactions
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
