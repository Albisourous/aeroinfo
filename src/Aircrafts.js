import React, {useState, useEffect} from 'react';
import air from './Data/airplanes'
import {Card} from "react-bootstrap";
import ButtonBase from "@material-ui/core/ButtonBase";

function Aircrafts() {
  return (
      <div>
        <li>
          <button class="disabled">Sort:</button>
        </li>
        <div><br/></div>
          <Card>
              <ButtonBase
                  className="{data}"
                  onClick={event => window.location.href="/aircrafts/" + "B737-300"}
              >
                  <Card.Body>
                      <Card.Title>Boeing 737 Classic</Card.Title>
                      <Card.Text>Owner: Airwork Flight Operations Ltd</Card.Text>
                      <Card.Text>Age: 31</Card.Text>
                  </Card.Body>
              </ButtonBase>
          </Card>
      </div>
  )
}

export {Aircrafts};