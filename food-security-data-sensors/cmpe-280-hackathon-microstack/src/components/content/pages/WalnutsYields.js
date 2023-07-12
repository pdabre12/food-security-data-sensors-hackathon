import React from "react";
import Papa from 'papaparse'
import csvFile from '../pages/data/walnuts-yield.csv';
import Chart from 'react-apexcharts'

const options = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Phillipines- mango, in shell, Production (tones) and Area Harvested (hectare)'
    },
    yaxis: [
        {
            title: {
                text: 'Area harvested (ha)'
            }
        },
        {
            title: {
                text: 'Yield (kgs/hectare)'
            },
            opposite: true
        }
    ],
    labels: Array.from({ length: (2020 - 1961 + 1) }, (v, k) => `01 Jan ${1961 + k}`),
    xaxis: {
        type: 'datetime',
        labels: {
            format: 'yyyy'
        }
    },
    tooltip: {
        x: {
            format: "yyyy"
        }
    },
    colors: ['#151572', '#80031d']
}

class WalnutsYields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: []
        }
    }

    async componentDidMount() {
        const response = await fetch(csvFile)
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value);
        const results = Papa.parse(csv, { header: true })
        const rows = results.data;
        console.log(rows)
        if (rows.length > 0) {
            const areaHarvested = [];
            const production = [];
            rows.forEach(row => {
                areaHarvested.push(row['Area harvested (ha)'])
                production.push(row['Yield (hg/ha)'])
            })
            this.setState({
                series: [
                    {
                        name: "Area harvested (ha)",
                        data: areaHarvested
                    },
                    {
                        name: "Yield (kgs/hectare)",
                        data: production
                    }
                ]
            })
        }
    }

    render() {
        return (
            <Chart width={'1300px'}
                   height={'450px'} options={options} series={this.state.series} type="line" />
        )
    }
}

export default WalnutsYields;
