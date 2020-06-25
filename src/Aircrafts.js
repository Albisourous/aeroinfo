import React from 'react';
import PropTypes from 'prop-types';
import data from "./Data/data.json";
import InfoGrid from "./Component/InfoGrid";

const Aircrafts = props => {
  const aircarftsData = data["airplanes"];
  console.log(aircarftsData);
  return (
    <div>
      <InfoGrid infoData={aircarftsData}/>
    </div>
  );
};

Aircrafts.propTypes = {
  
};

export default Aircrafts;