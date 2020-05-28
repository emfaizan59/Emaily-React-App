import React , {useEffect} from 'react'
import {Fab , makeStyles , Container, Typography} from '@material-ui/core'

import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {userSurveys} from '../../Actions'
import SurveysList from './SurveysList'
const useStyles = makeStyles((theme) => ({
 
}))



const Surveys = () => {
    const fetchSurveys = useDispatch()

    useEffect(() => {
         fetchSurveys(userSurveys())
    })

 
 

    const  classes = useStyles()
    return(
       <Container fixed>

          

            <SurveysList />

       
     

        </Container>
    )
}


export default Surveys