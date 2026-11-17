import express from "express"
import dns from "dns"
import cors from "cors"
import { connectdb } from "./config/Dbconnect.js";
import { user } from "./models/user.model.js";
import { post } from "./models/post.model.js";
const main= express();
dns.setServers(["8.8.8.8"])
connectdb();
main.use(express.json())
main.use(cors({
    origin:"*"
}))


main.get("/",(req,res)=>{
    res.send("This is main page")
})

main.post("/userRegister",async(req,res)=>{
    try {
          const {firstname,lastname,email,gender,password}= req.body

    if(!firstname ||!lastname ||!email ||!gender ||!password){
        return res.status(400).json({
            message:"All the fields are cumpolsory"
        })
    }

        const data= user.create({
            firstname,
            lastname,
            email,
            gender,
            password
        })

        res.status(200).json({
            message:"User created successfully",
            user: data
        })

    } catch (error) {
        console.log(error);
        
    }  
})

   main.get("/userget",async(req,res)=>{
            try {
                const data= await user.find()

                res.status(200).json({
                    message:"User get successfully",
                    user: data
                })
            } catch (error) {
                console.log(error);
                
            }
        })

        main.put("userupdate/:id",async(req,res)=>{
            try {
                const {id}= req.params
            const {firstname,lastname,email,gender,password}= req.body

            const data= await user.findByIdAndUpdate(id,{
                firstname,
                lastname,
                email,
                gender,
                password
            },{returnDocument:"after"})

            res.status(200).json({
                message:"User updated successfully",
                user: data
            })

            } catch (error) {
              console.log(error);
                
            } 
        })

        main.delete("/userdelete/:id",async(req,res)=>{
            try {
                const {id}= req.params
                
                const data= await user.findByIdAndDelete(id)
                res.status(200).json({
                    message:"User deleted sucessfully",
                    user: data
                })
            } catch (error) {
             console.log(error);
                
            }
        })


        
main.post("/postRegister",async(req,res)=>{
    try {
          const {title,photo,like,comment}= req.body

    if(!title ||!photo ||!like ||!comment){
        return res.status(400).json({
            message:"All the fields are cumpolsory"
        })
    }

        const data= post.create({
            title,
            photo,
            like,
            comment
        })

        res.status(200).json({
            message:"post created successfully",
            post: data
        })

    } catch (error) {
        console.log(error);
        
    }  
})

main.get("/postget",async(req,res)=>{
            try {
                const data= await post.find()

                res.status(200).json({
                    message:"post get successfully",
                    post: data
                })
            } catch (error) {
                console.log(error);
                
            }
        })

        
        main.delete("/postdelete/:id",async(req,res)=>{
            try {
                const {id}= req.params
                
                const data= await post.findByIdAndDelete(id)
                res.status(200).json({
                    message:"post deleted sucessfully",
                    post: data
                })
            } catch (error) {
             console.log(error);
                
            }
        })

        main.put("/postupdate/:id",async(req,res)=>{
            try {
                const {id}= req.params
                const {title,photo,like,comment}=req.body

                const data= await post.findByIdAndUpdate(id,{
                    title,
                    photo,
                    like,
                    comment
                })

                res.status(200).json({
                    message:"Post updated successfully",
                    post: data
                })
                
            } catch (error) {
                console.log(error);
                
            }
        })
        
    
main.listen(8200,(req,res)=>{
    console.log("Server is running on 8200")
})