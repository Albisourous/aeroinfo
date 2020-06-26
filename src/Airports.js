import React from 'react';
import PropTypes from 'prop-types';
import data from "./Data/airports.json";
import InfoGrid from "./Component/InfoGrid";
import INFO_TYPES from './Constants/enum';


const Airports = props => {
  const airportsData = data["data"];
  return (
    <div>
        <li>
            <button>Date</button>
            <button>Departure</button>
            <button>Arrival</button>
            <button className="disabled">Sort:</button>
        </li>
        <div><br/></div>
        <InfoGrid infoData={airportsData} infoCardType={INFO_TYPES.AIRPORTS}/>
    </div>
  );
};

Airports.propTypes = {
  
};

export default Airports;
