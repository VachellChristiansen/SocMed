const check = (req, res, next) => {
  if (!req.user) { return res.redirect('/user/login')}
  if (req.user.id == req.query.follow) { res.redirect('back') }
  else { return next() }
}

module.exports = {
  check
}