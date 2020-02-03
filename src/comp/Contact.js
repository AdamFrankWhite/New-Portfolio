import React from 'react'
import ContactForm from './ContactForm'
import { TimelineLite } from 'gsap/TweenMax'

class Contact extends React.Component {
    constructor() {
        super()
        this.element = null
        this.myTween = new TimelineLite()
    }

    componentDidMount() {
        this.myTween.from(this.element, 0.75, {x:-200})
    }    

    render() {
        return (
            <div className="container">
                <h1 ref={ h1 => this.element = h1 }>Contact</h1>
                <h4 className="sub-heading">Want to get in touch? You can reach me at adam.white06@gmail.com - alternatively, send a message using the form below</h4>
                <ContactForm />
            </div>
            
        )
    }
   
}

export default Contact