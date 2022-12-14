const express = require('express');
const router = express.Router();

//mongoose user model
const Video = require('../models/Video.js');

//Welcome
router.get('/', async (req, res, next) => {
  return res.status(200).json({
    title: 'Video',
    message: 'Welcome to videos api!',
  });
});

//post video
router.post('/addVideo', async (req, res, next) => {
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
router.get('/allVideo', async (req, res, next) => {
  const videos = await Video.find();
  return res.status(200).json({
    title: 'Videos',
    message: 'Videos fetched successfully',
    videos,
  });
});

module.exports = router;
