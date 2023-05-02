const Users = require("../model/userModel");

const register = async (req, res) => {
  const { name, email, gender, password } = req.body;
  try {
    const userPresent = await Users.findOne({ email });
    if (userPresent) {
      return res.send("user already present");
    } else {
      const newUser = new Users({
        name,
        email,
        gender,
        password,
      });
      const saveUser = await newUser.save();
      res.status(200).send("created", saveUser);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUser = async (req, res) => {
  try {
    const getUserData = await Users.find({});
    res.status(200).send(getUserData);
  } catch (error) {}
};

module.exports = {
  register,
  getUser,
};
