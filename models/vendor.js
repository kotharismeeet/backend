const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema({ 
    restauarant_official_name : {type : String, required: true}, 
    display_name : {type: String, required: true}, 
    city : {type: String, required: true}, 
    registered_email : { 
        type: String, 
        required: true, 
        unique: true,
        trim: true, 
        lowercase: true, 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/] 
    }, 
    //member_since : {type : timestamp, required: true}, //payment_gateway 
    description : String, 
    address : {type: String, required: true}, 
    country : {type: String, required: true}, 
    postal_code : {type: String, required: true}, 
    contact_no : {type: Number, required : true}, 
    }, {
        timestamps : true
    });

const Vendor  = mongoose.model('Vendor',vendorSchema); 

const vendorCategorySchema = mongoose.Schema({ 
    categoryName:{type: String , required: true}, 
    categoryDesciption:{type: String , required: true}, 
    vendor: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Vendor', 
        index: true 
    } 
}); 
const VendorCategory = mongoose.model('VendorCategory',vendorCategorySchema); 
    

let vendorItemSchema = mongoose.Schema({ 
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref:'VendorCategory' 
    },
    vendor : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Vendor
    },
    item: {type: String, required: true}, 
    price: {type: Number, required: true}, 
    inStock: {type: Boolean, required: true}, 
    //order:{} 
}); 
 // https://docs.mongodb.com/manual/indexes/ 
// https://stackoverflow.com/questions/51349764/createindex-in-mongoose 
vendorItemSchema.index({category: 1}); 

const VendorItem = mongoose.model('VendorItem',vendorItemSchema);

module.exports = {VendorItem,VendorCategory,Vendor};