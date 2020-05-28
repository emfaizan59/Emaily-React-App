import {FETCH_USER} from './types'
import {FETCH_SURVEYS} from './types'
import axios from 'axios'


export const fetchUser = () => async  (dispatch) =>{
   const res = await axios.get('/api/current_user')
    
   dispatch({type : FETCH_USER , payload : res.data})
}

export const userSurveys = () => async (dispatch) => {
   const surveys = await axios.get('/api/surveys')
   
   dispatch({type : FETCH_SURVEYS , payload : surveys.data})
}

export const handleToken = (token) => async (dispatch) => {
   const res = await axios.post("/api/stripe" , token)

   dispatch({type : FETCH_USER , payload : res.data})

} 


export const surveyForm = (values, history) => async (dispatch) => {
   const res = await axios.post('/api/surveysMail' , values)
   // console.log("Action Data: ",res.data)

   history.push('/surveys')
   dispatch({type : FETCH_USER , payload : res.data})
}



