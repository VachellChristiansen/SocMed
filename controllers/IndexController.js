const getIndex = async (req, res, next) => {
  return res.render("index")
}
const privacyPolicy = async (req, res, next) => {
  return res.render("privacyPolicy")
}
const search = async (req, res, next) => {
  return res.render("search")
}
const upload = async (req, res, next) => {
  return res.render("upload")
}
module.exports = { getIndex, privacyPolicy, search, upload }