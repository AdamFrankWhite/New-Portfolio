import React from 'react'
import {TweenMax, TweenLite, Power1, TimelineLite} from 'gsap/TweenMax'

class EnlargedCard extends React.Component {
    constructor() {
        super()
        this.myElement = null
        this.myTween = new TimelineLite()
    }

    componentDidUpdate() {
        this.myTween.from(this.myElement,0.25,{ x: -400, ease: Power1.easeIn})
    }

    render() {
        return (
            <div ref={div => this.myElement = div}
                className="card-large"
                // onClick={() => this.props.clickProject(this.props.id)}
            >
                <h2 className="card-title-lg">{this.props.projectName}</h2>
                    <div className="flex">
                        <div className="left-col flex-down">
                            <img 
                                // className="left-col" 
                                src={`https://picsum.photos/id/1${this.props.id}/200`} alt={this.props.projectName} />
                            <span>View Code</span>
                            <span>View Project</span>
                        </div>
                        
                        
                        <div className="right-col">               
                            <h3>Tech used: React, Mongoose, MongoDB</h3>
                            <h3>Project Description: </h3>
                            <p className="text-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada. Lacus vestibulum sed arcu non odio euismod. In hac habitasse platea dictumst vestibulum. Interdum posuere lorem ipsum dolor sit amet. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Ut tristique et egestas quis ipsum. Nec feugiat nisl pretium fusce id velit ut. Et leo duis ut diam. Orci nulla pellentesque dignissim enim sit. Cursus sit amet dictum sit amet justo donec enim. Eu sem integer vitae justo eget magna fermentum iaculis. Leo integer malesuada nunc vel risus commodo viverra. Nisl vel pretium lectus quam. Vitae ultricies leo integer malesuada. Varius vel pharetra vel turpis nunc eget lorem dolor.
                            </p>
                        </div>
                    </div>
                
            </div>
        )
    }
    
}

export default EnlargedCard