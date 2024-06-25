const userSchmea = require("../model/userModel");
const { generateToken } = require("../middleware/auth");
const sendMail = require("../utils/Mailer");
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

  forgetPassword = async (req, res, next) => {
    const { email } = req.body;

    try {
      const findUser = await userSchmea.findOne({ email });

      if (!findUser) {
        res.status(404).json({
          message: `We could not find your email`,
        });
      }

      const resetToken = await findUser.createResetPasswordToken();
      await findUser.save({ validateBeforeSave: false });

      const resetUrl = `http://localhost:5173/reset/${resetToken}`;
      const message = `We have received a password reset request for ${findUser.name}. Please use the below link to reset your password:\n\n${resetUrl}\n\nThis link is valid for 10 minutes.`;

      await sendMail({
        email: findUser.email,
        subject: `Password Change Request Received ${findUser.email}`,
        message: message,
      });

      res.status(200).json({
        message: `Password reset token sent to your email ${findUser.email}`,
      });
    } catch (error) {
      findUser.passwordResetToken = undefined;
      findUser.passwordResetTokenExpired = undefined;
      await findUser.save({ validateBeforeSave: false });

      // Return error response
      return next(
        new CustomError(
          `Failed to send password reset email: ${error.message}`,
          500
        )
      );
    }
  };

  async resetPassword(req, res, next) {
    try {
      const cryptoToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

      const update = await Shop.findOne({
        passwordResetToken: cryptoToken,
        passwordResetTokenExpired: { $gt: Date.now() },
      });

      if (!update) {
        const error = new CustomError("Token is invaild or has expired", 400);
        return next(error);
      }

      update.password = req.body.password;
      update.passwordResetToken = undefined;
      update.passwordResetTokenExpired = undefined;
      update.passwordChangedAt = Date.now();

      await update.save();

      const data = {
        id: update._id,
        role: update.role,
      };

      const token = generateToken(data);
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 30 * 24 * 60 * 60 * 1000,
        })
        .status(200)
        .json({ message: "Your Password has been successfully changed", data });
    } catch (error) {
      return next(new CustomError("Something went Wrong ", 500));
    }
  }
  async adminProfile(req, res, next) {
    try {
      const { _id } = req.user;
      const user = await userSchmea.findById(_id);
      if (!user) {
        return res
          .status(400)
          .json({ message: "User with that Id is not found" });
      }

      res.status(200).json({ data: { user } });
    } catch (error) {
      return res
      .status(400)
      .json({ message: "Went Wrong" });
    }
  }

  async adminGetUsers(req,res,next){
    try{
      const users = await userSchmea.find({role:"user"});
      res.status(200).json({message:users});
    }catch(err){
      return res
      .status(400)
      .json({ message: "Went Wrong" });
    }
  }
}

module.exports = adminCreate;
