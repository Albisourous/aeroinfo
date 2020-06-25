import React from 'react';
import PropTypes from 'prop-types';
import data from "./Data/airplanes.json";
import InfoGrid from "./Component/InfoGrid";
import INFO_TYPES from './Constants/enum';
import './setup.css';

const Airplanes = props => {
  const airplanesData = data["data"];
  return (
    <div>
        <li>
            <button>Owner</button>
            <button>Plane Name</button>
            <button className="disabled">Sort:</button>
        </li>
      <InfoGrid infoData={airplanesData} infoCardType={INFO_TYPES.AIRPLANES}/>
    </div>
  );
};

Airplanes.propTypes = {
  
};

export default Airplanes;