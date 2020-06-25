import React, {useState, useEffect} from 'react';
import data from './Data/airports.json';
import {Card} from "react-bootstrap";
import './airports.css';

var init = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};

let myRequest = new Request(data.data, init);

fetch(myRequest)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        console.log(data.airport_name);
    })


