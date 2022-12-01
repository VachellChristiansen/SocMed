const path = require('path');
const { Users, Posts } = require(path.join(__dirname, '../../models/Model'));

const like = async (userId, postId) => {
  const user = await Users.findById(userId);
  const post = await Posts.findById(postId)

  //check if user already like this post
  const isLiked = post.like.find((acc) => { return acc.userId == user.id } )
  if (isLiked) {
    return false;
  }
  post.like.push({ userId: user.id })
  post.save();
  return true;
}
 
const unlike = async (userId, postId) => {
  const user = await Users.findById(userId);
  const post = await Posts.findById(postId)
  
  post.like.pull({ userId: user.id })
  post.save();
  return true;
}

module.exports = {
  like,
  unlike
}