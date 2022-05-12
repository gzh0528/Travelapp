import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {CardMedia, Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import makeStyles from "./styles";
function Map({setCoordinates,setBounds,coordinates,places}){
    const classes = makeStyles();
    const isMobile=useMediaQuery('(mid-width:600px)');
    //const coordinates={lat:59.3293, lng:18.0686};//stockholm
    const [childClicked,setChildClicked] =useState({});
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyAIDJ-_uO2AX8lKdUVFSok8HFHfCVt8wfw'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e)=>{
                    console.log(e);
                    setCoordinates({lat:e.center.lat,lng:e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={(child)=>{

                }}
            >
                {places?.map((place,i)=>{
                    return (
                      <div
                          className={classes.markerContainer}
                          lat={Number(place.latitude)}
                          lng={Number(place.longitude)}
                          key={i}
                      >
                          <Paper elevation={3} className={classes.paper}>
                              <Typography  variant={"subtitle2"} className={classes.title}>
                                  {place.name}
                              </Typography>
                              <img
                                  className={classes.pointer}
                                  src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                  alt={place.name}
                              ></img>
                              <Rating size={"small"} value={Number(place.rating)}></Rating>
                          </Paper>
                      </div>
                    );
                })}
                </GoogleMapReact>
        </div>
    );
}
export default Map;