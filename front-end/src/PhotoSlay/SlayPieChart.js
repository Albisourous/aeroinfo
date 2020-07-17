import {PieChart} from 'react-minimal-pie-chart';
import React from "react";


const dataMock = [
  { title: 'Brett Jordan', value: 2342, color: '#005A76' },
  { title: 'Tomas Robertson', value: 652, color: '#008790' },
  { title: 'Scott Webb', value: 644, color: '#10B390' }, //https://mycolor.space/?hex=%231E3149&sub=1
];

export const SlayPieChart = () => {
    return (
        <div>
            <PieChart radius={25} lineWidth={40} paddingAngle={2.5} animate={true} animationDuration={1000}
                      viewBoxSize={[150, 100]} center={[75, 50]}
                      label={({dataEntry}) => dataEntry.title + " " + dataEntry.value}
                      labelStyle={(index) => ({
                          fill: dataMock[index].color,
                          fontSize: '5px',
                          fontFamily: 'sans-serif',
                      })}
                      labelPosition={112}
                      data={dataMock}/>
            <h3 style={{color: 'white'}}>Number of photos from each photographer on on http://www.photoslay.me </h3>
        </div>
    );
}