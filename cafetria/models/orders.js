var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var orders=new Schema({

	order_id:Number,
	order_date:{
		type:Date,
		default:Date.now
	},
	order_status:String,
	order_amount:String,
	order_action:String,
	user_name:String,
	order_room:Number,
	order_ext:Number
});
//register model
 mongoose.model('orders',orders);