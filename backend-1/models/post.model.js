import { model, Schema } from "mongoose";

const postSchema= new Schema({
   title:{
    type:String,
   },
   photo:{
   type:String
   },
   like:{
    type:Number
   },
   comment:{
    type:String
   }

})

export const post = model("post",postSchema)