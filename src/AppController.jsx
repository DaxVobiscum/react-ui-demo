import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { RouteController } from './routes';

import { Components } from './constants';

function AppController() {
    
    return (
        <MuiThemeProvider>
            <RouteController 
                components={Components}
            />
        </MuiThemeProvider>
    );
}

export default AppController;