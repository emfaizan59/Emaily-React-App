import {FETCH_SURVEYS} from '../Actions/types'

const surveyReducer = (state = null , action) => {
    switch(action.type) {
        case FETCH_SURVEYS :
            return action.payload || false
        default : 
            return state
    }
}


export default surveyReducer