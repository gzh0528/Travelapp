import React from "react";
import {Box, Typography, Button, Card, CardContent, CardActions, Chip, CardMedia} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import makeStyles from "./styles";
function PlaceDetails({place})
{
    const classes=makeStyles();
    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}
            />
            <CardContent >
                <Typography gutterBottom={true} variant={'h5'}>{place.name}</Typography>
                <CardActions>
                    <Button size={"small"} color={"primary"} onClick={()=>{
                        window.open(place.web_url,"_blank");
                    }}>
                        Trip Advisor
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}
export default PlaceDetails;