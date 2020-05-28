import React , {Fragment} from 'react'
import {makeStyles , Modal, Backdrop , Fade} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  
    modal: {
        backgroundColor: '#6d6d6d',
          marginTop : '70px',
          marginBottom : '70px',
          marginLeft : '30px',
          marginRight : '30px',
        color : 'white',
      overflowY : 'initial',
        
      [theme.breakpoints.down('sm')]: {
        marginTop : '75px',
        marginBottom : '75px',
        marginLeft : '20px',
        marginRight : '20px',
        
      },
       [theme.breakpoints.down('xs')]: {
    
        marginTop : '80px',
        marginBottom : '80px',

        marginLeft : '10px',
        marginRight : '10px',
     
       
        },



    },
    surDisp : {
      padding : '20px' ,
      height : '90%',
      "&:focus" : {
        outline: 'none',
      },
      overflowY: 'auto' ,
      [theme.breakpoints.down('sm')]: {
        padding : '10px' ,
      },
      
      [theme.breakpoints.down('xs')]: {
        padding : '5px' ,
        textAlign : 'center'
      },
    },
    surTitle : {
   
      
      [theme.breakpoints.down('sm')]: {
       fontSize : '16pt'
        
      },
      [theme.breakpoints.down('xs')]: {
        fontSize : '12pt'
       },
    },
    surSubject : {
   
      [theme.breakpoints.down('sm')]: {
        fontSize : '14pt'
         
       },
       [theme.breakpoints.down('xs')]: {
         fontSize : '11pt'
        },
       
    } ,
    surHeading  : {
      
      [theme.breakpoints.down('sm')]: {
        fontSize : '17pt'
         
       },
       [theme.breakpoints.down('xs')]: {
         fontSize : '14pt'
        },
      
    },
    surBox : {
      textAlign : "center" , 
      backgroundColor:'white' ,
      padding : '20px', 
      margin : '30px' , 
      borderRadius : '10px',


      [theme.breakpoints.down('sm')]: {
        padding : '15px', 
      margin : '20px' , 
       },
       [theme.breakpoints.down('xs')]: {
        padding : '5px', 
        margin : '10px' , 
        },

    },
    surHeadingTit : {
      fontSize: "40pt",
            color: '#a32e2e',
            marginBottom: '0px',

            
      [theme.breakpoints.down('sm')]: {
        fontSize: "26pt",
      },
       [theme.breakpoints.down('xs')]: {
        fontSize: "20pt",
      },

    },
    surHeadingSubHead : {
      marginTop: '10px',
            fontSize: '24pt',
           color: '#0f709c' ,
           
      [theme.breakpoints.down('sm')]: {
        marginTop: '8px',
        fontSize: '20pt',
  },
       [theme.breakpoints.down('xs')]: {
        marginTop: '6px',
        fontSize: '16pt',
  },

    } ,
    surHeadingText : {
      fontSize: '16pt', 
      color: 'black',
      marginBottom: '10px',

           
      [theme.breakpoints.down('sm')]: {
        
        fontSize: '14pt',
      marginBottom: '8px',

  },
       [theme.breakpoints.down('xs')]: {
        fontSize: '12pt',
      marginBottom: '6px',

  },
    },
    surHeadingBody : {
           marginTop: '0px',
            fontSize: '20pt', 
            color: 'black' ,
            fontWeight: 'bold' , 
     
            [theme.breakpoints.down('sm')]: {
        
              fontSize: '16pt', 
          
        },
             [theme.breakpoints.down('xs')]: {
              fontSize: '14pt', 
          
        },       
    } ,
    surHeadingLink1 : {
      textDecoration: 'none',color: 'black', border:'2px solid  #0f709c',
            borderRadius: '5px',      
            padding: '10px',
            marginRight: '20px',

            
            [theme.breakpoints.down('sm')]: {
        
              padding: '8px',
              marginRight: '15px',
            
        },
             [theme.breakpoints.down('xs')]: {
              padding: '5px',
              marginRight: '10px',
            
        },       
    },
    surHeadingLink2 : {
      textDecoration: 'none',
      color: 'black', 
      border:'2px solid  #a32e2e',
            borderRadius: '5px',      
            padding: '10px',
            marginRight: '20px',
            
            [theme.breakpoints.down('sm')]: {
        
              padding: '8px',
              marginRight: '15px',
            
        },
             [theme.breakpoints.down('xs')]: {
              padding: '5px',
              marginRight: '10px',
            
        },      
    },
    surHeadingReg : {
      fontSize: '18pt', 
      marginBottom: '0px' , 
      color : 'black' ,
        
      [theme.breakpoints.down('sm')]: {
        
        fontSize: '16pt', 
  
  },
       [theme.breakpoints.down('xs')]: {
        fontSize: '12pt', 
      
  },
    },
    surHeadingThnks : {
      marginTop: '10px',
      fontSize: '20pt',
      color : 'black',
      [theme.breakpoints.down('sm')]: {
        
        marginTop: '8px',
        fontSize: '16pt',
      
  },
       [theme.breakpoints.down('xs')]: {
        marginTop: '5px',
        fontSize: '14pt',
      
      
  },
    }
  }))
  
const SurveyPreview = (props) => {
   const classes  = useStyles()
  const [open, setOpen] = React.useState(true);  
   console.log(props.data)
   const handleClose = () => {
    props.callback()
  };
    return(        
        <Modal
        
        className={classes.modal}
        open={true}
        onClose={handleClose}
        closeAfterTransition
       
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        
          <div className={classes.surDisp} >
    
            <h2 className={classes.surTitle}>Survey Title: <strong style={{color :'#F7CD46'}}>{props.data.title} </strong></h2> 
             <h3 className={classes.surSubject}>Survey Subject: <strong style={{color :'#F7CD46'}}>{props.data.subject} </strong></h3> 

             <h1 className={classes.surHeading} style={{textAlign :'center'}}>Preview Your Survey</h1> 
    <div className={classes.surBox}  >
            <h1 className={classes.surHeadingTit} >Help Improve Ourself</h1>
            <h3 className={classes.surHeadingSubHead}  >Our Company values your Opinion</h3>
            <p className={classes.surHeadingText} >You are recieving this Email because your are choosing our Product recently. So help us to improve our quality by sending us your feedback.</p>
    
           
            <p className={classes.surHeadingBody} >${props.data.body}</p>
            <div className={classes.surHeadingBtn}>
            <a className={classes.surHeadingLink1}  href='#'>
            Satisfying
            </a>
            <a className={classes.surHeadingLink2} href='#'>
                Not-Satisfying
                </a>
        </div>
            
            <h4 className={classes.surHeadingReg} >We appreciate your time and feedback!</h4>
            <h3 className={classes.surHeadingThnks}>Thanks</h3>
            </div>
          </div>

      </Modal>
    )
}


export default SurveyPreview