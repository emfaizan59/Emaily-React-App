import React, { useState, useEffect, Fragment } from 'react';
import {Container , makeStyles, Box , Paper} from '@material-ui/core';
import {useDispatch , useSelector} from 'react-redux';
import {fetchUser} from '../../Actions';
import LandingPageContent from './LandingPageContent';

const useStyles = makeStyles ((theme) => ({
    container : {
        backgroundColor : 'black' , 
    
        height : '100px'
    },
    paper : {
            
            margin : '20px auto',
            padding : '20px 20px 40px 20px',
            backgroundColor  : '#515151',
            
        } 
}))
const LandingPage = () => {
    const classes = useStyles()

    const userFetchData = useDispatch()
    useEffect(() => {
        console.log("Use Effect")
        userFetchData(fetchUser())
      });

    return(
        <div>
            <Box>
            <LandingPageContent />
            </Box>
            <Fragment>
            <Paper variant="elevation" className={classes.paper} elevation={4}  >

                <h3>Useful tips to use Emaily Application</h3>
                <ul>
                    <li>Purpose of this App is to Send Product Surveys to multiple recipients and get their Feedbacks.</li>
                    <li>You have to logged in with your Google Accounts.</li>
                    <li>Each survey cost $1 for you.</li>
                    <li>This Application is in developing mode so need not to worry about Credit just Enter Add Credit Button.</li>
                    <li>Credit Credentials are (Email: your Email Address, Card #: 4242 4242 4242 4242, Expiry Date: 11/30, Pin: 123).</li>
                    <li>Continue Adding Surveys and get Quick Response in Surveys Dashboard.</li>

                </ul>
            </Paper>
            </Fragment>
        </div>
    )
}

export default LandingPage