import React, { useState } from 'react';
import PropTypes from 'prop-types';
import data from "./Data/airplanes.json";
import InfoGrid from "./Component/InfoGrid";
import INFO_TYPES from './Constants/enum';
import loading from './Images/loading.gif';
import Loader from 'react-loader-spinner';
import './setup.css';

let order = 1;
const airplanesData = data["data"];
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';


const Airplanes = props => {
  const [hits, setHits] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [m, setM] = useState(airplanesData);

  console.log(m);


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

  function GetSortOrder(prop, ord) {
    return function (a, b) {
      if (ord === 1) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      }
      else {
        if (a[prop] < b[prop]) {
          return 1;
        } else if (a[prop] > b[prop]) {
          return -1;
        }
        return 0;
      }
    }
  }


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
            <button type="button" class="btn btn-outline-light" onClick={() => {
              let newHits = [...hits];
              newHits.sort(GetSortOrder("title", order));
              order = order * -1;
              setHits(newHits);
            }}>Name</button>

            <button type="button" className="btn btn-outline-light" onClick={() => {
              let newM = [...m];
              newM.sort(GetSortOrder("iata_type", order));
              order = order * -1;
              setM(newM);
            }}>Name</button>

            <button type="button" className="btn btn-outline-light" onClick={() => {
              let newM = [...m];
              newM.sort(GetSortOrder("plane_owner", order));
              order = order * -1;
              setM(newM);
            }}>Owner</button>
          </div>
        </div>


        <InfoGrid infoData={m} infoCardType={INFO_TYPES.AIRPLANES} />
      </div>


    </div>

  );
};

Airplanes.propTypes = {

};

export default Airplanes;

