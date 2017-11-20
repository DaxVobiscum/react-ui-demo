import React from 'react';
import { withRouter } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

class ChangerBase extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        this.routeChange = this.routeChange.bind(this);
    }
    
    routeChange(e) {
        
        this.props.history.push(this.props.path);
        
        this.props.routeChanging(true);
        
        this.props.updateTitle(this.props.name);
    }
    
    render() {
        
        return (
            <FlatButton onClick={this.routeChange}>
                {this.props.name}
            </FlatButton>
        );
    }
}

const RouteChanger = withRouter(ChangerBase);

export default RouteChanger;