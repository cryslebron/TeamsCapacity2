import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Teams from './components/Teams';
import FooterPage from './components/Footer';
import { Switch, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path={["/", "/Home"]} component={Home} />
                          
                    <Route path="/Teams" component={Teams} />
               
                </Switch>
                <FooterPage />
            
            </div>
        );
    }
}

export default App;
