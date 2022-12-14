const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  videoUrl: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'No title',
  },
  description: {
    type: String,
    default: 'No description',
  },
  thumbnail: {
    type: String,
  },
  targetViews: {
    type: Number,
    default: 10,
  },
  compleateViews: {
    type: Number,
    default: 0,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;
