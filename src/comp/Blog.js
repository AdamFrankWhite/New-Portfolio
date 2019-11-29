import React from 'react'
import { TimelineLite } from 'gsap/TweenMax'

class Blog extends React.Component {
    constructor() {
        super()
        this.element = null
        this.myTween = new TimelineLite()
    }

    componentDidMount() {
        this.myTween.from(this.element, 0.5, {y:200})
    }    

    render() {
        return (
            <h1 ref={ h1 => this.element = h1 }>My Blog</h1>
        )
    }
   
}

export default Blog