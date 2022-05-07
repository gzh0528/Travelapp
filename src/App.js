import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import {CssBaseline,Grid} from "@material-ui/core";

function App() {
  return (
    <div className="App">
        <CssBaseline></CssBaseline>
        <Header></Header>
        <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <Header></Header>
            </Grid>
            <Grid item xs={12} md={8}>
                <Header></Header>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
