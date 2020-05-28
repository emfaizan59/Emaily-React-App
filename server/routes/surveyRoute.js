const mongoose = require('mongoose')
const _ = require('lodash')
const {Path} = require('path-parser')
const {URL} = require('url')
const requireLogin = require('../Middlewares/requiredLogin')
const requiredCredit = require('../Middlewares/requiredCredit')
const Survey =  mongoose.model('surveys')
const Mailer = require('../services/Mailer')
const templateMailer = require('../services/templateMail/templateMail')
module.exports = app => {

    app.get('/api/surveys/:surveyID/:choice' , (req , res) => {
        res.send("Thanks for voting :)")
    })

    app.get('/api/surveys' , requireLogin , async (req,res) => {
        const surveys = await Survey.find({_user : req.user.id}).select({recipients : false})

        // console.log(surveys)
        res.send(surveys)
    })
    app.post('/api/surveys/webhooks' , (req , res)=> {
        // console.log("Req Body: ",req.body)
        const p = new Path('/api/surveys/:surveyID/:choice')
     

        _.chain(req.body)
        .map(({url , email }) => {
        const pathname = new URL(url).pathname
           const match = p.test(pathname)
           if(match)
           {
               return {email  , surveyID : match.surveyID , choice : match.choice }
           }
    
        })
         .compact()
         .uniqBy('email' , 'surveyID')
         .each( ({email , choice , surveyID}) => {
             Survey.updateOne({
                 _id : surveyID ,
                 recipients : {
                     $elemMatch : { email : email , responded : false }
                 }
             } ,
             {
                 $inc : { [choice] : 1} ,
                 $set : { 'recipients.$.responded' : true} ,
                 lastResponded : new Date()
             }
             ).exec()
         } )
         .value()
        // console.log("Unique Events: ",uniqueEvents)
        // console.log(events)
        res.send({})
         
    })

    app.post('/api/surveysMail' , requireLogin , requiredCredit, async (req ,res) => {
        
        const {title , subject , body , recipients} = req.body
        console.log("Mail: ",recipients)
        const survey = new Survey({
            title , 
            subject , 
            body , 
            recipients: recipients.split(',').map(email => ({ email: email.trim() })), 
            _user : req.user.id,
            dateSent : Date.now()
        })
        
    console.log("Survey Recipients: ",survey.recipients)
    console.log("Survey Object: ",survey)
    console.log("Template Object: ", templateMailer(survey))
        const mailer = new Mailer(survey , templateMailer(survey))
     
     try{
        console.log(mailer)

        await mailer.send()
        await survey.save()
        req.user.credits -= 1

        const user = await req.user.save()

        res.send(user)
     }
     catch(err){
         res.status(422).send(err)
     }
    
    })
}