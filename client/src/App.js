import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Reports from './components/Reports';
import Teams from './components/Teams';
import FooterPage from './components/Footer';
import LogIn from './components/LogIn';
import { Switch, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path={["/", "/LogIn"]} component={LogIn} />
                    <Route path="/Home" component={Home} />
                    <Route path="/Reports" component={Reports} />
                    <Route path="/Teams" component={Teams} />
                    <Route path="/LogIn" component={LogIn} />
                </Switch>
                <FooterPage />
            
            </div>
        );
    }
}

export default App;
