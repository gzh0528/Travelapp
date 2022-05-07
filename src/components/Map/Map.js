import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import makeStyles from "./styles";
function Map(){
    const classes = makeStyles();
    const isMobile=useMediaQuery('(mid-width:600px)');
    const coordinates={lat:59.3293, lng:18.0686};//stockholm
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyAIDJ-_uO2AX8lKdUVFSok8HFHfCVt8wfw'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={''}
                onChildClick={''}
            />

        </div>
    );
}
export default Map;