import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import RouteChanger from './RouteChanger.jsx';

import { Routes } from './constants';

var shortid = require('shortid');

class RouteFrame extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            routeChanging: this.props.routeChanging,
            drawerOpen: false,
            drawerOpening: false,
            links: [ ]
        };
        
        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }
    
    componentDidMount() {
        
        const links = Routes.map(route => {
            
            return (
                <MenuItem key={shortid.generate()}>
                    <RouteChanger 
                        path={route.path} 
                        text={route.name}
                        routeChanging={this.state.routeChanging}
                    />
                </MenuItem>
            );
        });
        
        this.setState({ links });
        
        document.body.addEventListener('click', this.closeDrawer);
    }
    
    componentWillUnmount() {
        
        document.body.removeEventListener('click', this.closeDrawer);
    }
    
    openDrawer(e) {
        
        this.setState((prevState, props) => {
            
            return {
                drawerOpen: true,
                drawerOpening: true
            };
        });
    }
    
    closeDrawer(e) {
        
        setTimeout(() => {
            
            if (!this.state.drawerOpening) {
                
                this.setState((prevState, props) => {
                    
                    return { drawerOpen: false };
                });
            }
            else {
                
                this.setState((prevState, props) => {
                    
                    return { drawerOpening: false };
                });
            }
        });
    }

    render() {
        
        var TitleBar = this.props.titleBar;
        
        return (
            <div>
                <TitleBar title={this.props.title} menuOpen={this.openDrawer} />
                <Drawer open={this.state.drawerOpen}>
                    {this.state.links}
                </Drawer>
            </div>
        );
    }
}

export default RouteFrame;
