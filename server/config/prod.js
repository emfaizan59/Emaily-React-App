module.exports = {
    googleClientID : process.env.GOOGLE_CLIENT_ID,
    googleClientSecret : process.env.GOOGLE_CLIENT_SECRET,

    mongodbURI : process.env.MONGO_URI,
    cookieKeys : process.env.COOKIE_KEY ,
    stripePublishedKey : process.env.STRIPE_PUBLISHED_KEY,
    stripeSecretKey : process.env.STRIPE_SECRET_KEY,
    sendGridAPI : process.env.SENDGRID_KEY,
    domainURL : process.env.DOMAIN_URL ,
    email_from : process.env.EMAIL_FROM
}