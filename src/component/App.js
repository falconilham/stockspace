import React, {Component} from 'react';
import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {BrowserRouter as outer, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Detail from './detail';

const mapStyles = {
  width: "48%",
  height: '48%'
};



class App extends Component {
  constructor(){
    super();
    this.state = {
      KEY : "AIzaSyC-T96AGprc9PBO0c1SrKirqcvoHs_NyDc",
      data: []
    }
  }
  
  render(){
    return (
      <div className="container-fluid">
        <div className="body">
          <div className="header">
            <form className="search">
              <input className="form-control" type="text" placeholder="search" />
            </form>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="left">
              <Link to={`detail/${"mantap"}`} params={{id : "mantap"}} component={Detail}>
                <div className="card">
                  <div className="card-header">
                    <img src="https://picsum.photos/id/1/5616/3744" />
                  </div>
                  <div className="card-body">
                    <h3>Judul</h3>
                    <text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only </text>
                  </div>
                  <div className="card-footer btn-card">
                    <text>Jakarta</text>
                    <button type="button" className="btn btn-info" id="button">Detail</button>
                  </div>
                </div>
              </Link>
              <Link to={`detail/${"ok"}`} params={{id : "ok"}} component={Detail}>
                <div className="card">
                  <div className="card-header">
                    <img src="https://picsum.photos/id/1/5616/3744" class="img-fluid"/>
                  </div>
                  <div className="card-body">
                    <h3>Judul</h3>
                    <text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only </text>
                  </div>
                  <div className="card-footer btn-card">
                    <text>Jakarta</text>
                    <button type="button" className="btn btn-info" id="button">Detail</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="right">
              <div className="map">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: "AIzaSyC-T96AGprc9PBO0c1SrKirqcvoHs_NyDc"
  })
)(App);
