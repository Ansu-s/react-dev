
import { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NewsArticles from './components/NewsArticles';

export default class App extends Component{
  
  render(){
    return(
      <div> 
       <NavBar />
       <NewsArticles />
      </div>
    )
  }
}

