import React, { Component } from 'react';
import { render } from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import Mail from './common/mail.jsx';
import Main from './common/main.jsx';

render(
    <Router history={browserHistory}>
        <Route component={Main} path='/'>
            <IndexRoute component={Mail}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
