const userSchmea = require("../model/userModel");
const Role = require("../model/roleModel");
const RoleValidation = require("../utils/roleValidation");
const { generateToken } = require("../middleware/auth");
class userController {
  async createUser(req, res) {
    const emailAlready = await userSchmea.findOne({ email: req.body.email });
    if (emailAlready) {
      return res.status(400).json({ message: "Email Already Exists" });
    }
    let userCreate = await userSchmea.create(req.body);
    let data = {
      id: userCreate._id,
    };
    const token = generateToken(data);

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: false,

        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .json({ message: "User create Successfully", token: token });
  }

  async loginUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email or Password is Required" });
    }
    const emailExists = await userSchmea.findOne({ email }).select("+password");
    if (!emailExists) {
      return res.status(400).json({ message: "Email is Not Found" });
    }
    const isPasswordValid = await emailExists.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    let data = {
      id: emailExists.id,
    };
    const token = generateToken(data);
    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: false,

        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .json({ message: "Login Successfully", token: token });
  }

  async getUser(req, res) {
    const user = req.user.role;

    const restrict = await RoleValidation(user);

    if (!restrict) {
      return res
        .status(403)
        .json({ message: "you don't have permission to access this route" });
    }

    const data = await userSchmea.find();

    res.status(200).json({ data });
  }
}

module.exports = userController;
