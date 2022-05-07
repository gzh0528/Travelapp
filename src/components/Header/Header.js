import React from "react";
import {Autocomplete} from '@react-google-maps/api'
import {AppBar,Toolbar,Typography,InputBase,Box} from "@material-ui/core";
function Header(){
    return (
        <AppBar position={"static"}>
            <Toolbar className={classes.toolbar}>
                <Typography variant={"h5"} className={classes.title}>
                    Travel Advisor
                </Typography>
                <Autocomplete>
                    <div className={classes.search}>

                    </div>
                </Autocomplete>
            </Toolbar>
        </AppBar>

    );
}
export default Header;