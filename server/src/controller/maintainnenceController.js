const maintenanceModel = require("../model/maintenanceModel");
const CustomError = require("../utils/customError");

class Maintainence {
  createMaintainence = async (req, res, next) => {
    try {
      const user = req.user._id;

      // await

      const data = await maintenanceModel.create({ ...req.body, userId: user });

      res.status(201).json({ data });
    } catch (error) {
      next(new CustomError(error.message, 500));
    }
  };


  getMaintainence = async(req,res,next)=>{
    try{
        const data = await maintenanceModel.find().sort({updatedAt:-1,createdAt:-1}).populate("userId")

        res.status(200).json({data})
    }catch(error){
        next(new CustomError(error.message,500))
    }
  }


  updateMainTainence = async(req,res,next)=>{
    try{
        const data =await maintenanceModel.findByIdAndUpdate(req.params.id,req.body,{new:true})

        res.status(200).json({data})
    }catch(error){
        next(new CustomError(error.message,500))
    }
  }
}


module.exports = Maintainence
