import React from 'react'
import {TweenMax, TweenLite, Power1, TimelineLite} from 'gsap/TweenMax'

class ProjectCard extends React.Component {
    constructor() {
        super()
        this.myElement = null
        this.myTween = new TimelineLite()
        this.state = {
            divGrow: false,
            divStyle: {}
        }
    }

    clickProject(project) {
        console.log(project + " clicked!")
        this.state.divGrow 
            ? this.setState({divGrow: false, divStyle: {flexBasis: "23%", height: "300px", order: 1, transition: "flex-basis 0.5s"}}) 
            : this.setState({divGrow: true, divStyle: {flexBasis: "100%", height: "100%", order: 10, transition: "flex-basis 0.5s"}})
        // this.myTween.from(this.myElement,0.5,{ transform: "scale(5)", opacity:0 , ease: Power1.easeIn })
	}

    render() {
        return (
            <div ref={div => this.myElement = div}
                className="card"
                onClick={() => this.clickProject(this.props.projectName)}
                style={this.state.divStyle}
            >
                <h2 className="card-title">{this.props.projectName}</h2>
                <img className={this.state.divGrow && "bigImg"} src={`https://picsum.photos/id/1${this.props.id}/200`} alt={this.props.projectName} />
                {this.state.divGrow && 
                    <div>               
                        <h3>Project Description: </h3>
                        <p className="text-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada. Lacus vestibulum sed arcu non odio euismod. In hac habitasse platea dictumst vestibulum. Interdum posuere lorem ipsum dolor sit amet. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Ut tristique et egestas quis ipsum. Nec feugiat nisl pretium fusce id velit ut. Et leo duis ut diam. Orci nulla pellentesque dignissim enim sit. Cursus sit amet dictum sit amet justo donec enim. Eu sem integer vitae justo eget magna fermentum iaculis. Leo integer malesuada nunc vel risus commodo viverra. Nisl vel pretium lectus quam. Vitae ultricies leo integer malesuada. Varius vel pharetra vel turpis nunc eget lorem dolor.
                        </p>
                        <h3>Tech used: React, Mongoose, MongoDB</h3>
                    </div>
                }
            </div>
        )
    }
    
}

export default ProjectCard