import logo from './logo.svg';
import Header from "./components/Header/Header";
import {CssBaseline,Grid} from "@material-ui/core";
import Map from "./components/Map/Map";
import List from "./components/List/List";
function App() {
  return (
    <div className="App">
        <CssBaseline></CssBaseline>
        <Header></Header>
        <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <List></List>
            </Grid>
            <Grid item xs={12} md={8}>
                <Map></Map>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
