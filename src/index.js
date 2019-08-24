import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import GoogleMapReact from 'google-maps-react';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import Detail from './component/detail';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/detail/:id" name="detail" component={Detail} />
        <Route render={ () => { return ( <div>Error</div>)}} />
    </Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
