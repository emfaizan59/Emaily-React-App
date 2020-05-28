import React, { useState, useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {BrowserRouter , Route } from 'react-router-dom'
import Header from './Header/Header'
import LandingPage from './LandingPage/LandingPage'
import Surveys from './Surveys/Surveys'
import NewSurvey from './NewSurvey/NewSurvey'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {fetchUser} from '../Actions';
const App = () => {
    const userFetchData = useDispatch()
    const darkTheme = createMuiTheme({
        overrides: { MuiAppBar: { colorPrimary: { backgroundColor: "default"  } } },
        palette: {
          type: 'dark',
        },
      });


      useEffect(() => {
        console.log("Use Effect")
        userFetchData(fetchUser())
      });


    return(
 <ThemeProvider theme={darkTheme}>
    <div>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={LandingPage} /> 
                <Route exact path="/surveys" component={Surveys} />
                <Route exact path="/surveys/addnew" component={NewSurvey} />
            </div>
            </BrowserRouter>
        </div>
        </ThemeProvider>
    )
}

export default App