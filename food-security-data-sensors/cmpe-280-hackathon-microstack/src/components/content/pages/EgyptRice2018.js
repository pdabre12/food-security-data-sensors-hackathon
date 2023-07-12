//import React from "react";
import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
  ['From', 'To', 'Value'],
  ['Egypt Wheat Imports 2018', 'Thailand', 8190],
  ['Egypt Wheat Imports 2018', 'Russian Federation', 315],
  ['Egypt Wheat Imports 2018', 'Pakistan', 284],
  ['Egypt Wheat Imports 2018', 'Italy', 138],
  ['Egypt Wheat Imports 2018', 'United States of America', 19],
  ['Egypt Wheat Imports 2018', 'Sri Lanka', 1],
  ['Egypt Wheat Imports 2018', 'United Kingdom of Great Britain and Northern Ireland', 1],
  ['Egypt Wheat Imports 2018', 'Saudi Arabia', 1],
  ['Egypt Wheat Imports 2018', 'Kuwait', 0],
  ['Egypt Wheat Imports 2018', 'United Arab Emirates', 0],
  ['Egypt Wheat Imports 2018', 'France', 0],
  ['Egypt Wheat Imports 2018', 'Nigeria', 0],
  ['Egypt Wheat Imports 2018', 'Oman', 0],
  ['Egypt Wheat Imports 2018', 'Qatar', 0],
  ['Egypt Wheat Imports 2018', 'South Africa', 0],
  ['Egypt Wheat Imports 2018', 'China', 32672],
  ['Egypt Wheat Imports 2018', 'India', 29165],
]
const options = {
  sankey: {
    node: {
       colors: ['#A0C8E2', '#8B98C7', '#FABD4A', '#EF6C8B', '#C3E88D', '#DCE775', '#FFC107', '#03A9F4', '#673AB7', '#E91E63', '#009688', '#8BC34A', '#FF5722', '#607D8B', '#9C27B0', '#4CAF50', '#FF9800'],

      nodeColors: {
        'Thailand': '#A0C8E2',
        'Russian Federation': '#8B98C7',
        'Pakistan': '#FABD4A',
        'Italy': '#E91E63',
        'United States of America': '#9C27B0',
        'Sri Lanka': '#8BC34A',
        'United Kingdom of Great Britain and Northern Ireland': '#9552c2',
        'Saudi Arabia': '#FF9800',
        'Kuwait': '#140b18',
        'United Arab Emirates':'#DCE775',
        'France':'#4e6acb',
        'Nigeria':'#c07094',
        'Oman':'#466024',
        'Qatar':'#3c393f',
        'South Africa':'#ea092b',
        'China':'#A0C8E2',
        'India' :'#61641a',

      },
     },
      link: {
        colorMode: 'gradient',
      },
  }
};

class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Egypt Wheat Imports 2018 rice imports</h2>
        <div class = "row">
          <div class = "col-4">
          <Chart
          width={'750px'}
          height={'650px'}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={sankeyData}
          options={options}
          rootProps={{ 'data-testid': '1' }}
        />
          </div>
     
        <div class = "col-4">
        </div>
        <div class = "col-4" style={{height:400, width:500,border: "1px solid black" }}>
          <h2>Rice Import Quantity</h2>
          <Chart
          chartType="PieChart"
          data={[['To', 'Value'],
          ['Thailand', 8190],
            ['Russian Federation', 315],
            ['Pakistan', 284],
            ['Italy', 138],
            ['United States of America', 19],
            ['Sri Lanka', 1],
            ['United Kingdom of Great Britain and Northern Ireland', 1],
            ['Saudi Arabia', 1],
            ['Kuwait', 0],
            ['United Arab Emirates', 0],
            ['France', 0],
            ['Nigeria', 0],
            ['Oman', 0],
            ['Qatar', 0],
            ['South Africa', 0],
            ['China', 32672],
            ['India', 29165],
              ]}
          graph_id="PieChart"
          width={"100%"}
          height={"88%"}
          legend_toggle
        />
      </div>
      </div>
       
      </div>
      
    )
  }
}


  
  export default SankeyChart;