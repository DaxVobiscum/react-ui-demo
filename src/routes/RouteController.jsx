import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouteFrame from './RouteFrame.jsx';
import RouteView from './RouteView.jsx';

var _ = require("underscore");

class RouteController extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            activeRoute: null,
            routeChanging: false,
            title: 'React UI Demo'
        };
    }
    
    render() {
        
        var TitleBar = this.props.components['TitleBar'];
        
        return (
            <BrowserRouter>
                <div>
                    <RouteFrame
                        titleBar={TitleBar}
                        title={this.state.title}
                        routeChanging={this.state.routeChanging}
                    />
                    <RouteView
                        routeChanging={this.state.routeChanging}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default RouteController;