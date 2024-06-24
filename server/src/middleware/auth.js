const jsonwebtoken = require("jsonwebtoken");
const User = require("../model/userModel");
const util = require("util");
const Role = require("../model/roleModel")
const RoleValidation = require("../utils/roleValidation")

function generateToken(data) {
  return jsonwebtoken.sign({ data }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
}

const isAuthendicate = async (req, res, next) => {
  try {
    const headers = req.headers.authorization;
    let token;
    if (headers && headers.startsWith("Bearer")) {
      token = headers.split(" ")[1];
    }
    if (!token) {
      return res.status(401).json({ message: "Unauthorized access" });
    }
    const decoded = await util.promisify(jsonwebtoken.verify)(
      token,
      process.env.SECRET_KEY
    );
    const userId = decoded.data.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized access" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token", err: err.message });
  }
};



const isAuthendicated = async (req, res, next) => {
  const token = req.cookies["token"];

  if (!token) {
    return next(new CustomError("Please login to continue", 401));
  }



  const decode = await util.promisify(jsonwebtoken.verify)(
    token,
    process.env.SECRET_KEY
  );

  const user = await User.findById(decode.data.id);
  

  // switch (decode.data.role) {
  //   case "user":
  //     user = await User.findById(decode.data.id);
  //     break;
  //   case "vendor":
  //     user = await Shop.findById(decode.data.id);
  //     break;
  //   case "super admin":
  //     user = await Shop.findById(decode.data.id);
  //     break;
  //   default:
  //     return next(new CustomError("you are not authendicate", 401));
  // }

  


  if (!user) {
    return next(
      new CustomError("the user with given token does not exist", 404)
    );
  }

  // if (await user.isPasswordChanged(decode.iat)) {
  //   const error = new CustomError(
  //     "The password has been change recently. please login again",
  //     401
  //   );
  //   return next(error);
  // }

  req.user = user;

  next();
}


 






// async function restrict() {
//   return async (req, res, next) => {
//     try {
//       const roles = await RoleValidation; // Assuming RoleValidation is a method that resolves to an array of roles

//       console.log(roles)
//       if (!roles.includes(req.user.role)) {
//         const error = new Error("You don't have permission to perform this action");
//         error.status = 403;
//         return next(error);
//       }
//       next();
//     } catch (error) {
//       next(error); // Pass any errors to the next middleware
//     }
//   };
// }

module.exports = { generateToken, isAuthendicate,isAuthendicated };
