const path = require('path');
const { Users, Posts } = require(path.join(__dirname, "../models/Model"));

const postComment = async (req, res, next) => {
  //basic prevention for commenting without an account
  if(!req.user) {
    return res.redirect('/user/login');
  }
  const from = req.query.from
  const post = await Posts.findById(req.query.postId).exec();
  post.comments.push({userId: req.user.id, image: req.user.image, username: req.user.username, comment: req.body.comment })
  post.save();
  if(from == 'post') {
    return res.redirect('/post/' + req.query.postId)
  }
  return res.redirect('/')
}

module.exports = {
  postComment
}