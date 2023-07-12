import React from "react";
import MultiRangeSlider from "./RangeSlider";
import { Chart } from "react-google-charts";
import {datadebt, datareserve, dataservice} from "./data/data";
import {optionsagriculture, optionsfertilizers, optionsfertilizersprod} from "./Agriculture";

export const optionsreserve= {
  title: "Reserve",
};

export const optionsservice= {
  title: "GNI",
};

export const optionsdebt= {
  title: "Total Debt(%)",
};

class Debt extends React.Component {

  constructor(){
    super();
    this.country = "USA";
    this.minRange= 1970;
    this.maxRange= 2021;
    this.changedDatareserve = JSON.parse(JSON.stringify(datareserve));
    this.changedDataservice = JSON.parse(JSON.stringify(dataservice));
    this.changedDatadebt = JSON.parse(JSON.stringify(datadebt));
    this.onCountryChange = this.onCountryChange.bind(this);
    this.onRangeChange = this.onRangeChange.bind(this);

    this.state = {
      changedDatareserve: this.changedDatareserve,
      changedDataservice: this.changedDataservice,
      changedDatadebt: this.changedDatadebt
    }
  }

  onCountryChange(event){
    this.country=event.target.value;
    this.changedDatareserve = JSON.parse(JSON.stringify(datareserve));
    this.changedDataservice = JSON.parse(JSON.stringify(dataservice));
    this.changedDatadebt = JSON.parse(JSON.stringify(datadebt));
    if(this.country === "India"){
      for(let i=0; i<this.changedDatareserve.length; i++){
        this.changedDatareserve[i].splice(2,2);
      }
      for(let i=0; i<this.changedDataservice.length; i++){
        this.changedDataservice[i].splice(2,2);
      }
      for(let i=0; i<this.changedDatadebt.length; i++){
        this.changedDatadebt[i].splice(2,2);
      }
      this.setState({
        changedDatareserve: this.changedDatareserve,
        changedDataservice: this.changedDataservice,
        changedDatadebt: this.changedDatadebt
      });


    } else if(this.country === "China") {
      for(let i=0; i<this.changedDatareserve.length; i++){
        this.changedDatareserve[i].splice(1,1);
        this.changedDatareserve[i].pop();
      }
      for(let i=0; i<this.changedDataservice.length; i++){
        this.changedDataservice[i].splice(1,1);
        this.changedDataservice[i].pop();
      }
      for(let i=0; i<this.changedDatadebt.length; i++){
        this.changedDatadebt[i].splice(1,1);
        this.changedDatadebt[i].pop();
      }
      this.setState({
        changedDatareserve: this.changedDatareserve,
        changedDataservice: this.changedDataservice,
        changedDatadebt: this.changedDatadebt
      });
    } else if(this.country === "USA") {
      for(let i=0; i<this.changedDatareserve.length; i++){
        this.changedDatareserve[i].splice(1,2);
      }
      for(let i=0; i<this.changedDataservice.length; i++){
        this.changedDataservice[i].splice(1,2);
      }
      for(let i=0; i<this.changedDatadebt.length; i++){
        this.changedDatadebt[i].splice(1,2);
      }
      this.setState({
        changedDatareserve: this.changedDatareserve,
        changedDataservice: this.changedDataservice,
        changedDatadebt: this.changedDatadebt
      });
    }
    
  }


  onRangeChange(min, max){
    this.rangeChangedDatareserve = JSON.parse(JSON.stringify(this.changedDatareserve));
    this.rangeChangedDataservice = JSON.parse(JSON.stringify(this.changedDataservice));
    this.rangeChangedDatadebt = JSON.parse(JSON.stringify(this.changedDatadebt));

    if(min != 1970 || max !=2021){
      for(let i=1; i<this.rangeChangedDatareserve.length; i++){
        if(this.rangeChangedDatareserve[i][0] === min) {
          this.rangeChangedDatareserve.splice(1, i);
        }
        if(this.rangeChangedDatareserve[i] !== undefined && this.rangeChangedDatareserve[i][0] === max) {
          this.rangeChangedDatareserve.splice(i,this.rangeChangedDatareserve.length - 1);
        }
      }
      for(let i=1; i<this.rangeChangedDataservice.length; i++){
        if(this.rangeChangedDataservice[i][0] === min) {
          this.rangeChangedDataservice.splice(1, i);
        }
        if(this.rangeChangedDataservice[i] !== undefined && this.rangeChangedDataservice[i][0] === max) {
          this.rangeChangedDataservice.splice(i,this.rangeChangedDataservice.length - 1);
        }
      }
      for(let i=1; i<this.rangeChangedDatadebt.length; i++){
        if(this.rangeChangedDatadebt[i][0] === min) {
          this.rangeChangedDatadebt.splice(1, i);
        }
        if(this.rangeChangedDatadebt[i] !== undefined && this.rangeChangedDatadebt[i][0] === max) {
          this.rangeChangedDatadebt.splice(i,this.rangeChangedDatadebt.length - 1);
        }
      }

      this.setState({
        changedDatareserve: this.rangeChangedDatareserve,
        changedDataservice: this.rangeChangedDataservice,
        changedDatadebt: this.rangeChangedDatadebt
      });
    }
    
  }
 
  render() {
    const selectedOpt = this.props.location.state.selectedOpt;
    console.log("hiiii", selectedOpt);
    return (
      <div>
          <label for="country-choice">Select Country: </label>
          <select name="country-choices" id="country-choices"
          onChange={(event) => {
            this.onCountryChange(event);
          }}>
              <option value=" ">  </option>
              <option value="India"> India </option>
              <option value="China"> China </option>
              <option value="USA"> USA </option>
        </select>

          <MultiRangeSlider
            min={1970}
            max={2021}
            onChange={({ min, max }) => {
              this.onRangeChange(min, max)
            }}
          />

        {selectedOpt === 1 ? (
            <div>
              <Chart id ='reserve' class="debt"
                     chartType="LineChart"
                     width="100%"
                     height="280px"
                     data={this.state.changedDatareserve}
                     options={optionsreserve}
              /></div>
        ) : selectedOpt === 2 ? (
            <div>
              <Chart id ='reserve' class="debt"
                     chartType="LineChart"
                     width="100%"
                     height="280px"
                     data={this.state.changedDatareserve}
                     options={optionsreserve}
              />
              <Chart id ='service' class="debt"
                     chartType="LineChart"
                     width="100%"
                     height="280px"
                     data={this.state.changedDataservice}
                     options={optionsservice}
              />
            </div>

        ) : selectedOpt === 3 ? (
            <div>
              <Chart id ='reserve' class="debt"
                     chartType="LineChart"
                     width="100%"
                     height="280px"
                     data={this.state.changedDatareserve}
                     options={optionsreserve}
              />
              <Chart id ='service' class="debt"
                     chartType="LineChart"
                     width="100%"
                     height="280px"
                     data={this.state.changedDataservice}
                     options={optionsservice}
              />
              <Chart id ='debttotal' class="debt"
                     chartType="LineChart"
                     width="100%"
                     height="280px"
                     data={this.state.changedDatadebt}
                     options={optionsdebt}
              />
            </div>
        ) : (
            <p>No conditions are true</p>
        )}


      </div>
      
    )
  }
}
         
 export default Debt;