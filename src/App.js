import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
       <Route exact path="/" element={< News key = 'general' country='in' category='general'/>} />
       <Route exact path="/business"element={<News key = 'business'country='in' category='business'/>} />
       <Route exact path="/entertainment"element={<News key ='entertainment' country='in' category='entertainment'/>} />
       <Route exact path="/sports"element={<News key ='sports' country='in' category='sports'/>} />
       <Route exact path="/economics"element={<News key ='economics' country='in' category='economics' />}/>
       <Route exact path="/technology"element={<News key ='technology' country='in' category='technology'/>} />
       <Route exact path="/science"element={<News key ='science' country='in' category='science'/>} />
        </Routes>
       </Router>
        </div>
    )
    }
}
