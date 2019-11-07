import React from 'react'
import {TweenMax, TweenLite, Power1, TimelineLite} from 'gsap/TweenMax'

class ProjectCard extends React.Component {
    constructor() {
        super()
        this.myElement = null
        this.myTween = new TimelineLite()
    }

    componentDidUpdate() {
        this.props.styleControl[this.props.id]["enlarged"] && 
            // TweenMax.from(this.myElement, 2, {clip:"rect(0px 100px 100px 100px)"})
            this.myTween.from(this.myElement,0.25,{ x: -400, ease: Power1.easeIn})
    }

    render() {
        let isEnlarged = this.props.styleControl[this.props.id]["enlarged"]
        return (
            <div ref={div => this.myElement = div}
                className={isEnlarged ? "card-large" : "card"}
                onClick={() => this.props.clickProject(this.props.id)}
            >
                <h2 className={isEnlarged ? "card-title-lg" : "card-title"}>{this.props.projectName}</h2>
                    <div className={isEnlarged && "flex"}>
                        <img 
                            className={isEnlarged && "left-col"} 
                            src={`https://picsum.photos/id/1${this.props.id}/200`} alt={this.props.projectName} />
                        {isEnlarged && 
                        <div className="right-col">               
                            <h3>Tech used: React, Mongoose, MongoDB</h3>
                            <h3>Project Description: </h3>
                            <p className="text-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada. Lacus vestibulum sed arcu non odio euismod. In hac habitasse platea dictumst vestibulum. Interdum posuere lorem ipsum dolor sit amet. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Ut tristique et egestas quis ipsum. Nec feugiat nisl pretium fusce id velit ut. Et leo duis ut diam. Orci nulla pellentesque dignissim enim sit. Cursus sit amet dictum sit amet justo donec enim. Eu sem integer vitae justo eget magna fermentum iaculis. Leo integer malesuada nunc vel risus commodo viverra. Nisl vel pretium lectus quam. Vitae ultricies leo integer malesuada. Varius vel pharetra vel turpis nunc eget lorem dolor.
                            </p>
                        </div>
                        }
                    </div>
                
            </div>
        )
    }
    
}

export default ProjectCard