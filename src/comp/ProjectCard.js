import React from 'react'
import {TimelineLite} from 'gsap/TweenMax'
import MediaQuery from 'react-responsive'

class ProjectCard extends React.Component {
    constructor() {
        super()
        this.myElement = null
        this.myTween = new TimelineLite()
    }

    render() {

        return (
            <div ref={div => this.myElement = div}
                className="card"
                onClick={() => this.props.clickProject(this.props)}
            >
                <h2 className="card-title">{this.props.projectName}</h2>
                <img src={this.props.img} className="thumb" alt={this.props.projectName} /> 
                <MediaQuery maxWidth={1200} >
                    <p className="text-body">
                        {this.props.description}
                    </p> 
                    <div className="flex-center project-links">    
                        <a href={`https://github.com/AdamFrankWhite/${this.props.gitURI}`} className="imgLinks" target="blank">View Code</a>
                        <a href={`${this.props.projectURL}`} className="imgLinks" target="blank">View Project</a>
                    </div>
                </MediaQuery>  
                       
                
            </div>
                
        )
    }
    
}

export default ProjectCard