import React from 'react'
import Particles from 'react-particles-js'

function Banner() {
    const particleParams = {
        "particles": {
            "number": {
                "value": 50
            },
            "size": {
                "value": 3
            },
            "move": {
                    "speed": 2
                }
            
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                }
            }
        }
        
    }

    return (
        <div>
            <Particles
					params={particleParams} 
					className="background"
			/>
            <div className="banner">
                <div>
                    <h1>Adam White</h1>
                    <h2>Graduate React Developer</h2>
                </div>
            </div>
        </div>
        
    )
}

export default Banner