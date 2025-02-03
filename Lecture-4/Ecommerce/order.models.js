import mongosse from "mongoose"

const orderItemsSchema = new mongoose.Schema({
    product : {
        type : mongosse.Schema.Types.ObjectId,
        ref : 'Product'
    },
    quantity : {
        type : Number,
        required : true
    }
})
const orderSchema = new mongoose.Schema({
    orderPrice : {
        type : Number,
        required : true
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    orderItems : {
        type : [orderItemsSchema] //to count who oder and in how much qunatity
    },
    address : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ["PENDING" , "CANCELLED" , "DELIVERED"], //give options to check and we can select only out of these ranges
        default : "PENDING"
    }
}, {timestamps : true})

export const order = mongoose.model("Order",orderSchema)