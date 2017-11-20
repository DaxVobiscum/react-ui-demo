import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouteFrame from './RouteFrame.jsx';
import RouteView from './RouteView.jsx';

var routeChangeCallbacks = [ ];

class RouteController extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        this.routeUpdate = this.routeUpdate.bind(this);
        this.onRouteChange = this.onRouteChange.bind(this);
    }
    
    routeUpdate(changeInProgress, routeName) {
        
        if (changeInProgress) {
            
            console.log('Route changing...');
        }
        else {
            
            console.log('Route change complete.');
            
            for (let callback of routeChangeCallbacks) {
                
                callback(routeName);
            }
        }
    }
    
    onRouteChange(callback) {
        
        routeChangeCallbacks.push(callback);
    }
    
    render() {
        
        var TitleBar = this.props.components['TitleBar'];
        
        return (
            <BrowserRouter>
                <div>
                    <RouteFrame
                        titleBar={TitleBar}
                        routeChanging={this.routeUpdate}
                        onRouteChange={this.onRouteChange}
                    />
                    <RouteView
                        routeChanging={this.routeUpdate}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default RouteController;