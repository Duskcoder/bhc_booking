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
      return res.status(401).json({ message: "Unauthorized access: No token provided" });
    }

    const decoded = await util.promisify(jsonwebtoken.verify)(token, process.env.SECRET_KEY);
    const userId = decoded.data.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized access: User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token", error: err.message });
  }
};

// Middleware to restrict access based on roles
async function restrict(RoleValidation) {
  return async (req, res, next) => {
    try {
      const roles = await RoleValidation(); // Assuming RoleValidation is a function that returns a promise resolving to an array of roles

      if (!roles.includes(req.user.role)) {
        const error = new Error("You don't have permission to perform this action");
        error.status = 403;
        return next(error);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = { generateToken, isAuthenticate, restrict };
