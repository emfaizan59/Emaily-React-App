import React, { Fragment } from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import Payments from '../Payments/Payments'
import { Container, Icon, Button,  makeStyles, Avatar,  useTheme , CircularProgress,
    AppBar , Toolbar, Typography ,
    IconButton,MenuItem,  Drawer , 
    List ,Divider,  ListItem, ListItemIcon, Menu , ListItemText } from '@material-ui/core';
  
import clsx from 'clsx';
import {MonetizationOnOutlined, MenuOutlined  , AccountCircle ,
    ChevronLeft, ChevronRight , Inbox ,Mail }  from '@material-ui/icons';

    const drawerWidth = 240;
    const useStyles = makeStyles((theme) => ({
        appRoot : {
          flexGrow : 1 
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
        leftSection : {
          display : 'flex'
        },
    
        appBar: {
        
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
        appBarShift: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
    
        menuButton: {
          marginRight: theme.spacing(2),
        },
        hide: {
          display: 'none',
        },
        drawer: {
          width: drawerWidth,
          flexShrink: 0,
        },
        drawerPaper: {
          width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(2, 2),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
          },
          Links : {
              color : 'white' , 
              textDecorationLine : 'none'
          }
    }))
    
    
const Header = () => {
    const loggedIn = useSelector(state => state.auth)
    console.log(loggedIn)    
    const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDropDown = Boolean(anchorEl);
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);    


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const addCredit = () => {


    setAnchorEl(null);


  }



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    
  const setHeaderAuth = () => {
    switch(loggedIn){
      case null :
          return <CircularProgress />
      case false:
        return (
  <a className={classes.Links} href="/auth/google">  <Button style={{color : 'white' , border : '1px solid white' , marginRight : '10px'}}  variant="outlined"  startIcon={<AccountCircle />} >
          Sign in with Google
         </Button>
         </a>   
        )
      default :
        return (
         
       <div>

         <Payments />
          {/* <Button style={{color : 'white' , cursor : 'default' , border : '1px solid white' , marginRight : '10px'}} variant="outlined"  startIcon={<MonetizationOnOutlined />} >
           Credits: {loggedIn.credits}
          </Button>            */}
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
            <Avatar alt={loggedIn.userDisplayName} src={loggedIn.userPicture} />
              {/* <AccountCircle /> */}
            </IconButton>
           <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openDropDown}
              onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>{loggedIn.userDisplayName}</MenuItem>
            <MenuItem onClick={handleClose}>My Credit: {loggedIn.credits}</MenuItem>

       
              <a className={classes.Links} href="/api/logout">  <MenuItem onClick={handleClose}>Logout</MenuItem> </a>
            </Menu>
          </div>
        )
    }
  }
    return(
<div >
<div className={classes.appRoot}>
<AppBar position="fixed" style={{backgroundColor : 'default'}}
>

        <Toolbar>
          <IconButton 
           color="inherit"
           aria-label="open drawer"
           onClick={handleDrawerOpen}
           edge="start"
           className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuOutlined />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           Emaily
          </Typography>
          <div className={classes.leftSection}>

        { setHeaderAuth() }
</div>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
    
          
        <Link to="/" className={classes.Links} onClick={() => {  setOpen(false);}}>   
        <ListItem button >
              <ListItemIcon> <Inbox /> </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            </Link>
       
        {loggedIn !== null && loggedIn !== false ? 
        
        <Fragment>
  <Link to="/surveys" className={classes.Links} onClick={() => {  setOpen(false);}}>   
        <ListItem button >
              <ListItemIcon> <Inbox /> </ListItemIcon>
              <ListItemText primary="Survey" />
            </ListItem>
            </Link>
       

       {loggedIn.credits > 0 ?
            <Link to="/surveys/addnew" className={classes.Links} onClick={() => {  setOpen(false);}}>   
        <ListItem button >
              <ListItemIcon> <Inbox /> </ListItemIcon>
              <ListItemText primary="Add New Survey" />
            </ListItem>
            </Link>
       : null }
        </Fragment>
        : 
        
        null
        }

          

        </List>
      
      </Drawer>
</div>


        <div className={classes.drawerHeader} />
      
</div>
    )
}

export default Header