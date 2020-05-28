import React from 'react' 
import {TextField} from '@material-ui/core';


const SurveyField = (props) => {
    // console.log(props.input)

   

    return(
        // <div>
        //     {/* <label>{props.label}</label>
        //     <input {...props.input}  /> */}

        // </div>

<TextField 
     id="outlined-size-small"
     size="small"
     defaultValue="Small"
    variant="outlined"

        label={props.label}
        {...props.input}
/>
)
}

export default SurveyField