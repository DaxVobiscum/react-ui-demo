import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import routes from './constants';

var shortid = require("shortid");

class RouteController extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        this.generateLinks = this.generateLinks.bind(this);
        this.generateRoutes = this.generateRoutes.bind(this);
    }
    
    generateLinks() {
        
        return routes.map(route => {
            
            return (
                <li key={shortid.generate()}>
                    <Link to={route.path}>{route.name}</Link>
                </li>
            );
        });
    }
    
    generateRoutes() {
        
        return routes.map(route => <Route key={shortid.generate()} {...route.props} path={route.path} component={route.component} />);
    }
    
    render() {
        
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        {this.generateLinks()}
                    </ul>
                    <Switch>
                        {this.generateRoutes()}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default RouteController;