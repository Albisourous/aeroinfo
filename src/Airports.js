import React from 'react'
import './airports.css'

let sortDirection = false;
let tableData = [
    
];

window.onload = () =>  {
    loadTableData(tableData)
};

function loadTableData(tableData)
{
    const tableBody = document.getElementById('tableData');
    let dataHTML = '';

    for(let data of tableData)
    {
        dataHTML += `<tr><td>${data.airport_name}</td><td>${data.country_name}</td><td>${data.timezone}</td><td>${data.gmt}</td><td>${data.iata_code}</td><td>${data.geoname_id}</td></tr>`;
    }
    if(tableBody != null)
    {
        tableBody.innerHTML = dataHTML;
    }
}

export const Airports = () => (

    <div>
        <div><br/></div>
        <div><br/></div>
        <table>
        <thead>
        <tr>
            <th>Airport Name</th>
            <th>Country Location</th>
            <th>Timezone</th>
            <th>GMT</th>
            <th>IATA Code</th>
            <th>GeoName ID</th>
        </tr>
        </thead>

        <tbody id="tableData"></tbody>
    </table>
    </div>
)
