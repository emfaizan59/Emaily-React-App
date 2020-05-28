import React from 'react'
import {reduxForm , Field} from 'redux-form'
import SurveyField from './SurveyField'
import {Container, makeStyles, Button, Typography, ButtonGroup } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {FeedbackOutlined} from '@material-ui/icons'

const useStyle = makeStyles({
    root: {
        width: '70%',
        padding : '20px',
        margin : '0px auto'
    },
    field : {
        marginBottom : '20px'
    },


})


const fieldArray =  [{label:'Survey Title' , name:'title'} ,
{label:'Survey Subject' , name:'subject'} ,
{label:'Survey Question' , name:'body'}, 
{label:'Recipient Emails' , name:'recipients'} ]


const validEmails = (emails) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   
    
    const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false)
    
    if(invalidEmails.length)
    {
        return `These Emails are invalid: ${invalidEmails}`
    }

    return
}


const SurveyForm = (props) => {

    
   const classes = useStyle()

   const renderTextField = ({label , input , meta}) => (
   
    <TextField 
    id="outlined-size-small" variant="outlined"     size="small"
    label = {label}
    fullWidth
    error = {meta.touched && meta.error}
    helperText={meta.touched && meta.error }
      {...input}
    //   {...custom}
    />
  )

   return(


   <div className={classes.root}>
      
       <Typography variant="h4" align= "center" gutterBottom = {true} >Add new Survey Form </Typography>
        <form onSubmit={props.handleSubmit(() => {props.onSurveyReviewFlag()})} >
         
         {
                  fieldArray.map((element , i) => (
                <div className={classes.field} key={i}>
                <Field  name={element.name} label={element.label} component={renderTextField}  />
            </div>
                ))
         }
      
      <ButtonGroup orientation="horizontal" fullWidth={true}>
            <Button variant="outlined"  type="submit">Submit</Button> 
            <Button  variant="outlined"  href="/">Back</Button> 
            </ButtonGroup>
        </form>

</div>     
    )
}

const validate = (values) => {
    const errors = {}

    // if(!values.surveyTitle)
    // {
    //     errors.surveyTitle = "You must Enter Survey Title."
    // }

    errors.recipients = validEmails(values.recipients || '') 

    fieldArray.forEach(({name}) => {
        if(!values[name])
        {
            errors[name]= "Must Provide value."
        }
    })


    return errors
}


export default  reduxForm({
    validate ,
    form : 'surveyForm' ,
    destroyOnUnmount : false
})(SurveyForm)