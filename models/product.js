const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    image: {
        type:String,
        default: ''
    },
    description:{
        type:String,
        required:true
    },
    richDescription:{
        type:String,
        default:''
    },
    images:[{
        type:String
    }],
    brand:{
        type:String,
        default:''
    },

    countInStock: {
        type:Number,
        required: true,
        min:0,
        max:255
    },
    price:{
        type:Number,
        default: 0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        rer:'Category',
        required: true
    },
    rating:{
        type:Number,
        default: 0
    },
    numReviews:{
        type:Number,
        default: 0
    },
    isFeatured:{
        type:Boolean,
        default: false
    },
    dateCreated:{
        type:Date,
        default:Date.now()
    }

})


exports.Product = mongoose.model('Product', productSchema);
