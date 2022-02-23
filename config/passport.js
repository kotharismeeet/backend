const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function (passport) {

    passport.use( new GoogleStrategy({
        clientID: process.env.PASSPORT_GOOGLE_OAUTH_CLIENTID,
        clientSecret: process.env.PASSPORT_GOOGLE_OAUTH_SECRETKEY,
        callbackURL: 'http://localhost:8080/api/auth/google/callback'
        }, (acessToken,refreshToken,profile,done) => {
            console.log(profile);                          
        })    
    )  
}