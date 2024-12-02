import mongoose from "mongoose";

// const dataSchema=new mongoose.Schema({
//     id:{type:Number, required:true},
//     title:{type:String, required:true},
//     price:{type:Number, required:true},
//     totalprice:{type:Number, required:true},
//     thumbnail:{type:String, required:true},
//     quantity:{type:Number, required:true},
//     category:{type:String,required:true}
// },
// {timestamps:true}
// )

const dataSchema=new mongoose.Schema({
    items: [
      {
        _id:false,
        category:{type:String,required:true},
        id: {type:Number, required:true},
        title: {type:String, required:true},
        quantity: {type:Number, required:true},
        price: {type:Number, required:true},
        thumbnail:{type:String, required:true},
      }
    ],
    totalPrice: {type:Number, required:true},
    order_date: {type:String, required:true},
}
,
{timestamps:true}
)

const Cartdata=mongoose.models.Cart || mongoose.model("Cart",dataSchema)

export default Cartdata;