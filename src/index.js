import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import Detail from './component/detail';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';

//test redux
/*
function reducers (state, action) {
    if(action.type === 'Change'){
        return action.payload.newState;
    }
    return 'state';
}
const store = createStore(reducers);
console.log(store.getState())
const action = {
    type: 'Change',
    payload: {
        newState: "ok"
    }
};
store.dispatch(action)
console.log(store.getState())
*/
ReactDOM.render(
<Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/detail/:id" name="detail" component={Detail} />
        <Route render={ () => { return ( <div>Error</div>)}} />
    </Switch>
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
