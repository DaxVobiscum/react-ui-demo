import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import RouteContainer from './RouteContainer.jsx';

import { Routes } from './constants';

var shortid = require('shortid');

class RouteView extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            routes: [ ]
        };
    }
    
    componentDidMount() {
        
        const routes = Routes.map(route => {
            
            return (
                <Route
                    key={shortid.generate()} 
                    {...route.config} 
                    path={route.path} 
                    render={
                        ({history, location, match}) => { 
                        
                            var WrappedRoute = withRouter(RouteContainer);
                            
                            return (
                                <WrappedRoute
                                    name={route.name}
                                    component={route.component} 
                                    routeChanging={this.props.routeChanging}
                                />
                            );
                        }
                    }
                />
            );
        });
        
        this.setState({
            routes
        });   
    }
    
    render() {
        
        return (
            <Switch>
                {this.state.routes}
            </Switch>
        );
    }
}

export default RouteView;
