import React from 'react'
import {Power1, TimelineLite} from 'gsap/TweenMax'

class EnlargedCard extends React.Component {
    constructor() {
        super()
        this.myElement = null
        this.myTween = new TimelineLite()
    }

    componentDidUpdate() {
        this.myTween.from(this.myElement,0.25,{ x: -400, ease: Power1.easeIn})
    }

    componentDidMount() {
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
                                src={this.props.img} className="imgBig" alt={this.props.projectName} />
                            <div className="flex-center">    
                                <a href="www.github.com/AdamFrankWhite" className="imgLinks" target="blank">View Code</a>
                                <a href="www.github.com/AdamFrankWhite" className="imgLinks" target="blank">View Project</a>
                            </div>
                        </div>
                        
                        
                        <div className="right-col">               
                            <h3>Tech used: {this.props.tech}</h3>
                            <h3>Project Description: </h3>
                            <p className="text-body">
                                {this.props.description.map(paragraph => <p className="desc-p">{paragraph}</p>)}
                            </p>
                        </div>
                    </div>
                
            </div>
        )
    }
    
}

export default EnlargedCard