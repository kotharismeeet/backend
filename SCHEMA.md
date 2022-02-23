# Schema Design
(Reference for syntax is at last Customer)

## Vendors

1. Vendor 
2. Vendor_Category (ref vendor_id)
3. Vendor_Menu (ref vendor_category_id)
4. Vendor_Menu_Topping (ref vendor_menu_id)
   
### Not for Now

## Events

1. Event
2. Event_Zone (ref event_id)
3. Event_Zone_Vendor (ref event_zone_id)

## Venues

1. Venue
2. Venue_Locations (ref venue_id)
3. Venue_Locations_Vendor (ref venue_location_id)

## Order

## Table Bookings

## Customer
```
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    contactnum : {
        type: Number,
        required: true
    },
    /*registeredSince : {
        type: String,
        required: true
    },*/
    isAdmin : {
        type: Boolean,
        default: false,
        required: true
    }
}, {
    timestamps : true
});

module.exports = mongoose.model('Customer',customerSchema); 
```
