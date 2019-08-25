import React, {Component} from 'react';
import firebase from 'firebase';
import './App.css';
import { db } from "./firebase";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Icon from './placeholder-black-shape-for-localization-on-maps.png';
import {BrowserRouter as outer, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Detail from './detail';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      KEY : "AIzaSyC-T96AGprc9PBO0c1SrKirqcvoHs_NyDc",
      data: []
    }
  }
  
  componentWillMount(){
    db.collection("place")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({
          data: data
        })
      });
  }

  nextPage(){
    
  }

  render(){
    console.log(this.state.data)
    return (
      <div className="container-fluid">
        <div className="body">
          <div className="header">
            <form className="search">
              <input className="form-control" type="text" placeholder="search" />
            </form>
          </div>
          <div className="main">
            <div className="left">
              {this.state.data.map((item, i) => {
                return (
                  <div className="card" key={i}>
                    <div className="card-header">
                      <img src={item.image} />
                    </div>
                    <div className="card-body">
                      <h4>{item.hotel}</h4>
                      <div>{item.lokasi}</div>
                    </div>
                    <div className="card-footer btn-card">
                      <div className="text-detail">
                        <img className="Map" src={Icon} />
                        <div className="kota">{item.kota}</div>
                      </div>
                      <Link to={`detail/${item.hotel}`} params={{id : item}} component={Detail}>
                        <button type="button" className="btn btn-info" id="button">Detail</button>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="right">
              <Map className="map"
                google={this.props.google}
                zoom={8}
                initialCenter={{ lat: 47.444, lng: -122.176}}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAhAgN8Rl2x78tcY4cyGUSUzbrmvS10bPU'
})(App);
