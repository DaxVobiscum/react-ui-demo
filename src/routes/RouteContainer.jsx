import React from 'react';
import { withRouter } from 'react-router-dom';

class RouteContainer extends React.Component {
    
    constructor(props) {
        
        super(props);
    }
    
    componentDidMount() {
        
        console.log('Navigated to ' + this.props.name);
        
        this.props.routeChanging(false, this.props.name);
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