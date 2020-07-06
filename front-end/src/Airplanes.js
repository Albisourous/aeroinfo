import React from 'react';
import PropTypes from 'prop-types';
import data from "./Data/airplanes.json";
import InfoGrid from "./Component/InfoGrid";
import INFO_TYPES from './Constants/enum';
import './setup.css';

const Airplanes = props => {
  const airplanesData = data["data"];
  return (
    <div className="Airplanes">
      <div className="sort">
        <div className="row justify-content-end">
          <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>
          <button type="button" class="btn btn-outline-light">Plane Owner</button>
        </div>
      </div>
      <InfoGrid infoData={airplanesData} infoCardType={INFO_TYPES.AIRPLANES} />
    </div>
  );
};

Airplanes.propTypes = {

};

export default Airplanes;