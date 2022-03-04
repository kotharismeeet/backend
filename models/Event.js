const mongoose = require('mongoose');
const Vendor = require('./Vendor.js');

const eventSchema = mongoose.Schema({ 
    name: {type: String, required: true}, 
    //location: {type: String, required: true}, 
    postcode: {type: String, required: true}, 
    startdate: {type: Date, required: true}, 
    enddate: {type: Date, required: true}, 
    address: { 
        type: String, 
        required: true, 
    }, 
    city: { 
        type: String, 
        default: '', 
    }, 
    country: { 
        type: String, 
        required: true, 
        //enum: COUNTRIES.map(country => country.name) 
    }, 
    isActive: { 
        type: Boolean, 
        required: true, 
        default: true 
    } 
}); 

const Event = mongoose.model('Event',eventSchema);    

const eventZoneSchema = mongoose.Schema({ 
    name: {type: string}, 
    //zoneLocation
    event: { 
        type:mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Event', 
        index: true
    }
}); 

const EventZone = mongoose.model('EventZone', eventZoneSchema); 
    
const eventZoneVendorSchema = mongoose.Schema({ 
    vendors: [
        { 
            type:mongoose.Schema.Types.ObjectId, 
            required: true, 
            ref: Vendor,
        }
    ], 
    eventzone: { 
        type:mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'EventZone', 
        index: true 
    } 
}); 

const EventZoneVendor = mongoose.model('EventZoneVendor', eventZoneVendorSchema);

module.exports = {Event,EventZone,EventZoneVendor};