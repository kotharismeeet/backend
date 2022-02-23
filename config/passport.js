const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Customer = require('../models/Customer.js');

module.exports = function (passport) {

    passport.use( new GoogleStrategy({
        clientID: process.env.PASSPORT_GOOGLE_OAUTH_CLIENTID,
        clientSecret: process.env.PASSPORT_GOOGLE_OAUTH_SECRETKEY,
        callbackURL: 'http://localhost:8080/api/auth/google/callback'
        }, async (acessToken,refreshToken,profile,done) => {
            //console.log(profile);
            const email = profile.emails[0].value;
            console.log(email);
            const existingCustomer = await Customer.findOne({email});
            if(existingCustomer) {
                done(null,existingCustomer);
            }
            else {
                const newCustomer = await Customer.create({
                    name: profile.displayName,
                    email: email,
                    password: 'pswd',
                    contactnum: '1234567890',
                    isAdmin: false
                });

                done(null,newCustomer);
            }
        })    
    )

    passport.serializeUser(function(user, done) {
        done(null, user._id);
        // if you use Model.id as your idAttribute maybe you'd want
        // done(null, user.id);
    })
    
    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
      });
    })
}