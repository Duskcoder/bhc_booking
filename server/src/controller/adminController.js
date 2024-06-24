const userSchmea = require("../model/userModel");
const { generateToken } = require("../middleware/auth");
class adminCreate {
  async createAdmin(req, res, next) {
    try {
      const emailAlready = await userSchmea.findOne({ email: req.body.email });
      if (emailAlready) {
        return res.status(400).json({ message: "Email already exist" });
      }
      const admin = userSchmea.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
        role: "admin",
      });
      const data = {
        id: admin._id,
      };
      const token = generateToken(data);
      return res
        .status(200)
        .json({ message: "Admin create Successfully", token: token });
    } catch (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    }
  }

  async LoginAdmin(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email or Password is Required" });
      }
      const emailExists = await userSchmea
        .findOne({ email })
        .select("+password");
      if (!emailExists) {
        return res.status(400).json({ message: "Email not found" });
      }
      const passwordCompare = await emailExists.comparePassword(password);
      if (!passwordCompare) {
        return res.status(400).json({ message: "Password is not match" });
      }
      const data = {
        id: emailExists._id,
      };
      const token = generateToken(data);
      return res
        .status(200)
        .json({ message: "Admin Login Successfully", token: token });
    } catch (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    }
  }
}

module.exports = adminCreate;
