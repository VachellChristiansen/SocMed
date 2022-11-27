// Import packages
require('./src/helpers/Passport')
const express = require("express");
const path = require("path");
const app = require(path.join(__dirname, "./src/core/server"));
const config = require(path.join(__dirname, "./src/core/config"));
// Import Routes
const user = require(path.join(__dirname, "./routes/UserRoute"));
const index = require(path.join(__dirname, "./routes/IndexRoute"));
const setting = require(path.join(__dirname, "./routes/SettingsRoute"));
const post = require(path.join(__dirname, "./routes/PostRoute"));

// Middlewares
app.use(express.json());
// view related configs
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use("/", index);
app.use("/user", user);
app.use("/setting", setting);
app.use("/post", post);
// connection for local server

app.get("*",(req,res)=>{
  res.render("\errorPage.ejs",{title:"404 Not Found"});
})
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port} + ${ path.join(__dirname) }`));
