const path = require('path');
const { Users, Posts } = require(path.join(__dirname, "../models/Model"));
const { follow, unfollow } = require(path.join(__dirname, "../src/helpers/Follow"));
const { like, unlike } = require(path.join(__dirname, "../src/helpers/Like"));

const getIndex = async (req, res, next) => {
  const current = req.user || '';
  const videos = await Posts.find({}).exec();
  const users = await Users.find({}).exec();
  const top = await Users.find({}).sort({ followers: -1 }).limit(3).exec();
  const recommended = await Users.find({ 'followers.username': { $ne: current.username || '' } }).limit(3).exec();
  const user = [];
  // helper code to find whose video are posted, this will be based on the video being called
  await videos.forEach((video, index) => {
    user.push(users.find(user => user.id === video.userId))
  })
  return res.render("index", { videos, users, user, top, recommended, current: current})
}

const followFromIndex = async (req, res, next) => {
  
  await follow(req.user.id, req.query.follow);

  res.redirect('/');
};

const unfollowFromIndex = async (req, res, next) => {

  await unfollow(req.user.id, req.query.unfollow);

  res.redirect('/');
};

const likeFromIndex = async (req, res, next) => {
  await like(req.user.id, req.query.postId)
  if (req.query.from == 'post') {
    return res.redirect('/post/' + req.query.postId)
  }
  res.redirect('/');
}

const unlikeFromIndex = async (req, res, next) => {
  await unlike(req.user.id, req.query.postId)
  if (req.query.from == 'post') {
    return res.redirect('/post/' + req.query.postId)
  }
  res.redirect('/');
}

const privacyPolicy = async (req, res, next) => {
  return res.render("privacyPolicy")
}
const search = async (req, res, next) => {
  const search = req.query.search;
  const user = req.user || '';
  if (search == user.username) return res.redirect('/user')
  return res.redirect('/user/other/' + search)
}
const upload = async (req, res, next) => {
  return res.render("upload", { user: req.user.username, current: req.user, error:' ' })
}
const error = async (req, res, next) => {
  return res.render("errorPage")
}
const post = async (req, res, next) => {
  const video = await Posts.findById(req.params.postId)
  const current = req.user || '';
  const user = await Users.findById(video.userId);
  const users = await Users.find({});
  const top = await Users.find({}).sort({ followers: -1 }).limit(3).exec();
  const recommended = await Users.find({ 'followers.username': { $ne: current.username || '' } }).limit(3).exec();
  return res.render("post", { video, users, user, top, recommended, current: current})
}


module.exports = { getIndex, followFromIndex, unfollowFromIndex, likeFromIndex, unlikeFromIndex, privacyPolicy, search, upload, error, post }