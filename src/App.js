import Header from "./components/Header/Header";
import {CssBaseline,Grid} from "@material-ui/core";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import React,{useEffect,useState} from "react";
import getPlaceData from './api/index'
function App() {
    const [places,setPlaces]=useState([]);
    const [coordinates,setCoordinates]=useState({lat:0,lng:0});
    const [bounds,setBounds]=useState({sw:0,ne:0});
    //Get the current location of the user
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoordinates({lat:latitude,lng:longitude});
        })
    },[]);
    useEffect(()=>{
        console.log(coordinates,bounds);
        getPlaceData(bounds.sw,bounds.ne)
            .then((data)=>{
                console.log(data);
                setPlaces(data);
            })
    },[coordinates,bounds]);
  return (
    <div className="App">
        <CssBaseline></CssBaseline>
        <Header></Header>
        <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <List places={places}></List>
            </Grid>
            <Grid item xs={12} md={8}>
                <Map
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                ></Map>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
