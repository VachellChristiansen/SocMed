const path = require('path');
const { Users, Posts } = require(path.join(__dirname, '../../models/Model'));

const isFollowed = (account, current) => {
  if (current == '') {
    return null;
  }
  const exists = account.followers.find((acc) => { return acc.username == current })
  if (exists) { return true } else { return false }
}

const isLiked = (post, current) => {
  if (current == '') {
    return null;
  }
  const exists = post.like.find((item) => { return item.userId == current })
  if (exists) { return true } else { return false }
}
const checkUser = (userid, users) => {
  const user = users.find((user) => { return user.id === userid});
  return user;
}


module.exports = {
  isFollowed,
  isLiked,
  checkUser
}