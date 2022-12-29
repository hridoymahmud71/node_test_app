const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
  async signUp(req, res) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(200).json({
        message: "Saved Successfully",
      });
    } catch (err) {
      res.status(500).json({
        error: "There was a server side error",
      });
      return;
    }
  },

  async login(req, res) {
    try {
      const user = await User.find({ username: req.body.username });
      

      if (!(user && user.length > 0)) {
        res.status(401).json({
          error: "Authentication failed 1 !",
        });
        return;
      }

      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );     

      if (!isValidPassword) {
        res.status(401).json({
          error: "Authentication failed 2 !",
        });
        return;
      }

      // all clear , now generate token
      const token = jwt.sign(
        { username: user[0].username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        token: token,
        message: "Authentication successful",
      });
    } catch (err) {
      res.status(500).json({
        error: "There was a server side error",
      });
      return;
    }
  },
};

module.exports = userController;
