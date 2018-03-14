var mongoose=require('mongoose');
var mongoosePaginate=require('mongoose-paginate');
var Schema=mongoose.Schema;

var products=new Schema({
    p_name:String,
    p_price:Number,
    p_category:String,
    p_img:String
   
   });
  products.plugin(mongoosePaginate);
  mongoose.model("products",products);