import BubbleChart from "@weknow/react-bubble-chart-d3";
import React from "react";


const photographers = [
    {label: 'London', value: 114, id: 485},
    {label: 'London calling', value: 144, id: 201310},
    {label: 'Korea', value: 301, id: 4886564},
    {label: 'Aerial', value: 361, id: 1223439},
    {label: 'Pastel + Sparkle', value: 101, id: 1426076},
    {label: 'Traveling', value: 368, id: 431862},
    {label: 'Abstract', value: 104, id: 993190},
    {label: 'Tokyo', value: 96, id: 8278054},
];

let ids = new Map([
    ["London", 485],
    ["London calling", 201310],
    ["Korea", 4886564],
    ["Aerial", 1223439],
    ["Pastel + Sparkle", 1426076],
    ["Traveling", 431862],
    ["Abstract", 993190],
    ["Tokyo", 8278054],
]);

photographers.sort((a, b) => {
    return parseInt(b.value) - parseInt(a.value)
})


const SlayBubble = () => {
    //from https://github.com/weknowinc/react-bubble-chart-d3

    return (
        <div className="opaque">
            <BubbleChart
                graph={{
                    zoom: .9,
                    offsetX: -0,
                    offsetY: -0,
                }}
                width={1000}
                height={800}
                padding={0} // optional value, number that set the padding between bubbles
                showLegend={true} // optional value, pass false to disable the legend.
                legendPercentage={20} // number that represent the % of with that legend going to use.
                legendFont={{
                    family: 'Homenaje',
                    size: 20,
                    color: '#fff',
                    weight: 'bold',
                }}
                valueFont={{
                    family: 'Homenaje',
                    size: 17,
                    color: '#fff',
                    weight: 'bold',
                }}
                labelFont={{
                    family: 'Homenaje',
                    size: 15,
                    color: '#fff',
                    weight: 'bold',
                }}
                //Custom bubble/legend click functions such as searching using the label, redirecting to other page
                bubbleClickFun={function bubbleClickFun(label) {
                    window.location = "https://unsplash.com/collections/" + ids.get(label);
                }}
                legendClickFun={function bubbleClickFun(label) {
                    window.location = "https://unsplash.com/collections/" + ids.get(label);
                }}
                data={photographers}/>
                <h3 style={{color: 'white'}}>Size of some of the collections on http://www.photoslay.me </h3>
        </div>

    );
}

export {SlayBubble};