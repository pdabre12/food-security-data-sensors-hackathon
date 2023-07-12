//import React from "react";
import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
  ['From', 'To', 'Value'],
  ['Egypt', 'China, mainland', 425186],
  ['Egypt', 'Pakistan', 4960],
  ['Egypt', 'Thailand', 1136], 
  ['Egypt', 'Viet Nam', 293],
  ['Egypt', 'Denmark', 0],
  ['Egypt', 'India', 61402],
  ['Egypt', 'United Kingdom of Great Britain and Northern Ireland', 0],
  ['Egypt', 'United States of America', 0],
  ['Egypt', 'Greece', 0],
  ['Egypt', 'Kuwait', 0],
  ['Egypt', 'Qatar', 0],   
  ['Egypt', 'Saudi Arabia', 0],
  ['Egypt', 'Spain', 4],
  ['Egypt', 'Italy', 32], 
  ['Egypt', 'Brunei Darussalam', 1],
  ['Egypt', 'Russian Federation', 2],
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
        <h2>Egypt 2019 rice imports</h2>
        <div class = "row">
          <div class = "col-5">
            <Chart
              width={550}
              height={'650px'}
              chartType="Sankey"
              loader={<div>Loading Chart</div>}
              data={sankeyData}
              options={options}

            />
          </div>
          <div class = "col-2">
          </div>
          <div class = "col-5" style={{height:400, width:500,border: "1px solid black" }}>
              <h2>Rice Import Quantity</h2>
              <Chart
            chartType="PieChart"
            data={[['To', 'Value'],
                    ['Brunei Darussalam', 1],
                    ['China, mainland', 425186],
                    ['Denmark', 0],
                    ['Greece', 0],
                    ['India', 61402],
                    ['Italy', 32],
                    ['Kuwait', 0],
                    ['Pakistan', 4960],
                    ['Qatar', 0],
                    ['Russian Federation', 2],
                    ['Saudi Arabia', 0],
                    ['Spain', 4],
                    ['Thailand', 1136],
                    ['United Kingdom of Great Britain and Northern Ireland', 0],
                    ['United States of America', 0],
                    ['Viet Nam', 293]
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