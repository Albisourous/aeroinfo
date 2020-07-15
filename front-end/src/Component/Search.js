
const React = require('react');
const {useState, useEffect} = require('react');
const axios = require('axios');
const css = require('./Search.css');

function Search() {

    const [query, setQuery] = useState('');
    const [message, setMessage] = useState('');
    const [results, setResults] = useState([]);

    /**
     * Fetch the search results and update the state with the result.
     *
     * @param {int} updatedPageNo Updated Page No.
     * @param {String} query Search Query.
     *
     */
    function fetchSearchResults(query){
        // By default the limit of results is 20
        const searchUrl = `https://api-dot-naviaero.uc.r.appspot.com/api/airlines/${query}`;

        axios.get(searchUrl)
            .then((info) => {

                const resultNotFoundMsg = !info.data.airlines.length
                    ? 'There are no more search results. Please try a new search.'
                    : '';
                setResults(info.data.airlines)
                setMessage(resultNotFoundMsg)
                console.log(results)

            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    setMessage('Failed to fetch results.Please check network')
                }
            });
    };


    function handleOnInputChange(){
        setQuery(document.getElementById("search").value);
        if (query) {
            fetchSearchResults(query);
        }
    };


    return (
        <div className="container">

            {/*Search Input*/}

            <label className="search-label" htmlFor="search-input">
                <input
                    type="text"
                    id="search"
                    placeholder="Searching..."
                    onChange={handleOnInputChange}
                />
                <i className="fa fa-search search-icon" onClick={() => {
                    handleOnInputChange()
                }} />
            </label>
            {/*Result*/}

        </div>
    )

}

module.exports = Search;