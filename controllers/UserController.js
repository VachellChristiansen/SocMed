const jwt = require("jsonwebtoken");
const path = require("path");
const { Users } = require(path.join(__dirname, "../models/Model"));
const config = require(path.join(__dirname, "../src/core/config"));
const { hash, compare } = require(path.join(__dirname, "../src/helpers/Hash"));

async function create(email, username, name, password) {
  const hashedPassword = await hash(password);
  const newUser = new Users({
    email,
    username,
    name,
    password: hashedPassword,
  })
  return newUser.save();
}

async function findByEmail(email) {
  return Users.findOne({ email }).exec();
}

async function login(email, password) {
  const user = await findByEmail(email);
  if(!user) {
    return null;
  }

  const passwordMatched = await compare(password, user.password);
  return passwordMatched ? user : null;
}

async function generateToken(id) {
  const payload = { id };
  return jwt.sign(payload, config.jwtSecretKey)
}

async function findById(id) {
  return Users.findById(id);
}

const createUser = async (req, res, next) => {
  try { // TODO : Check user is already registered?
    const existingUser = await findByEmail(req.body.email);
    if (existingUser) {
      throw new Error('email is already registered');
    }
    // register user (insert to db)
    await create(
      req.body.email,
      req.body.username,
      req.body.name,
      req.body.password,
    );

    return res.json({
      status: 'OK',
      email: req.body.email,
    }).status(200);
  } catch (err) {
    return next(err);
  }
}

const getUser = async (req, res) => {
  res.render("User/mainUser");
}

const loginUser = async (req, res, next) => {
  try {
    const user = await login(req.body.email, req.body.password);
    if (!user) {
      throw new Error('Wrong email or pass');
    }

    const token = await generateToken(user.id);

    return res.json({
      email: user.email,
      name: user.name,
      token,
    }).status(200);
  } catch (err) {
    return next(err);
  }
}

const getOtherUser = async (req, res, next) => {
  res.render("User/otherUser")
};

const register = async (req, res, next) => {
  res.render("User/register")
};

const loginPage = async (req, res, next) => {
  res.render("User/login")
};

module.exports = {
  create,
  createUser,
  getUser,
  loginUser,
  findByEmail,
  login,
  generateToken,
  findById,
  // pages
  getOtherUser,
  register,
  loginPage,
};
