import React from 'react';
import './App.css';
import Header from './comp/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './comp/About'
import Projects from './comp/Projects'
import Banner from './comp/Banner'
import Blog from './comp/Blog'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
				<ReactCSSTransitionGroup
					transitionName="about"
					transitionAppear={true}
					transitionAppearTimeout={1000}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>

					<Route path="/about" component={About} />
					
				</ReactCSSTransitionGroup>
				
				<Route path="/projects" component={Projects} />
				<Route path="/blog" component={Blog} />
			</div>
			</Router>
		);
	  }
}

export default App;
