import React from 'react';
import { withRouter } from 'react-router-dom';

class RouteContainer extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            routeChanging: this.props.routeChanging
        };
    }
    
    componentDidMount() {
        
        // console.log('Navigated to ' + this.props.route.location.pathname);
        
        console.log('Navigated to ' + this.props.location.pathname);
        
        /*this.props.onRouteReady.call();*/
        
        this.setState({ routeChanging: true });
    }
    
    render() {
        
        var Component = withRouter(this.props.component);
        
        return (
            <div className="route-container">
                <Component />
            </div>
        );
    }
}

export default RouteContainer;