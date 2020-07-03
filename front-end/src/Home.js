import React from "react";
import { Nav } from "react-bootstrap";
import "./App.css";
import Video from "./Images/Video1.mp4"

export const Home = () => {
    return (

        <div className="Home">

            <div className="video">
                <video id="background-video" loop autoPlay muted>
                    <source src={Video} type="video/mp4" />
                    <source src={Video} type="video/ogg" />
			    Your browser does not support the video tag.
			</video>
            </div>


            <div class="square">

                <div className="text text-center">
                    <br />
                    <h1 > Welcome! </h1>

                    <p> Feel like to know more about the aircraft ? </p>
                    <p> Or you want to look for a flight for your trip ? </p>
                    <p>We have got all you want to know about airplanes,  flights,  and airports!</p>
                </div>
            </div>

            <div className="scroll-button">
                <div className="scroll-bar">
                    <a href="#boxes">
                        <span> </span>
                    </a>
                </div>
            </div>

            <div className="row" id="boxes">
                <Nav.Link className="link" href="/airplanes">
                    <div className="roundedCorner">
                        <p>Airplanes</p>
                    </div>
                </Nav.Link>

                <Nav.Link className="link" href="/flights">
                    <div className="roundedCorner">
                        <p>Flights</p>
                    </div>
                </Nav.Link>
                <Nav.Link className="link" href="/airports">
                    <div className="roundedCorner">
                        <p>Airports</p>
                    </div>
                </Nav.Link>

            </div>
            <div className="background"> </div>


        </div >
    );
};


