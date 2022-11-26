const isFollowed = (account, current) => {
  const exists = account.followers.find((acc) => { return acc.username == current })
  if (exists) { return true } else { return false }
}

module.exports = {
  isFollowed
}