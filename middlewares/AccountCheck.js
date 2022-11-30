const check = (req, res, next) => {
  if (!req.user) { return res.redirect('/user/login')} else { return next() }
}

module.exports = {
  check
}