const Roleschmea=require("../model/roleModel")

class roleController{
    async createRole(req,res){
        try{
         const existRole=await Roleschmea.findOne({role:req.body.role})
         if(existRole){
            return res.status(400).json({message:"Role already exist"})
         }
         const newRole=await Roleschmea.create(req.body)
         res.status(201).json({message:"Role created successfully",newRole})
        }catch(err){
            return res.status(400).json({message:"Went Wrong"})
        }
    }

    async getRole(req,res){
        try{
          const  getAllRole = await Roleschmea.find()

         res.status(200).json({data:getAllRole})
        }catch(err){
            return res.status(400).json({message:"Went Wrong"})
        }
    }
}


module.exports = roleController;