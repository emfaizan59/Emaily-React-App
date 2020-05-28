import React , {Fragment , useState}  from 'react'
import _ from 'lodash'
import Skeleton from '@material-ui/lab/Skeleton';
import {Add} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import {Container ,Fab , makeStyles , Card , CardContent , Typography  , Grid  , Grow , Tooltip , Button,FormControl , InputLabel , MenuItem , Select} from '@material-ui/core'
import {useSelector} from 'react-redux'
import SearchBar from './SearchBar'
import SurveyPreview from './SurveyPreview';
const useStyles = makeStyles((theme) => ({
  root : {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(4),
},

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    color : 'white',
     padding: theme.spacing(2, 4, 3),
  },
  mainContainer : {
        // border : '2px solid red'
    } ,
    cardView : {} ,
    cardTitle : {
        fontSize : '24px' ,
        fontWeight : 'bold' ,
        
    } ,
   cardSubject : {
    textAlign : 'left' , 
    float : 'left' , 

    fontSize : '20px'
   },
   cardDateSent : {
    textAlign : 'right' , 
    float : 'right',
    fontSize : '20px'

},
noSurvey : {
  textAlign : 'center' ,
  margin : '50px'
},
noSurveyTitle : {
  color : 'white' ,
  fontSize : '20px' , 
  fontWeight : 'bold'
}
}))


