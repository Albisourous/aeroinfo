import React from 'react';
import axios from 'axios';
import './Search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            message: '',
        };
        this.cancel = '';

    }


    handleOnInputChange = (event) => {
        const query = document.getElementById("search").value;
        if (!query) {
            this.setState({ query, results: [], message: '' });
        } else {
            this.setState({ query, message: '' }, () => {
                this.fetchSearchResults(query);
            });
        }
    };


    /**
     * Fetch the search results and update the state with the result.
     *
     * @param {int} updatedPageNo Updated Page No.
     * @param {String} query Search Query.
     *
     */
    fetchSearchResults = (query) => {
        // By default the limit of results is 20
        const searchUrl = `https://api-dot-naviaero.uc.r.appspot.com/api/airlines/${query}`;

        if (this.cancel) {
            // Cancel the previous request before making a new request
            this.cancel.cancel();
        }

        // Create a new CancelToken
        this.cancel = axios.CancelToken.source();
        axios
            .get(searchUrl, {
                cancelToken: this.cancel.token,
            })
            .then((info) => {


                const resultNotFoundMsg = !info.data.airlines.length
                    ? 'There are no more search results. Please try a new search.'
                    : '';
                this.setState({
                    results: info.data.airlines,
                    message: resultNotFoundMsg,

                });
                console.log(this.state.results)

            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        message: 'Failed to fetch results.Please check network',
                    });
                }
            });
    };



    renderSearchResults = () => {
        const { results } = this.state;
        // if (results.length) {
        console.log(results)
        return (
            <div className="results-container">
                {/* {results.map((result) => {
                        return (
                            <a key={result.id} href={result.previewURL} className="result-items">
                                <h6 className="image-username">{result.user}</h6>
                                <div className="image-wrapper">
                                    <img className="image" src={result.previewURL} alt={result.user} />
                                </div>
                            </a>
                        );
                    })} */}
            </div>
        );
        // }
    };


    render() {
        const { query } = this.state;
        const { message } = this.state;


        return (
            <div className="container">

                {/*Search Input*/}

                <label className="search-label" htmlFor="search-input">
                    <input
                        type="text"
                        id="search"
                        placeholder="Searching..."
                    />
                    <i className="fa fa-search search-icon" onClick={() => {
                        this.handleOnInputChange()
                        this.renderSearchResults()
                    }} />
                </label>
                {/*Result*/}

            </div>
        )
    }
}

export default Search;