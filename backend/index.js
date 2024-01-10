const express = require("express");
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors());
const z = require("zod");
const mongoose  = require("mongoose");
const {createTodo,updateTodo} = require("./types");
const { todo } = require("./db");
app.post("/todos",async (req,res)=>{
   const createPayload  = req.body;
   const parsedPayload   = createTodo.safeParse(createPayload);
   if(!parsedPayload.success){
    res.status(411).json({
        msg:"Wrong inputs"
    })
    return;
   }
   await todo.create({
    title : createPayload.title,
    description : createPayload.description,
    completed : false
   })

   res.json({
    msg:"created todo"
   })
})
app.get("/todos",async(req,res)=>{
    const todos =  await todo.find({});
    res.json({todos});
})
app.put("/completed",async(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "Wrong inputs"
        })
        return;
    }

    await todo.update({
        _id:req.body.id,
    },{
        completed : true,
    })
    res.json({
        msg  : "completed todo"
    })
})

app.listen(3000);