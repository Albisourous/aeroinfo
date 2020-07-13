import React, {useState, useEffect, Component} from 'react';
import port from './Data/airplanes.json';
import {Card} from "react-bootstrap";
import './setup.css';
import axios from 'axios';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import InfiniteScroll from "react-infinite-scroll-component";

const num = window.location.pathname.substring(10).replace(/%20/gi, " ");

function refreshPage() {
    window.location.reload(false);
}

const AirlineInfo = () => {
    const [info, setInfo] = useState([]);
    const pic = 'https://source.unsplash.com/1600x900/?' + info.airline_name + " airline";
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading({isLoading: true});
        timeout();
        setTimeout(function () {
            setLoading(false);
        }, Math.floor(Math.random() * 500) + 500)
        fetch('https://api-dot-naviaero.uc.r.appspot.com/api/airlines/' + num)
            .then(response => response.json())
            .then(data => setInfo(data))

    }, []);

    function timeout() {
        if (isLoading) {
            return (
                <div className="loader hidden">
                    <svg className="svg-calLoader" xmlns="http://www.w3.org/2000/svg" width="230" height="230">
                        <path className="cal-loader__path"
                              d="M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z"
                              fill="none" stroke="#0099cc" stroke-width="4" stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-dasharray="10 10 10 10 10 10 10 432" stroke-dashoffset="77"/>
                        <path className="cal-loader__plane"
                              d="M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z"
                              className="cal-loader__plane" fill="#000033"/>
                    </svg>
                </div>

            )
        }
    }

    if (isLoading) {
        return (
            <div className="loader hidden">
                <svg className="svg-calLoader" xmlns="http://www.w3.org/2000/svg" width="230" height="230">
                    <path className="cal-loader__path"
                          d="M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z"
                          fill="none" stroke="#0099cc" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                          stroke-dasharray="10 10 10 10 10 10 10 432" stroke-dashoffset="77"/>
                    <path className="cal-loader__plane"
                          d="M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z"
                          className="cal-loader__plane" fill="#000033"/>
                </svg>
            </div>
        )
    }
    let flightInfo;
    if (info.flights != null && info.flights.length != 0) {
        flightInfo = info.flights.map((flight) =>
            <InfiniteScroll dataLength={1000}
                            style={{
                                display: 'inline-flex',
                                maxHeight: '400px',
                                overflow: 'auto',
                                height: 'auto',
                                color: 'pink',
                            }}
                            height={400}>
                <div>
                    <p onClick={refreshPage} to={"/flights/" + flight.flight_id}
                       onClick={event => window.location.href = "/flights/" + flight.flight_id}
                    >
                        {flight != null && flight.flight_id != null && flight.length != 0 ? (
                            "Flight Iata: " + flight.flight_iata + "\n" +
                            "Flight Date: " + flight.flight_date + "\n"
                        ) : "No Information found"}
                    </p>
                </div>
            </InfiniteScroll>
        );
    } else {
        flightInfo = <p style={{
            color: 'pink',
        }}>No Information found</p>;
    }
    return (
        <div className="AirlineInfo container">

            <div className="row">
                <div className="image center">
                    <div className="card">
                        <img
                            src={"https://daisycon.io/images/airline/?width=300&height=150&color=ffffff&iata=" + info.iata_code}
                            className="center" height="100%"/>
                    </div>
                </div>

                <div className="link-1 mb-5">

                    <div className="card bg-dark text-center text-white">
                        <h1>Flights: </h1>
                        {flightInfo}
                    </div>
                </div>

                <div class="w-100 "></div>

                <div className="description">
                    <div className="card bg-dark text-center text-white">
                        <div className="card-body">
                            <h3 class="card-title">{info.airline_name}</h3>
                            <Card.Title>Country: {info.country_name}</Card.Title>
                            <Card.Title>Data Found: {info.date_founded}</Card.Title>
                            <Card.Title>Average Age of Fleet: {info.fleet_average_age}</Card.Title>
                            <Card.Title>Iata Code: {info.iata_code}</Card.Title>
                        </div>
                    </div>
                </div>

                <div className="link-2">
                    <div className="card text-center text-white">
                        <h1>Airports:</h1>
                        <p style={{
                            color: 'pink',
                        }}> No Information found</p>
                    </div>
                </div>
            </div>
        </div>

    )
}


export {AirlineInfo};


