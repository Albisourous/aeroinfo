import React from 'react';
import PropTypes from 'prop-types';
import data from "./Data/flights.json";
import InfoGrid from "./Component/InfoGrid";
import INFO_TYPES from './Constants/enum';


const Flights = props => {
  const flightsData = data["data"];
  return (
    <div className="Flights">
      <li>
        <button>Date</button>
        <button>Departure</button>
        <button>Arrival</button>
        <button className="disabled">Sort:</button>
      </li>
      <div><br /></div>
      <InfoGrid infoData={flightsData} infoCardType={INFO_TYPES.FLIGHTS} />
    </div>
  );
};

Flights.propTypes = {

};

export default Flights;
