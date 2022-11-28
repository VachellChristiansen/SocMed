const path = require("path");
const { Users } = require(path.join(__dirname, "../models/Model"));

const indexsetting = async (req, res, next) => {
  res.render("Settings/indexsetting", { current: req.user } )
};

const updateProfile = async (req, res, next) => {
  try {
    const email = req.body.email;
    const user = await Users.findOne({ email }).exec();
    if (!user) {
      throw new Error('User does not exist');
    }

    await Users.updateOne({ email },
      {
        $set: {
          username: req.body.username,
          name: req.body.name
        }
      }
    ).exec();

    return res.json({
      email: user.email,
      username: user.username,
      name: user.name,
    }).status(200);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  indexsetting,
  updateProfile
}