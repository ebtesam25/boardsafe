import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



//import components
import Home from './components/traveller/home';
import Book from './components/traveller/book';
import Boarding from './components/admin/boarding';

ReactDOM.render(
  <Router>
  <div className="App">
    <Route exact path="/" component={App} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/book" component={Book} />
    <Route exact path="/boarding" component={Boarding} />
    
  </div>
</Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
