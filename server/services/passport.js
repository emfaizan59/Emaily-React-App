const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys =  require('../config/keys')

const User = mongoose.model('users')


passport.serializeUser( (user , done) => {
    done(null , user.id)
})

passport.deserializeUser ( (id , done) => {
    User.findById(id)
    .then(user => {
        done(null , user)
    })
})



passport.use(new GoogleStrategy({
    clientID : keys.googleClientID , 
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback' ,
    proxy : true
}, async (accessToken, refreshToken , profile, done) => {

        // console.log("Access Token: ",accessToken)
        // console.log("Refresh Token: ",refreshToken)
        console.log("Profile Details: ",profile)


      const existingUser = await User.findOne({googleID : profile.id})
            if(existingUser)
            {
                return  done(null , existingUser)
            }


         const user = await  new User({googleID : profile.id ,userDisplayName : profile.displayName , userPicture : profile.photos[0].value }).save()
         done(null , user)
            
        


}))



