import React, {Component} from 'react';
import './App.css';
import Header from './comp/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './comp/About'
import Projects from './comp/Projects'
import Banner from './comp/Banner'
import Blog from './comp/Blog'
import Contact from './comp/Contact'
import Particles from 'react-particles-js'

class App extends React.Component {
	constructor() {
		super()
		this.particleParams = {
			"particles": {
				"number": {
					"value": 50
				},
				"size": {
					"value": 3
				},
				"move": {
						"speed": 6
					}
				
			},
			"interactivity": {
				"events": {
					"onhover": {
						"enable": true,
						"mode": "grab"
					}
				}
			}
			
		}
	
	}
	

  	render() {
		return (
			
			<Router>
			<div className="App">
				<Particles
					params={this.particleParams} 
					className="background"
				/>
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
