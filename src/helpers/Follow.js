const path = require('path');
const { Users } = require(path.join(__dirname, '../../models/Model'));

const follow = async (userId, followId) => {
  const user = await Users.findById(userId).exec();
  const follow = await Users.findById(followId).exec();

  const followerExists = await follow.followers.find((acc) => { return acc.username == user.username })
  if (followerExists) {
    return false;
  }

  user.following.push({username: follow.username})
  follow.followers.push({username: user.username})
  user.save();
  follow.save();
  return true;
}

const unfollow = async(userId, followId) => {
  const user = await Users.findById(userId).exec();
  const follow = await Users.findById(followId).exec();

  user.following.pull({username: follow.username})
  follow.followers.pull({username: user.username})
  user.save();
  follow.save();
  return true;
}

module.exports = {
  follow,
  unfollow
}