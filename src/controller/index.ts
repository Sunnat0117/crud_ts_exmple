import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid";
import { TodoInstance } from "../models";

class TodoController {
  async create(req: Request, res: Response) {
    const id = uuidv4();
    try {
      const record = await TodoInstance.create({ ...req.body, id });

      return res.json({
         message: "Successfully",
          data: record 
        });
    } catch (e) {
      res.json({ msg: "failed", error: e });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const result = await TodoInstance.findOne({ where: { id } });
      if(!result){
        res.status(404).json({
          msg : "Product not found"
        })
      }

      res.json({
        message: "get successfully",
        data: result,
      });
    } catch (e) {
      res.json({ msg: "failed", error: e });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const limit = req.query?.limit as undefined | number;
      const offset = req.query?.offset as undefined | number;

      const result = await TodoInstance.findAll({ where: {}, limit, offset });

      res.json({
        message: "All products",
        data: result,
      });
    } catch (e) {
      res.json({ msg: "failed", error: e });
    }
  }

  async update (req : Request, res: Response){  
    try{
           const {id}= req.params

           const result = await TodoInstance.findOne({where :{id}})
            if(!result){
                return res.json({msg : 'dont found result'})           }

           const updatedResult =  await result.update({comleted  :! result.getDataValue("comleted")})
            res.json({
            message : 'get successfully',
            data : updatedResult
        })
    }catch(e) {
        res.json({msg : 'failed', error : e})
    }
}

async delete(req : Request, res: Response){  
  try{
         const {id}= req.params

         const result = await TodoInstance.findOne({where :{id}})
          if(!result){
              return res.json({msg : 'dont found result'})
          }

         const deletedResult =  await result.destroy()
          res.json({
          message : 'get successfully',
          data : deletedResult
      })
  }catch(e) {
      res.json({msg : 'failed', error : e})
  }
}
}

export default new TodoController();
