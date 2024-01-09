const mongoose = require("mongoose");
const { boolean } = require("zod");

const MONGO_URL = "mongodb+srv://Mg1234:Mg1234@mgcluster.xirs72n.mongodb.net/TODO-APP?authSource=admin&replicaSet=atlas-6xvhm5-shard-0&readPreference=primary&ssl=true";
mongoose.connect(MONGO_URL);
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {todo};