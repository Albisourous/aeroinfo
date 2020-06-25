import React, {useState, useEffect} from 'react';
import './airports.css';

function ItemDetail({ match }) {
    useEffect(() => {getairport();}, []);

    const[airport, setairport] = useState({});

    const getairport = async () => {
        const fetchInfo = await fetch();
        const airport = await fetchInfo.json();
    }

    return (
        <div>
            <h1>Item</h1>
        </div>
    )
}

export default ItemDetail;