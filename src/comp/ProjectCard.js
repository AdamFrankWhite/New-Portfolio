import React from 'react'
import {TweenMax, TweenLite, Power1, TimelineLite} from 'gsap/TweenMax'

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
                <img src={`https://picsum.photos/id/1${this.props.id}/200`} alt={this.props.projectName} />      
            </div>
                
        )
    }
    
}

export default ProjectCard