import React , {useState} from 'react'
import SurveyForm from './SurveyForm'
import ReviewSurvey from './ReviewSurvey'
import {reduxForm} from 'redux-form'
import {Container , makeStyles } from '@material-ui/core'
const useStyles = makeStyles ((theme) => ({
  container : {
 
    color : 'white',
  }
}))
const NewSurvey = () => {

  const [reviewFormFlag , setReviewFormFlag] = useState(false)
  const classes = useStyles()
    return(
        <Container maxWidth={false} className={classes.container}>

        {reviewFormFlag ? 
           <ReviewSurvey onSurveyReviewFlag = {() => {setReviewFormFlag(false)}} />   
        : 
           <SurveyForm onSurveyReviewFlag = {() => setReviewFormFlag(true)} />
        }
        </Container>

    )
}


export default reduxForm({
  form : 'surveyForm' ,
})(NewSurvey)