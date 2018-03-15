
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


});


mongoose.model("users",users);
