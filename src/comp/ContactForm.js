import React from 'react'
import { TimelineLite } from 'gsap/TweenMax'
import emailjs from 'emailjs-com'

class ContactForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email:"",
            subject: "",
            message: "",
            sent: false
        }
        
        this.myTween = new TimelineLite()
        this.nameInput = null
        this.emailInput = null
        this.subjectInput = null
        this.message = null
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.myTween.from(this.nameInput, 0.75, {y:-300}, 0)
        this.myTween.from(this.emailInput, 0.75, {x:-300}, 0)
        this.myTween.from(this.subjectInput, 0.75, {x:300}, 0)
        this.myTween.from(this.message, 0.75, {y:300}, 0)
    }   

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({sending:true})
    
        const templateParams = {
            name: this.state.name,
            subject: this.state.subject,
            email: this.state.email,
            message: this.state.message
        };
         
        emailjs.send('gmail','template_PE0yq4MZ', templateParams, 'user_wX2G7BuTDkcHkqSyCMvuU')
            .then((response) => {
                
            this.setState({sending: false, sent: true})
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            });
        
    }
        
    
    render() {
        return (
            <form 
                className="gform contact-form"
                id="contact-form"                
            >
                <label htmlFor="name" className="row" ref={row => this.nameInput = row}>
                    <span className="label">*Name: </span> 
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        required
                    />
                </label>
                <label htmlFor="email" className="row"  ref={row => this.emailInput = row}>
                    <span className="label">*Email: </span> 
                    <input 
                        type="email"
                        id="email" 
                        name="email"
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required    
                    />
                </label>
                <label htmlFor="subject" className="row"  ref={row => this.subjectInput = row}>
                    <span className="label">Subject: </span> 
                    <input 
                        type="text"
                        id="subject"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="message" className="row" ref={row => this.message = row}>
                    <span className="label">*Message: </span> 
                    <textarea 
                        id="message"
                        value={this.state.message}
                        name="message"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                {this.state.sending && <p className="submitted">sending..</p>}
                {this.state.sent && <p className="submitted">Thank you for your message</p>}
                {!this.state.sent && !this.state.sending && <span className="submit" onClick={this.handleSubmit}>Send</span>}
                
            </form>

        )
        
    }
}

export default ContactForm