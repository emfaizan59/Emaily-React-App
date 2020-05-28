import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {Button , makeStyles} from '@material-ui/core';
import {MonetizationOnOutlined}  from '@material-ui/icons';
import {useDispatch} from 'react-redux'
import {handleToken} from '../../Actions'
 
const useStyles = makeStyles({
  paymentButton : {
    "&:hover":{
      backgroundColor : '#cc9c0e' ,
      border : 'none'
    },
  }
})
const Payments = () => {
  const handleStripeToken = useDispatch()
  const classes = useStyles()
    return(
        <StripeCheckout 
        name = "Emaily"
        description = "$5 for Email Credits."
        amount={500} 
        token={token => handleStripeToken(handleToken(token))}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
    <Button className={classes.paymentButton} style={{color : 'white' , border : '1px solid white' , marginRight : '10px'}} variant="outlined"  startIcon={<MonetizationOnOutlined />} >
        Add Credit
          </Button>  
            </StripeCheckout>

    )
}


export default Payments