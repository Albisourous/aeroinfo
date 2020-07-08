import React, {useState} from 'react';
import PropTypes from 'prop-types';
import data from "./Data/airports.json";
import InfoGrid from "./Component/InfoGrid";
import INFO_TYPES from './Constants/enum';
import './setup.css';

let order = 1;
const airportsData = data["data"];

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

const Airports = props => {
    const [Data, setData] = useState(airportsData);
    return (
        <div>
            <div className="sort">
                <div className="row justify-content-end">
                    <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>

                    <button type="button" className="btn btn-outline-light" onClick={() => {
                        let newData = [...Data];
                        newData.sort(GetSortOrder("airport_name", order));
                        order = order * -1;
                        setData(newData);
                    }}>Name
                    </button>

                    <button type="button" className="btn btn-outline-light" onClick={() => {
                        let newData = [...Data];
                        newData.sort(GetSortOrder("country_name", order));
                        order = order * -1;
                        setData(newData);
                    }}>Country of Origin
                    </button>
                </div>
            </div>
            <div><br/></div>
            <InfoGrid infoData={Data} infoCardType={INFO_TYPES.AIRPORTS}/>
        </div>
    );
};

Airports.propTypes = {};

export default Airports;
