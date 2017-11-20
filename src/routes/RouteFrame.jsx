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
            drawerOpen: false,
            drawerOpening: false,
            links: [ ],
            title: null
        };
        
        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }
    
    componentDidMount() {
        
        const links = Routes.map(route => {
            
            return (
                <MenuItem key={shortid.generate()}>
                    <RouteChanger 
                        path={route.path} 
                        name={route.name}
                        routeChanging={this.props.routeChanging}
                        updateTitle={this.updateTitle}
                    />
                </MenuItem>
            );
        });
        
        this.setState({ links });
        
        this.props.onRouteChange((routeName) => {
            
            this.updateTitle(routeName);
        });
        
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
    
    updateTitle(newTitle) {
        
        this.setState({ title: newTitle });
    }

    render() {
        
        var TitleBar = this.props.titleBar;
        
        return (
            <div>
                <TitleBar title={this.state.title} menuOpen={this.openDrawer} />
                <Drawer open={this.state.drawerOpen}>
                    {this.state.links}
                </Drawer>
            </div>
        );
    }
}

export default RouteFrame;
