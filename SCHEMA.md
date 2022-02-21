# Schema Design

## Vendors

1. Vendor 
```
restauarant_official_name : {type : string,  required},

display_name : {type: string, required},

city : {type string, required},

registered_email : {
    type: email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
},

member_since : {type : timestamp, required},

//payment_gateway

description : string,

address : {type: string, required},

country : {type: string, required},

postal_code : {type: string, required},

contact_no : {type: double, required :  true},

/* not for now 
platform_fee : {type: double, required :  true},
service_charge : {type: double, required :  true},
vendor_fee : {type : double, required: true},
customer_booking_fee : {},
vendor_booking_fee : {}
*/

```
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