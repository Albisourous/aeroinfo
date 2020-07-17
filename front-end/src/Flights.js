import React, { useState, useEffect } from 'react';

import InfoGrid from "./Component/InfoGrid";
import INFO_TYPES from './Constants/enum';
import './setup.css';
import './Component/load.scss'
import './Component/loader.css'
import Pagination from "./Component/Pagination.js";

import axios from 'axios';
import './Component/Search.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';

const useStyles = makeStyles((theme) => ({
    searchBar: {
        margin: theme.spacing(1),
        color: 'white',
    },

    searchBarText: {
        color: 'primary',
        size: 'medium',

    },

    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

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
    let order = 1;
    const [flights, setFlights] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15);

    const [query, setQuery] = useState('');
    const [message, setMessage] = useState('');
    const [temp, setTemp] = useState([]);
    const classes = useStyles();

    useEffect(() => { //TODO change back
        setLoading({ isLoading: true });

        fetch('https://api-dot-naviaero.uc.r.appspot.com/api/flights')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .then(data => { setFlights(data.flights); setTemp(data.flights); setLoading(false) })
            .catch(error => { setError(true); setLoading(false) });

    }, []);

    if (isLoading) {
        return (
            <div className="loader hidden">
                <svg className="svg-calLoader" xmlns="http://www.w3.org/2000/svg" width="230" height="230">
                    <path className="cal-loader__path"
                        d="M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z"
                        fill="none" stroke="#0099cc" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                        stroke-dasharray="10 10 10 10 10 10 10 432" stroke-dashoffset="77" />
                    <path className="cal-loader__plane"
                        d="M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z"
                        className="cal-loader__plane" fill="#000033" />
                </svg>
            </div>
        )
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    //get current post
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = flights.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    /**
         * Fetch the search results and update the state with the result.
         *
         * @param {int} updatedPageNo Updated Page No.
         * @param {String} query Search Query.
         *
         */
    function fetchSearchResults(searchQuery) {
        // By default the limit of results is 20
        const searchUrl = `https://api-dot-naviaero.uc.r.appspot.com/api/flights/${searchQuery}`;
        console.log(searchUrl);

        axios.get(searchUrl)
            .then((info) => {
                const resultNotFoundMsg = !info.data.flights.length ?
                    'There are no more search results. Please try a new search.' :
                    '';
                setMessage(resultNotFoundMsg);
                setFlights(info.data.flights);

                console.log(info.data.flights);
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    setMessage('Failed to fetch results.Please check network')
                }
                console.log(error)
            });
    };


    function handleOnInputChange() {
        const input = document.getElementById("input-with-icon-grid").value;
        setQuery(input);
        fetchSearchResults(input);

    };



    return (
        <div className="Flights">

            <div className="Search">
                <div className={classes.searchBar}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <SearchIcon className="icon" />
                        </Grid>
                        <Grid item>

                            <TextField
                                TextField color='primary'
                                id="input-with-icon-grid"
                                label="Enter a flight's departure or arrival..."
                                onChange={() => {handleOnInputChange()}}
                            />
                        </Grid>

                        <Grid item>
                            <CloseIcon className="icon" onClick={() => { setFlights(temp) 
                            document.getElementById("input-with-icon-grid").value = null}} />
                        </Grid>


                    </Grid>
                </div>
            </div>




            <div className="sort">
                <div className="row justify-content-end">
                    <SortByAlphaIcon className="icon" />

                    <button type="button" className="btn btn-outline-light" onClick={() => {
                        let newFlights = [...flights];
                        newFlights.sort(GetSortOrder("arrival_airport", order)); //TODO
                        order = order * -1;
                        setFlights(newFlights);
                    }}>Departure
                    </button>
                    <h1>|</h1>
                    <button type="button" className="btn btn-outline-light" onClick={() => {
                        let newFlights = [...flights];
                        newFlights.sort(GetSortOrder("departure_airport", order)); //TODO
                        order = order * -1;
                        setFlights(newFlights);
                    }}>Arrival
                    </button>
                    <h1>|</h1>
                    <button type="button" className="btn btn-outline-light" onClick={() => {
                        let newFlights = [...flights];
                        newFlights.sort(GetSortOrder("flight_date", order)); //TODO
                        order = order * -1;
                        setFlights(newFlights);
                    }}>Date
                    </button>
                </div>
            </div>
            <div><br /></div>
            <InfoGrid infoData={currentPosts} infoCardType={INFO_TYPES.FLIGHTS} query={query}/>
            <Pagination postsPerPages={postsPerPage} totalPosts={flights.length} paginate={paginate}>

            </Pagination>
        </div>
    );
};

Flights.propTypes = {};

export default Flights;

