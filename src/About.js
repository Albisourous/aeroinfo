import React from 'react'
import albin from './Images/albin.jpg'
import './about.css'

console.log(albin);
export const About = () => (
    <div className="about">
        <div><br/></div>
        <div className="row">
            <div className="member">
                <div><br/></div>
                <h2>Albin Shrestha</h2>
                <div class="pic">
                    <img src={albin}/>
                </div>
                <p className="role">Frontend</p>
                <p>Albin Shrestha connects tech and project management companies with the information and resources they need in order to properly train their employees. At the University of Texas, Albin has learned how to appropriately communicate with peers and co-workers creating a productive workflow. His personal projects including his UT CS website and Unity games help distinguish him from his peers. Albin is currently pursuing a degree in Computer Science in hopes of working in business management or game design.</p>
                <p>shrestha_albin@yahoo.com</p>
                <p>
                    <button className="contact"><a href="tel:1-817-713-6090">Contact</a></button>
                </p>
            </div>
        </div>
    </div>
)
