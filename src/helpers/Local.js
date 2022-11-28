const path = require('path');
const { Users, Posts } = require(path.join(__dirname, '../../models/Model'));

const isFollowed = (account, current) => {
  if (current == '') {
    return null;
  }
  const exists = account.followers.find((acc) => { return acc.username == current })
  if (exists) { return true } else { return false }
}


module.exports = {
  isFollowed
}