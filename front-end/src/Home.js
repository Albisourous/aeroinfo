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


            <div class="text text-center">
                <div className="square center">
                    <br />
                    <h1> Welcome! </h1>

                    <p>&#9992; Do you want to know more about airlines? </p>
                    <p>&#9992; Or do you want to look up flight information for your trip? </p>
                    <p>&#9992; We have all you want to know about airplanes, flights, and airports! </p>
                    <p>&#9992; Press the button below to begin. </p>
                </div>
            </div>

            <div className="scroll-button">
                <div className="scroll-bar">
                    <a href="#boxes">
                        <span> </span>
                    </a>
                </div>
            </div>
            <div className="container">
                <div className="row row-cols-3 align-items-center justify-content-center" id="boxes">
                    <Nav.Link className="link col-9 col-sm-3" href="/airlines">
                        <div className="roundedCorner">
                            <p>Airlines</p>
                        </div>
                    </Nav.Link>

                    <Nav.Link className="link col-9 col-sm-3" href="/flights">
                        <div className="roundedCorner">
                            <p>Flights</p>
                        </div>
                    </Nav.Link>
                    <Nav.Link className="link col-9 col-sm-3" href="/airports">
                        <div className="roundedCorner">
                            <p>Airports</p>
                        </div>
                    </Nav.Link>

                </div>
            </div>
            <div className="background"> </div>


        </div >
    );
};


