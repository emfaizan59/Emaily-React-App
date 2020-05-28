import React, {useState, Fragment} from 'react'
import {useSelector} from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton';
import {Link} from 'react-router-dom'
import { makeStyles , Paper , Button, Tooltip } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    paper : {
        
       
        padding : '20px 20px 40px 20px',
        backgroundColor  : '#515151',
        textAlign :'center' ,
        alignContent : 'center'
    } , 
    skeleton : {
        maxWidth : '700px',
        margin : '20px auto' ,

    },
    buttonSurv : {
 
        border : '1px solid white' , 
    },
    
    buttonNewSurv : {
        border : '1px solid white' , 
    }
}))

const LandingPageContent = (props) => {
   const [loading , setLoading] = useState(true)
    const classes = useStyles()
    const getUserData = useSelector(state=>state.auth)
   
    console.log(getUserData)
    
    const renderPage = () => {
       
        switch(getUserData){
            case null :
           return    (
                <div className={classes.skeleton}>
                <Skeleton animation="wave"  height={30} />
                <Skeleton animation="wave"  height={30} />
                <Skeleton animation="wave"  height={30} />
                <Skeleton animation="wave"  height={30} />
                <Skeleton animation="wave"  height={30} />
                </div>   
           )
       
            case false :
         return (
                  <div>
                <h1>Welcome! to Emaily Application</h1>
               <h3>Dear, Get yourself registered from your google Account and enjoy Emaily Features.</h3>
               </div>
         )
            
            default :
         return(
           <Fragment>
            <h1>Welcome! to Emaily Application</h1>
           <h3>Dear, {getUserData.userDisplayName} you have <strong style={{color :'#F7CD46'}}>${getUserData.credits}</strong> in your account.</h3>
           
           
           <Link to="/surveys" style={{textDecoration : 'none'}} ><Button variant ="outlined" className={classes.buttonSurv} >Check your Surveys</Button> </Link>
           <br/>    <br />
           <Tooltip title={getUserData.credits == 0 ? "You have not enough Credit" : "Add New Survey"} arrow>
       <Link to={getUserData.credits !== 0 ? "/surveys/addnew" : ''} style={{textDecoration : 'none'}}>       <Button variant ="outlined" disabled={getUserData.credits == 0 ? true : false} className={classes.buttonNewSurv}>Add new Survey</Button> </Link>
           </Tooltip>


           </Fragment>
         )

        }
       
       
    
    }
    
    return(
        <div>

            <Paper variant="elevation" className={classes.paper} elevation={4}  >
   
                {renderPage()}

                 </Paper>
        </div>
    )
}


export default LandingPageContent