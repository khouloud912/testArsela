const mongoose= require('mongoose')

const testSchema=mongoose.Schema({
    _idtest:mongoose.Schema.ObjectId,
    title:{type:String,default:''},
    description:{ type:String ,default:''},
})
module.exports=mongoose.model('Tester',testSchema);

