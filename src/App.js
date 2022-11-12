import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=6
  apiKey= process.env.REACT_APP_API_KEY
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} apiKey={this.apiKey}country="in" category="general" />}/>
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} apiKey={this.apiKey}country="in" category="business" />}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey}country="in" category="entertainment" />}/>
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="in" apiKey={this.apiKey}category="general" />}/>
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="in" apiKey={this.apiKey}category="health" />}/>
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="in" apiKey={this.apiKey}category="science" />}/>
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />}/>
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} apiKey={this.apiKey}country="in" category="technology" />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

