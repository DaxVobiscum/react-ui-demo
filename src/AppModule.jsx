import React from 'react';
import {render} from 'react-dom';

import AppController from "./AppController.jsx";

render(
    <AppController />,
    document.getElementById('react')
);

export default class AppModule { };