import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {white} from 'material-ui/styles/colors';

class Icon extends React.Component {
    
    constructor(props) {
        
        super(props);
    }
    
    render() {
        
        return <FontIcon className="material-icons" color={white}>face</FontIcon>
    }   
}

export default Icon;