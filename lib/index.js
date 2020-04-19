const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffmpeg = require('fluent-ffmpeg');
const ffprobePath = require('@ffprobe-installer/ffprobe').path;

ffmpeg.setFfmpegPath(ffmpegInstaller.path);
// console.log(ffmpegInstaller.path, ffmpegInstaller.version);


ffmpeg.setFfprobePath(ffprobePath);

var Videoshow = require('./videoshow')
var pkg = require('../package.json')

module.exports = videoshow

function videoshow(images, options) {
  return new Videoshow(images, options)
}

videoshow.VERSION = pkg.version
videoshow.ffmpeg = ffmpeg
