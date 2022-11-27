const path = require('path');
const { Users, Posts } = require(path.join(__dirname, "../models/Model"));

const postComment = async (req, res, next) => {
  //basic prevention for commenting without an account
  if(!req.user) {
    return res.redirect('/user/login');
  }
  const post = await Posts.findById(req.query.postId).exec();
  post.comments.push({userId: req.user.id, comment: req.body.comment })
  post.save();
  return res.redirect('/')
}

module.exports = {
  postComment
}