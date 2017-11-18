import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import routes from './constants';

var shortid = require("shortid");

class RouteController extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            activeRoute: null,
            drawerOpen: false,
            title: 'React UI Demo'
        };
        
        this.generateLinks = this.generateLinks.bind(this);
        this.generateRoutes = this.generateRoutes.bind(this);
        this.openDrawer = this.openDrawer.bind(this);
    }
    
    generateLinks() {
        
        return routes.map(route => {
            
            return (
                <MenuItem key={shortid.generate()}>
                    <Link to={route.path}>{route.name}</Link>
                </MenuItem>
            );
        });
    }
    
    generateRoutes() {
        
        return routes.map(route => <Route key={shortid.generate()} {...route.props} path={route.path} component={route.component} />);
    }
    
    openDrawer() {
        
        console.log('Drawer toggled.');
        
        this.setState((prevState, props) => {
            
            return { drawerOpen: !prevState.drawerOpen };
        });
    }
    
    render() {
        
        var TitleBar = this.props.components['TitleBar'];
        
        return (
            <BrowserRouter>
                <div>
                    <TitleBar title={this.state.title} />
                    <Drawer open={this.state.drawerOpen}>
                        {this.generateLinks()}
                    </Drawer>
                    <Switch>
                        {this.generateRoutes()}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default RouteController;