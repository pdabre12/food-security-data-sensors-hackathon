//import React from "react";
import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

const sankeyData = [
  ['From', 'To', 'Value'],
  ['Egypt', 'Australia', 0],
  ['Egypt', 'Bahrain', 0],
  ['Egypt', 'Cambodia', 4],
  ['Egypt', 'China, mainland', 16699],
  ['Egypt', 'France', 2],
  ['Egypt', 'India', 49898],
  ['Egypt', 'Italy', 127],
  ['Egypt', 'Kuwait', 0],
  ['Egypt', 'Netherlands', 9],
  ['Egypt', 'Pakistan', 553],
  ['Egypt', 'Republic of Korea', 0],
  ['Egypt', 'Russian Federation', 1],
  ['Egypt', 'Saudi Arabia', 0],
  ['Egypt', 'Thailand', 7620],
  ['Egypt', 'United Kingdom of Great Britain and Northern Ireland', 1],
  ['Egypt', 'United States of America', 22],
  ['Egypt', 'Viet Nam', 93]
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
        <h2>Egypt 2020 rice imports</h2>
        <div class = "row">
          <div class = "col-5">
            <Chart
              width={550}
              height={'450px'}
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
                    ['Australia', 0],
                    ['Bahrain', 0],
                    ['Cambodia', 4],
                    ['China, mainland', 16699],
                    ['France', 2],
                    ['India', 49898],
                    ['Italy', 127],
                    ['Kuwait', 0],
                    ['Netherlands', 9],
                    ['Pakistan', 553],
                    ['Republic of Korea', 0],
                    ['Russian Federation', 1],
                    ['Saudi Arabia', 0],
                    ['Thailand', 7620],
                    ['United Kingdom of Great Britain and Northern Ireland', 1],
                    ['United States of America', 22],
                    ['Viet Nam', 93]
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