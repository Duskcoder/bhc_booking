const jsonwebtoken = require("jsonwebtoken");
const User = require("../model/userModel");
const util = require("util");

// Generate a token for a given data payload
function generateToken(data) {
  if (!process.env.SECRET_KEY) {
    throw new Error("SECRET_KEY environment variable is not defined");
  }
  return jsonwebtoken.sign({ data }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
}

// Middleware to authenticate the user based on JWT token
const isAuthenticate = async (req, res, next) => {
  try {
    const headers = req.headers.authorization;
    let token;

    if (headers && headers.startsWith("Bearer")) {
      token = headers.split(" ")[1];
    }

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized access: No token provided" });
    }

    const decoded = await util.promisify(jsonwebtoken.verify)(
      token,
      process.env.SECRET_KEY
    );
    const userId = decoded.data.id;
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized access: User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Invalid token", error: err.message });
  }
};

const restrict = (...role) => {
  const allowedFields = new Set(role);

  return (req, res, next) => {
    if (allowedFields.has(req.user.role)) {
      next();
    } else {
      return res.status(403).json({
        message: "You don't have permission to perform this action",
      });
    }
  };
};

module.exports = { generateToken, isAuthenticate, restrict };
