import React from 'react' 
import {useSelector , useDispatch} from 'react-redux'
import {withRouter } from 'react-router-dom'
import { Container, Typography, makeStyles , Button , List , ListItem , ListItemText} from '@material-ui/core'
import {surveyForm} from '../../Actions'
const useStyles = makeStyles({
    root : {
        width:'500px',
        margin : '10px auto',
       
    },
    textHeading : {
    fontSize : '16px',
    marginBottom : '5px',
    textDecoration : 'underline' 
    
    },
    textfield : {
    
        paddingLeft : '40px',
        fontSize : '22px',
    
        marginBottom : '20px'
    },
    formHeading : {
        fontSize : '24px',
        fontWeight : 'bold',
        marginBottom : '20px'
        
    },
    textfieldEmail : {
        paddingLeft : '25px',
        fontSize : '22px',
     
    }
})
const ReviewSurvey = (props) => {
    const classes = useStyles()
    const surveyFormSend = useDispatch() 
    const formValues = useSelector(state => state.form.surveyForm.values)

    console.log(formValues)
    return(
        <Container style={{width : '100%' , padding : '20px'}} >
           
           <div className={classes.root}>
           <Typography  className = {classes.formHeading}>Review your Survey Form</Typography>

               <Typography className = {classes.textHeading} color="textSecondary">Survey Title</Typography>
           <Typography className = {classes.textfield}>{formValues.title}</Typography>


                <Typography className = {classes.textHeading} color="textSecondary">Email Subject</Typography>
                <Typography className = {classes.textfield}>{formValues.subject}</Typography>


                <Typography className = {classes.textHeading} color="textSecondary">Email Body</Typography>
                <Typography className = {classes.textfield}>{formValues.body}</Typography>


                <Typography className = {classes.textHeading} color="textSecondary">Recipient Emails</Typography>
                
            <List className = {classes.textfieldEmail} dense={true}>
            {formValues.recipients.split(',').map((element , i) => (
            <ListItem key={i} >
                
                  <ListItemText primary={element}/>
                </ListItem>
            ))}
                         
            </List>
              <Button variant="outlined" onClick={() => {props.onSurveyReviewFlag()}}>Back</Button>
              <Button variant="outlined" onClick={() => {surveyFormSend(surveyForm(formValues , props.history))}}>Send Survey</Button>

           </div>
           

        </Container>
    )
}


export default withRouter(ReviewSurvey)