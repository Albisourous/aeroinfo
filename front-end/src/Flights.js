import React, {useState} from 'react';
import PropTypes from 'prop-types';
import data from "./Data/flights.json";
import InfoGrid from "./Component/InfoGrid";
import INFO_TYPES from './Constants/enum';
import './setup.css';

let order = 1;
const flightsData = data["data"];

function GetSortOrder(prop, ord) {
    return function (a, b) {
        if (ord === 1) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        } else {
            if (a[prop] < b[prop]) {
                return 1;
            } else if (a[prop] > b[prop]) {
                return -1;
            }
            return 0;
        }
    }
}

const Flights = props => {
    const [m, setM] = useState(flightsData);
    return (
        <div className="Flights">
            <div className="sort">
                <div className="row justify-content-end">
                    <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>

                    <button type="button" className="btn btn-outline-light" onClick={() => {
                        let newM = [...m];
                        newM.sort(GetSortOrder("arrival[x].airport", order)); //TODO
                        order = order * -1;
                        setM(newM);
                    }}>Departure
                    </button>

                    <button type="button" className="btn btn-outline-light" onClick={() => {
                        let newM = [...m];
                        newM.sort(GetSortOrder("plane_owner", order)); //TODO
                        order = order * -1;
                        setM(newM);
                    }}>Arrival
                    </button>
                </div>
            </div>
            <div><br/></div>
            <InfoGrid infoData={m} infoCardType={INFO_TYPES.FLIGHTS}/>
        </div>
    );
};

Flights.propTypes = {};

export default Flights;
