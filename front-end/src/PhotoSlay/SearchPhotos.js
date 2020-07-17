import React, {useEffect, useState} from 'react'
import Carousel, {Modal, ModalGateway} from 'react-images';
import './photoslay.css';

let search = "Airports";
let images =
    [{src: 'https://source.unsplash.com/1600x900/?1,' + search}, {src: 'https://source.unsplash.com/1600x900/?2,' + search}
        , {src: 'https://source.unsplash.com/1600x900/?3,' + search}, {src: 'https://source.unsplash.com/1600x900/?4,' + search}
        , {src: 'https://source.unsplash.com/1600x900/?5,' + search}, {src: 'https://source.unsplash.com/1600x900/?6,' + search}
        , {src: 'https://source.unsplash.com/1600x900/?7,' + search}, {src: 'https://source.unsplash.com/1600x900/?8,' + search}
        , {src: 'https://source.unsplash.com/1600x900/?9,' + search}
        , {src: 'https://source.unsplash.com/1600x900/?10,' + search}];

function pics(searchTerm) {
    images =
        [{src: 'https://source.unsplash.com/1600x900/?1,' + searchTerm}, {src: 'https://source.unsplash.com/1600x900/?2,' + searchTerm}
            , {src: 'https://source.unsplash.com/1600x900/?3,' + searchTerm}, {src: 'https://source.unsplash.com/1600x900/?4,' + searchTerm}
            , {src: 'https://source.unsplash.com/1600x900/?5,' + searchTerm}, {src: 'https://source.unsplash.com/1600x900/?6,' + searchTerm}
            , {src: 'https://source.unsplash.com/1600x900/?7,' + searchTerm}, {src: 'https://source.unsplash.com/1600x900/?8,' + searchTerm}
            , {src: 'https://source.unsplash.com/1600x900/?9,' + searchTerm}
            , {src: 'https://source.unsplash.com/1600x900/?10,' + searchTerm}];
    return <div>
        <Carousel
            views={images}/>
    </div>;
}

function getSearch() {
    let x = document.getElementById("imgSearch");
    let text = "";
    let i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    search = text;
    pics(search);
}


class SearchPhotos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        this.setState({value: event.target.value});
        event.preventDefault();
        const output = document.createElement('div');
        const data = [...event.target.elements].reduce((data, element) => {
            if (element.name && element.value) {
                data[element.name] = element.value;
            }
            return data;
        }, {});
    };

    render() {
        return (
            <div>
                <div class="centered">
                    <h3 style={{color: 'white'}}>Enter a search item: </h3>
                    <form action="/search" onSubmit={this.handleSubmit} id="imgSearch" className="form-inline">
                        <label>
                            <input type="text" name="search" value={this.state.value} onChange={this.handleChange} placeholder="Airport"/>
                            <input type="submit" onClick={getSearch}/>
                        </label>

                    </form>
                </div>
                <h3 style={{color: 'white'}} id="pics"></h3>
                {pics(search)}
                <h3 style={{color: 'white'}}> Photo Galley made using Api from http://www.photoslay.me/</h3>
            </div>
        );
    }
}

export default SearchPhotos;