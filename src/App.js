import React, {Component} from 'react';
import './App.css';
import Header from './comp/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './comp/About'
import Projects from './comp/Projects'
import Banner from './comp/Banner'
import Blog from './comp/Blog'
import Contact from './comp/Contact'

class App extends React.Component {
	constructor() {
		super()
	}
	

  	render() {
		return (
			
			<Router>
			<div className="App">
				
				<Header />
				<Route exact path="/" component={Banner} />
				<Route path="/about" component={About} />
				<Route path="/projects" component={Projects} />
				<Route path="/blog" component={Blog} />
				<Route path="/contact" component={Contact} />
			</div>
			</Router>
		);
	  }
}

export default App;
