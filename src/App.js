import './App.css';
import React,{ Component } from 'react'

import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
          color='#f11946'
          height={4}
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="general" pageSize={9} country="in" category='general'/>}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="business" pageSize={9} country="in" category='business'/>}></Route>
          <Route exact path="/health"element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="health" pageSize={9} country="in" category='health'/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="science" pageSize={9} country="in" category='science'/>}></Route>
          <Route exact path="/sports"element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="sports" pageSize={9} country="in" category='sports'/>}></Route>
          <Route exact path="/technology"element={<News setProgress={this.setProgress}   apiKey={this.apiKey} key="technology"pageSize={9} country="in" category='technology'/>}></Route>
          <Route exact path="/entertainment"element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="entertainment" pageSize={9} country="in" category='entertainment'/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

