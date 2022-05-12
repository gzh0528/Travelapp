import React, {useState} from "react";
import {Autocomplete} from '@react-google-maps/api'
import {FormControl, MenuItem, Typography, InputLabel, Select, Grid} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import makeStyles from "./styles";
import Map from "../Map/Map";
import PlaceDetails from "../CardDetails/PlaceDetails";
function List({places,setTypeF,setRatingF}){
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
                <Select value={type} onChange={(e)=>{setTypeF(e.target.value);setType(e.target.value);}}>
                    <MenuItem value={"restaurants"}>restaurants</MenuItem>
                    <MenuItem value={"hotels"}>hotels</MenuItem>
                    <MenuItem value={"attractions"}>attractions</MenuItem>
                </Select>
           </FormControl>
           <FormControl className={classes.formControl}>
               <InputLabel> Rating</InputLabel>
               <Select value={rating} onChange={(e)=>{console.log(e.target.value);setRatingF(Number(e.target.value));setRating(e.target.value);}}>
                   <MenuItem value={0}>All</MenuItem>
                   <MenuItem value={3}>Above 3</MenuItem>
                   <MenuItem value={4}>Above 4</MenuItem>
                   <MenuItem value={4.5}>Above 4.5</MenuItem>
               </Select>
           </FormControl>
           <Grid container spacing={3} className={classes.list}>
               {
                   places?.map((place,i)=>{
                       return (<Grid item key={i} xs={12}>
                           <PlaceDetails place={place}></PlaceDetails>
                       </Grid>);
                   })
               }
           </Grid>
       </div>

    );
}
export default List;