const SurveysList = () => {
  const [searchSurveys , setSearchSurveys] = useState(false)
  const [open, setOpen] = React.useState(false);  
  const [modalData , setModalData] = React.useState(null)
  const [sortedSurveys , setSortedSurveys] = useState(false)
  const classes = useStyles()

    let surveyList = useSelector(state => state.surveys)
    const getUserData = useSelector(state=>state.auth)
    let arr = ''
    // console.log("Survey List",surveyList)
    if(surveyList !== null)
    {
    arr = [...surveyList] || null
    // console.log("Survey Array",arr)  

    } 
    const onSearchChange = (searchValue) => {
     setSortedSurveys(false)
     setSortedVal("newest")
      console.log(searchValue)
      // var re =  new RegExp("\\b" + searchValue + "\\b","i");
      // console.log("Survey Search Array Old",arr)

      let re = new RegExp(searchValue, 'i');
    
      const res = _.filter(arr, function(o) { return ( o.title.match(re) || o.subject.match(re) || o.body.match(re))});
      // console.log(res)
      arr = [...res]
    setSearchSurveys(arr)    
    

}

const [sortedVal, setSortedVal] = React.useState("newest");

const handleChange = (event) => {
  setSortedVal(event.target.value);
  const a = event.target.value
  switch(a){
    case "newest" :
    setSortedSurveys( _.sortBy(searchSurveys || arr , ['dateSent']) )
    break
    case "title" :
    setSortedSurveys( _.chain(searchSurveys || arr ).sortBy([ function(o){return o.title.toLowerCase()} ]).reverse().value() )
    break
    
    case "subject" :
    setSortedSurveys( _.chain(searchSurveys || arr ).sortBy([ function(o){return o.subject.toLowerCase()} ]).reverse().value()  )
    break

    case "responded" : 
    setSortedSurveys( _.chain(searchSurveys || arr ).sortBy([ function(o){return o.lastResponded} ]).reverse().value())
    break

    case "responses" :
    setSortedSurveys( _.sortBy(searchSurveys || arr , ['yes' , 'no']) )
    break
  } 

console.log(sortedSurveys)

};


const handleOpen = (Data) => {
 console.log(Data)
  setOpen(true);
  setModalData(Data)
};

const onClose = () => {
  setOpen(false)
}


    return(

<Container className = {classes.mainContainer} fixed  >

<Fragment>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={3} >
 <Typography variant="h5"   color="textPrimary" >Survey Dashboard</Typography>
</Grid>
{surveyList !==null && surveyList.length > 0 ?
  <Fragment>
<Grid item xs={8} sm={7} >
      <SearchBar  callback = {onSearchChange}/>
</Grid>

<Grid item xs={4} sm={2} >
<FormControl variant="outlined" fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={sortedVal}
          onChange={handleChange}
          label="Sort By"
        >
          <MenuItem value={"newest"}>Newest</MenuItem>
          <MenuItem value={"title"}>Title</MenuItem>
          <MenuItem value={"subject"}>Subject</MenuItem>
          <MenuItem value={"responses"}>Responses</MenuItem>
          <MenuItem value={"responded"}>Last Responded</MenuItem>
        </Select>
      </FormControl>
</Grid>

  </Fragment>
  :
  null
}

</Grid>
{surveyList === null ?

        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} >
        <Card variant="outlined" style={{padding : '20px'}}>
                <Skeleton animation="wave"  height={30} />
                <Skeleton animation="wave"  height={30} />
                <Skeleton animation="wave"  height={30} />
                <Skeleton animation="wave"  height={30} />
                <Skeleton animation="wave"  height={30} />
                </Card>
        </Grid>
        <Grid item xs={12} sm={6} >
        <Card variant="outlined" style={{padding : '20px'}}>
                <Skeleton animation="wave"  height={30} />
                <Skeleton animation="wave"  height={30} />
                <Skeleton animation="wave"  height={30} />
                <Skeleton animation="wave"  height={30} />
                <Skeleton animation="wave"  height={30} />
                </Card>
        </Grid>
        </Grid>

:

<Fragment>
{surveyList.length < 1 ? 
          
          <div className={classes.noSurvey}>
            <h4 className={classes.noSurveyTitle}>No Survey Created Yet</h4>
            <Tooltip title={getUserData.credits == 0 ? "You have not enough Credit" : "Add New Survey"} arrow>
       <Link to={getUserData.credits !== 0 ? "/surveys/addnew" : '/surveys'} style={{textDecoration : 'none'}}>       <Button variant ="outlined" disabled={getUserData.credits == 0 ? true : false} className={classes.buttonNewSurv}>Add new Survey</Button> </Link>
           </Tooltip>
          </div>
:
        <Grid container spacing={2}>
{/* {    console.log("Search Array",searchSurveys)} */}
   

          {_.chain(sortedSurveys || searchSurveys || arr)
            // .map(({_id , title , subject , dateSent, no , yes , lastResponded}) => (
              .map((element , id) => (
   
              <Grow
              key={id}
              in={true}
              style={{ transformOrigin: '0 0 0' }}
              {...(true ? { timeout: 1000 } : {})}  
            >
  
   <Grid item xs={12} sm={6}  style={{cursor : 'pointer'}}>

      <Card  variant="outlined" onClick={() => handleOpen(element)}>
      <CardContent>
          
        <Typography className={classes.cardTitle} gutterBottom >
          {element.title}
        </Typography>
      <div>
        <Typography className={classes.cardSubject}>Subject: {element.subject}</Typography>
        <Typography  className={classes.cardDateSent}  >Date Sent: {new Date(element.dateSent).toLocaleDateString()}</Typography>
    </div>
    <br /><br />
        <Typography className={classes.cardResponse} color="textSecondary" >Survey Responses</Typography>
        <Typography className={classes.cardResponseStatus} >Satisfactory: {element.yes}  -  Not Satisfactory: {element.no}</Typography>
        <br />
        <Typography className={classes.cardRecentRespond} color="textSecondary" >{element.lastResponded ?  `Last Responded:  ${new Date(element.lastResponded).toLocaleDateString()}`  : "No Response" } </Typography>
        
      </CardContent>
      
    </Card>
       
            </Grid>
            </Grow>    
            ))
            .reverse()
            .value()
            }
   
        </Grid>
}
</Fragment>

          }   
    {open &&  <SurveyPreview data = {modalData} callback = {onClose}  /> } 

    


    </Fragment>
   <Fragment>
   {getUserData !== null ?
    <div className={classes.root}>
       <Link to={getUserData.credits !== 0 ? "/surveys/addnew" : ''}>
        <Fab aria-label="add" >
          <Add />
        </Fab>
        </Link>
        </div>
: null }
</Fragment>
        </Container>    
    )
}


export default SurveysList