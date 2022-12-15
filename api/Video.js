const express = require('express');
const router = express.Router();

//mongoose user model
const Video = require('../models/Video.js');

//Welcome
router.get('/', async (req, res) => {
  return res.status(200).json({
    title: 'Video',
    message: 'Welcome to videos api!',
  });
});

//post video
router.post('/addVideo', async (req, res) => {
  const { title, videoUrl, videoId } = req.body;
  const video = new Video({
    title,
    videoUrl,
    videoId,
  });

  const data = await video.save();

  if (data.length !== 0) {
    return res.status(200).json({
      status: 'Success',
      msg: 'Video successfully added!',
    });
  } else {
    return res.status(400).json({
      status: 'Failed',
      msg: 'Video not added',
    });
  }
});

//get all videos
router.get('/allVideos', async (req, res) => {
  const videos = await Video.find();
  if (videos.length !== 0) {
    return res.status(400).json({
      status: 'Success',
      msg: 'Videos fetched successfully',
      videos,
    });
  } else {
    return res.status(400).json({
      status: 'Failed',
      msg: 'No videos found',
    });
  }
});

// get random video
router.get('/randomVideo', (req, res) => {
  Video.find({ targetViews: { $gt: 0 } }).then((videos) => {
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    const { videoId } = randomVideo;
    if (randomVideo.length !== 0) {
      return res.status(400).json({
        status: 'Success',
        msg: 'Random video fetched successfully',
        randomVideo,
        videoId,
      });
    } else {
      return res.status(400).json({
        status: 'Failed',
        msg: 'No Random videos found',
      });
    }
  });
});

// router.get('/randomVideo', async (req, res) => {
//   const videos = await Video.find({ targetViews: { $gt: 0 } });
//   const randomVideo = videos[Math.floor(Math.random() * videos.length)];
//   const { videoId } = randomVideo;
//   if (randomVideo.length !== 0) {
//     return res.status(400).json({
//       status: 'Success',
//       msg: 'Random video fetched successfully',
//       randomVideo,
//       videoId,
//     });
//   } else {
//     return res.status(400).json({
//       status: 'Failed',
//       msg: 'No Random videos found',
//     });
//   }
// });

module.exports = router;
