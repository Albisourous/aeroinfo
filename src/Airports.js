import React from 'react'
import './airports.css'

let sortDirection = false;
let tableData = [
    {
        gmt: -10,
        iata_code: 'AAA',
        city_iata_code: 'AAA',
        icao_code: 'NTGA',
        country_iso2: 'PF',
        geoname_id: 6947726,
        latitude: -17.05,
        longitude: -145.41667,
        airport_name: 'Anaa',
        country_name: 'French Polynesia',
        phone_number: null,
        timezone: 'Pacific/Tahiti'
    },
    {
        gmt: 10,
        iata_code: 'AAB',
        city_iata_code: 'AAB',
        icao_code: 'YARY',
        country_iso2: 'AU',
        geoname_id: 7730796,
        latitude: -26.7,
        longitude: 141.04167,
        airport_name: 'Arrabury',
        country_name: 'Australia',
        phone_number: null,
        timezone: 'Australia/Brisbane'
    },
    {
        gmt: 2,
        iata_code: 'AAC',
        city_iata_code: 'AAC',
        icao_code: 'HEAR',
        country_iso2: 'EG',
        geoname_id: 6297289,
        latitude: 31.133333,
        longitude: 33.75,
        airport_name: 'El Arish International Airport',
        country_name: 'Egypt',
        phone_number: null,
        timezone: 'Africa/Cairo'
    },
    {
        gmt: 1,
        iata_code: 'AAE',
        city_iata_code: 'AAE',
        icao_code: 'DABB',
        country_iso2: 'DZ',
        geoname_id: 2570559,
        latitude: 36.821392,
        longitude: 7.811857,
        airport_name: 'Les Salines',
        country_name: 'null',
        phone_number: 'null',
        timezone: 'Africa/Algiers'
    },
    {
        gmt: -5,
        iata_code: 'AAF',
        city_iata_code: 'AAF',
        icao_code: 'KAAF',
        country_iso2: 'US',
        geoname_id: 4146153,
        latitude: 29.733334,
        longitude: -84.98333,
        airport_name: 'Apalachicola Regional',
        country_name: 'United States',
        phone_number: null,
        timezone: 'America/New_York'
    }
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
        dataHTML += `<tr><td>${data.airport_name}</td>
                             <td>${data.country_name}</td>
                             <td>${data.timezone}</td>
                             <td>${data.gmt}</td>
                             <td>${data.iata_code}</td>
                             <td>${data.geoname_id}</td></tr>`;
    }
    console.log(dataHTML)

    tableBody.innerHTML = dataHTML;
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
