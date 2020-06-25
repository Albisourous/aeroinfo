import React, {useState, useEffect} from 'react';
import './airports.css';

function ItemDetail({ match }) {
    useEffect(() => {getairport();}, []);

    const[airport, setairport] = useState({});

    const getairport = async () => {
        const fetchInfo = await fetch('./Data/${match.params.id}');
        const airport = await fetchInfo.json();

        console.log(airport);
    }

    return (
        <div>
            <h1>Hi</h1>
        </div>
    )
}

export default ItemDetail;