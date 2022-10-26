const express = require('express')
const router = express.Router()

router.get('/',async (req , res) =>{
  res.render ('pages/index')
})

router.get(('/upload'), async (req, res) => {
  res.render('pages/upload')
})
router.get(('/register'), async (req, res) => {
  res.render('pages/register')
})
router.get(('/myprofile'), async (req, res) => {
  res.render('pages/myprofile')
})
router.get(('/search'), async (req, res) => {
  res.render('pages/search')
})
router.get(('/signin'), async (req, res) => {
  res.render('pages/signin')
})

module.exports=router;

