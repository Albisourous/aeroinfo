import React, {useState} from 'react';
import PropTypes from 'prop-types';
import data from "./Data/flights.json";
import InfoGrid from "./Component/InfoGrid";
import INFO_TYPES from './Constants/enum';
import './setup.css';
import './Component/load.scss'
import './Component/loader.css'

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
    const [Data, setData] = useState(flightsData);
    return (
        <div className="Flights">
            <div className="sort">
                <div className="row justify-content-end">
                    <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>

                    <button type="button" className="btn btn-outline-light" onClick={() => {
                        let newData = [...Data];
                        newData.sort(GetSortOrder("departure.airport", order)); //TODO
                        order = order * -1;
                        setData(newData);
                    }}>Departure
                    </button>

                    <button type="button" className="btn btn-outline-light" onClick={() => {
                        let newData = [...Data];
                        newData.sort(GetSortOrder("plane_owner", order)); //TODO
                        order = order * -1;
                        setData(newData);
                    }}>Arrival
                    </button>

                    <button type="button" className="btn btn-outline-light" onClick={() => {
                        let newData = [...Data];
                        newData.sort(GetSortOrder("flight_date", order)); //TODO
                        order = order * -1;
                        newData(newData);
                    }}>Date
                    </button>
                </div>
            </div>
            <div><br/></div>
            <InfoGrid infoData={Data} infoCardType={INFO_TYPES.FLIGHTS}/>
        </div>
    );
};

Flights.propTypes = {};

export default Flights;
