import React from 'react'
import ProjectCard from './ProjectCard'
import {TweenMax, TweenLite, Power1, Elastic, TimelineLite} from 'gsap/TweenMax'
import EnlargedCard from './EnlargedCard'
import MediaQuery from 'react-responsive'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class Projects extends React.Component {

    constructor() {
        super()
        //reference to DOM node
        this.cardCont = null;
        this.cards = null
        // reference to the animation
        this.myTween = new TimelineLite();
        this.state = {
            enlargedCardProps: null,
            slides: {start: 0, end: 4}   
        }
        this.clickProject = this.clickProject.bind(this)
        this.slide = this.slide.bind(this)
        this.projects = [
            {
                id: 0, 
                projectName: "Kakuro", 
                tech: "React, CSS", 
                img:"img/kakuro.jpg", 
                description: ["Logic puzzle rendered using React. Populates empty nested array with user input. Continually evaluates this array to the correct answers. When it matches, the user has solved the puzzle and the game is completed. Has several games to play, randomised on click without repeating previous puzzle. Can also use the hint feature to complete one individual box.", "In development, there were two large bugs to overcome: firstly, how to compare two arrays to check if they match. The solution was to use JSON.stringify(). Secondly, when populating an empty array with user answers, when starting a new game, the array was not clearing before the next game. This took a long time to solve. It turned out using the spread operator to create a copy of the original empty array was only creating a shallow copy, meaning that the same array was continually being used. The solution to this involved using JSON.parse(JSON.stringify(array)). React's use of components made rendering the puzzle straightforward and easy to edit."]
            },
            {
                id: 1, 
                projectName: "NASA Image Search App", 
                tech: "React, CSS and NASA API", 
                img:"img/nasa-app.jpg",
                description: ["Using NASA API to access its image library, I wanted to create a visually-appealing smooth interface to search and save images. Using fetch() to grab the data, React was again useful in creating card components with differentiated image links. Using CSS's relative and absolute positions, along with transitions made for a pleasant user experience.", "The main developmental hurdles was checking to see if an image was already used, to avoid duplicates when randomly populating the images array."]
            },
            {id: 2, 
                projectName: "Favourite Beer App", 
                tech: "React, MongoDB, Express, Mongoose, Bootstrap", 
                img:"img/beer-app.jpg",
                description: ["My most ambitious project so far, this was my first foray into developing a full-stack web application. Using a whole slew of new technology, I became comfortable installing packages, which I needed a lot for this project: express, axios, bootstrap, bcrypt, and others. Using BrewDog's API, I grabbed its data for its beers - I wanted to create an app where you could register, login, and search for beers, before adding them to your favourites and rate them. I would learn a lot about conditional rendering, back end, middleware and more.", "On the back end, I created a server using Express, that interfaced with a cloud-based Mongo database. It was a lot to learn, but was a lot of fun. The application allows users to register and login, using bcrypt to encrypt passwords before storing them in the database. Using React's lifecycle methods allowed me to efficiently load and update data, and axios provided a straightforward way to carry out CRUD operations."]
            },
            {id: 3, 
                projectName: "Ebook Landing Page", 
                tech: "HTML, CSS, jQuery, Bootstrap", 
                img:"img/ebook.jpg",
                description: ["My sole commercial project thus far, I created a landing page using HTML, CSS, jQuery and Bootstrap.", "I used jQuery for some simple, neat animation."]
            },
            {
                id: 4, 
                projectName: "Castle Explorer", 
                tech: "JavaScript, jQuery, HTML, CSS", 
                img:"img/castle-finder.jpg",
                description: ["My most involved early project, the Castle Explorer app using vanilla JavaScript, HTML, CSS, along with GoogleMaps API and a postcode API to search for castles within the UK by name or location.", "Includes a type-ahead search feature, plus uses the Math library to sort castles by distance from the specified location, using the square root of the differences in longitude and latitude."]
            },
            {id: 5, 
                projectName: "Trump Quote Generator",
                tech: "HTML, CSS, JavaScript, jQuery", 
                img:"img/trump-quote-gen.jpg",
                description: ["One of my early projects, using XMLHttpRequest to access the data, using vanilla JavaScript, I created a colourful omage to the most absurd US President in history. Colors are randomised on click - this project helped me familiarise myself with event listeners, accessing data and CSS skills."]
            },
            {
                id: 6, 
                projectName: "React Calculator", 
                tech: "React, CSS", 
                img:"img/calculator.jpg",
                description: ["My first proper React project, I wanted to do the standard calculator app, using the popular JavaScript library.", "I got a much clearer handling on components, importing and exporting, and state - using setState to change state, as well as understanding the flow of data, and the threading through of event handlers from parent components to children."]
            }
    
        ]
    }

    clickProject(props) {
        this.setState({enlargedCardProps: props})
        
    }
    
    slide(direction) {
        if (direction === "left" && this.state.slides.start > 0) {
            this.setState(prevState => ({slides: {start: prevState.slides.start - 1, end: prevState.slides.end -1 }}))
            this.myTween.from(this.cards,1,{ x:500  });
        }
            
        if (direction === "right" && this.state.slides.end < this.projects.length) {
            this.setState(prevState => ({slides: {start: prevState.slides.start + 1, end: prevState.slides.end + 1 }}))
            this.myTween.from(this.cards,1,{ x:-500  });
        }
    }

    componentDidMount() {
        this.myTween.from(this.cardCont,0.5,{ x:-100 , opacity:0 , ease: Power1.easeIn } ,'+=0.5')
    }

    render() {
        let enlargedCardProps = this.state.enlargedCardProps
        let projects = this.projects.map(project => 
                <ProjectCard projectName={project.projectName} id={project.id} clickProject={this.clickProject} tech={project.tech} img={project.img} description={project.description}/>
            )
        let slideshow = projects.slice(this.state.slides.start, this.state.slides.end)

        
        return (
            <div ref={div => this.cardCont = div}>
                <h1>My Projects</h1>
                    {/* <div>
                        <span className="arrow" onClick={() => this.slide("left")}>&#60;</span>
                        <div className="card-container" ref={div => this.cards = div}>
                            
                            {slideshow}
                                
                        
                        </div>
                        <span className="arrow" onClick={() => this.slide("right")}>&#62;</span>
                    </div> */}
                    <div className="carousel">
                        <Carousel responsive={responsive} showDots={true} renderButtonGroupOutside={true} >
                            
                            {projects}
                            
                        </Carousel>
                        
                    </div>
                    
                {enlargedCardProps && 
                        <MediaQuery minWidth={1201}>
                            <EnlargedCard 
                                projectName={enlargedCardProps.projectName} 
                                id={enlargedCardProps.id} 
                                clickProject={this.state.clickProject}
                                tech={enlargedCardProps.tech}
                                img={enlargedCardProps.img}
                                description={enlargedCardProps.description}
                            />

                        </MediaQuery>
                        }
                
            </div>
        )
    }
}

export default Projects