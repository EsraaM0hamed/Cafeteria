
var mongoose=require('mongoose');
//var mongoosePaginate=require('mongoose-paginate');
var Schema=mongoose.Schema;
var imgPath = '1.png';
var users=new Schema({
   name:String,
   email:String,
   passw:String,
   cpassw:String,
   roomno:Number,
   ext:Number,
   img:String,

/*
  _id:Number,
  name:String,
  dob:{
    type:Date,
    default:Date.now
  }
*/
});

//users.plugin(mongoosePaginate);
/*

users.post('remove',function(doc){
var user_id=doc._id;
  mongoose.model("posts").remove({user:user_id},function(err,result){
    
  });
*/
//register model 
mongoose.model("users",users);
