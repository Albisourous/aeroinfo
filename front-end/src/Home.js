import React from "react";
import ReactPlayer from "react-player";
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

            <div className="text text-center">
                <div class="square center">
                    <br />
                    <h1 > Welcome! </h1>

                    <p> Feel like to know more about the aircraft ? </p>
                    <p> Or you want to look for a flight for your trip ? </p>
                    <p>We have got all you want to know about airplanes,  flights,  and airports!</p>
                </div>
            </div>

            <div className="bg-below-video">


            </div>


        </div >
    );
};


