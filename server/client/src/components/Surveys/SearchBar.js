import React,{useState} from 'react'
import {TextField} from '@material-ui/core'
const SearchBar= (props) => {

    let timeout = null;
const onSearchChange = (event) => {
    // console.log(event.target.value)

    const a = event.target.value
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        props.callback(a)
    }, 500);

}
    return(
    <TextField 
    fullWidth
    id="outlined-search" 
    label="Search Surveys" 
    type="search" 
    onChange = {onSearchChange}
    variant="outlined" />
    )
}

export default SearchBar