import React, { Component }   from 'react';
import {BrowserRouter as Router,
    Switch, Route}            from 'react-router-dom';
import Navbar                 from '../../component/Navbar/Navbar';
import config                 from 'react-global-configuration';
import './App.compact.css'

class App extends Component {
    render() {
        const routes = config.get("routes");

        return (
            <Router>
                <div>
                    <div className="navbar-container">
                        <Navbar />
                    </div>
                    <div className="page-container">
                        <Switch>
                            {routes.map((route, i) => (
                                <Route
                                    key={i}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
