import React, { useState } from 'react';
import PropTypes from 'prop-types';
import data from "./Data/airplanes.json";
import InfoGrid from "./Component/InfoGrid";
import INFO_TYPES from './Constants/enum';
import loading from './Images/loading.gif';
import Loader from 'react-loader-spinner';
import './setup.css';


const Airplanes = props => {
  const airplanesData = data["data"];
  const API = 'https://hn.algolia.com/api/v1/search?query=';
  const DEFAULT_QUERY = 'redux';

  const [hits, setHits] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useState(() => {
    setLoading({ isLoading: true });
    fetch(API + DEFAULT_QUERY)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(data => setHits(data.hits), setLoading(false))
      .catch(error => this.setState({ error, isLoading: false }));
  });

  if (isLoading) {
    return (
      <div className="gif">
        <img src={loading} alt="loading..." width="300" height="300" />
      </div>
    )
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  console.log(hits)
  console.log(isLoading)

  return (


    <div>
      <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
      <div className="Airplanes">
        <div className="sort">
          <div className="row justify-content-end">
            <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>
            <button type="button" class="btn btn-outline-light">Plane Owner</button>
          </div>
        </div>
        <InfoGrid infoData={airplanesData} infoCardType={INFO_TYPES.AIRPLANES} />

      </div>


    </div>

  );
};

Airplanes.propTypes = {

};

export default Airplanes;

