import React, {useState} from "react";
import {Autocomplete} from '@react-google-maps/api'
import {FormControl,MenuItem,Typography,InputLabel,Select} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import makeStyles from "./styles";
function List(){
    const classes = makeStyles();
    const [type,setType]=useState('restaurants');
    const [rating,setRating]=useState('');
    return (
       <div className={classes.container}>
           <Typography variant={"h6"}>
               Restaurants,Hotels and attractions
           </Typography>
           <FormControl className={classes.formControl}>
                <InputLabel> Type</InputLabel>
                <Select value={type} onChange={(e)=>setType(e.target.value)}>
                    <MenuItem value={"restaurants"}>restaurants</MenuItem>
                    <MenuItem value={"hotel"}>hotel</MenuItem>
                    <MenuItem value={"attractions"}>attractions</MenuItem>
                </Select>
           </FormControl>
           <FormControl className={classes.formControl}>
               <InputLabel> Rating</InputLabel>
               <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                   <MenuItem value={0}>All</MenuItem>
                   <MenuItem value={3}>Above 3</MenuItem>
                   <MenuItem value={4}>Above 4</MenuItem>
                   <MenuItem value={4.5}>Above 4.5</MenuItem>
               </Select>
           </FormControl>

       </div>

    );
}
export default List;