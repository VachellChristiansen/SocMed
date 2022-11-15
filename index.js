const express = require('express');
const ejs = require('ejs');
const router = express.Router()
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(8000);
// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get(('/myprofile'), async (req, res) => {
  res.render('pages/myprofile')
})
app.get(('/register'), async (req, res) => {
  res.render('pages/register')
})
app.get(('/search'), async (req, res) => {
  res.render('pages/search')
})
app.get(('/signin'), async (req, res) => {
  res.render('pages/signin')
})
app.get(('/upload'), async (req, res) => {
  res.render('pages/upload')
})

//profiles
app.get(('/user1'), async (req, res) => {
  res.render('profiles/user1')
})

//setting
app.get(('/settings/change-pass'), async (req, res) => {
  res.render('setting/change-pass')
})
app.get(('/settings/edit-profile'), async (req, res) => {
  res.render('setting/edit-profile')
})
app.get(('/settings/help'), async (req, res) => {
  res.render('setting/help')
})
app.get(('/settings/manage-account'), async (req, res) => {
  res.render('setting/manage-account')
})
app.get(('/settings/private'), async (req, res) => {
  res.render('setting/private')
})
app.get(('/settings/privacypolicy'), async (req, res) => {
  res.render('setting/privacypolicy')
})
module.exports=router;


