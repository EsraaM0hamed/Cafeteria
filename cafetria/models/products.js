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
   products.post('remove',function(doc){
   var product_id=doc._id;
   mongoose.model("products",remove({product:_id},function(err,result){


   }))

   })
  products.plugin(mongoosePaginate);
  mongoose.model("products",products);