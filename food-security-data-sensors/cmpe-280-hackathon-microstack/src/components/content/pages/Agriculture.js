import React from "react";
import MultiRangeSlider from "./RangeSlider";
import { Chart } from "react-google-charts";
import {dataagriculture, datafertilizers, datafertilizersprod} from "./data/data";
import {optionsgdp, optionsinflow, optionsoutflow} from "./MacroEco";

export const optionsagriculture = {
  title: "Contribution of Agriculture",  
};

export const optionsfertilizers = {
  title: "Fertilizers PROD",
};

export const optionsfertilizersprod= {
  title: "Fertilizers Consumptions",
};


class Agriculture extends React.Component {

  constructor(){
    super();
    this.country = "USA";
    this.minRange= 1970;
    this.maxRange= 2020;
    this.changedDataagriculture = JSON.parse(JSON.stringify(dataagriculture));
    this.changedDatafertilizers = JSON.parse(JSON.stringify(datafertilizers));
    this.changedDatafertilizersprod = JSON.parse(JSON.stringify(datafertilizersprod));   
    this.onCountryChange = this.onCountryChange.bind(this);
    this.onRangeChange = this.onRangeChange.bind(this);

    this.state = {
      changedDataagriculture: this.changedDataagriculture,
      changedDatafertilizers: this.changedDatafertilizers,
      changedDatafertilizersprod: this.changedDatafertilizersprod,
    }
  }

  onCountryChange(event){
    this.country=event.target.value;
    this.changedDataagriculture = JSON.parse(JSON.stringify(dataagriculture));
    this.changedDatafertilizers = JSON.parse(JSON.stringify(datafertilizers));
    this.changedDatafertilizersprod = JSON.parse(JSON.stringify(datafertilizersprod));
   
    if(this.country === "India"){
      for(let i=0; i<this.changedDataagriculture.length; i++){
        this.changedDataagriculture[i].splice(2,2);
      }
      for(let i=0; i<this.changedDatafertilizers.length; i++){
        this.changedDatafertilizers[i].splice(2,2);
      }
      for(let i=0; i<this.changedDatafertilizersprod.length; i++){
        this.changedDatafertilizersprod[i].splice(2,2);
      }
   
      this.setState({
        changedDataagriculture: this.changedDataagriculture,
        changedDatafertilizers: this.changedDatafertilizers,
        changedDatafertilizersprod: this.changedDatafertilizersprod,
      });


    } else if(this.country === "China") {
      for(let i=0; i<this.changedDataagriculture.length; i++){
        this.changedDataagriculture[i].splice(1,1);
        this.changedDataagriculture[i].pop();
      }
      for(let i=0; i<this.changedDatafertilizers.length; i++){
        this.changedDatafertilizers[i].splice(1,1);
        this.changedDatafertilizers[i].pop();
      }
      for(let i=0; i<this.changedDatafertilizersprod.length; i++){
        this.changedDatafertilizersprod[i].splice(1,1);
        this.changedDatafertilizersprod[i].pop();
      }
     
      this.setState({
        changedDataagriculture: this.changedDataagriculture,
        changedDatafertilizers: this.changedDatafertilizers,
        changedDatafertilizersprod: this.changedDatafertilizersprod,
      });
    } else if(this.country === "USA") {
      for(let i=0; i<this.changedDataagriculture.length; i++){
        this.changedDataagriculture[i].splice(1,2);
      }
      for(let i=0; i<this.changedDatafertilizers.length; i++){
        this.changedDatafertilizers[i].splice(1,2);
      }
      for(let i=0; i<this.changedDatafertilizersprod.length; i++){
        this.changedDatafertilizersprod[i].splice(1,2);
      }
      this.setState({
        changedDataagriculture: this.changedDataagriculture,
        changedDatafertilizers: this.changedDatafertilizers,
        changedDatafertilizersprod: this.changedDatafertilizersprod,
      });
    }
    
  }


  onRangeChange(min, max){
    this.rangeChangedDataagriculture = JSON.parse(JSON.stringify(this.changedDataagriculture));
    this.rangeChangedDatafertilizers = JSON.parse(JSON.stringify(this.changedDatafertilizers));
    this.rangeChangedDatafertilizersprod = JSON.parse(JSON.stringify(this.changedDatafertilizersprod));


    if(min != 1970 || max !=2020){

      for(let i=1; i<this.rangeChangedDataagriculture.length; i++){
        if(this.rangeChangedDataagriculture[i][0] === min) {
          this.rangeChangedDataagriculture.splice(1, i);
        }
        if(this.rangeChangedDataagriculture[i] !== undefined && this.rangeChangedDataagriculture[i][0] === max) {
          this.rangeChangedDataagriculture.splice(i,this.rangeChangedDataagriculture.length - 1);
        }
      }

      for(let i=1; i<this.rangeChangedDatafertilizers.length; i++){
        if(this.rangeChangedDatafertilizers[i][0] === min) {
          this.rangeChangedDatafertilizers.splice(1, i);
        }
        if(this.rangeChangedDatafertilizers[i] !== undefined && this.rangeChangedDatafertilizers[i][0] === max) {
          this.rangeChangedDatafertilizers.splice(i,this.rangeChangedDatafertilizers.length - 1);
        }
      }

      for(let i=1; i<this.rangeChangedDatafertilizersprod.length; i++){
        if(this.rangeChangedDatafertilizersprod[i][0] === min) {
          this.rangeChangedDatafertilizersprod.splice(1, i);
        }
        if(this.rangeChangedDatafertilizersprod[i] !== undefined && this.rangeChangedDatafertilizersprod[i][0] === max) {
          this.rangeChangedDatafertilizersprod.splice(i,this.rangeChangedDatafertilizersprod.length - 1);
        }
      }


      this.setState({
        changedDataagriculture: this.rangeChangedDataagriculture,
        changedDatafertilizers: this.rangeChangedDatafertilizers,
        changedDatafertilizersprod: this.rangeChangedDatafertilizersprod,
    
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
              <option value="USA" defaultChecked> USA </option>
              <option value="India"> China </option>
              <option value="China"> India </option>
              
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
              <Chart id ='contribution' class="agriculture"
                     chartType="LineChart"
                     width="100%"
                     height="280px"
                     data={this.state.changedDataagriculture}
                     options={optionsagriculture}
              /></div>
        ) : selectedOpt === 2 ? (
            <div>
              <Chart id ='contribution' class="agriculture"
                     chartType="LineChart"
                     width="100%"
                     height="280px"
                     data={this.state.changedDataagriculture}
                     options={optionsagriculture}
              />
              <Chart id ='fertilizer' class="agriculture"
                     chartType="LineChart"
                     width="100%"
                     height="280px"
                     data={this.state.changedDatafertilizers}
                     options={optionsfertilizers}
              />
            </div>

        ) : selectedOpt === 3 ? (
            <div>
              <Chart id ='contribution' class="agriculture"
                     chartType="LineChart"
                     width="100%"
                     height="280px"
                     data={this.state.changedDataagriculture}
                     options={optionsagriculture}
              />
              <Chart id ='fertilizer' class="agriculture"
                     chartType="LineChart"
                     width="100%"
                     height="280px"
                     data={this.state.changedDatafertilizers}
                     options={optionsfertilizers}
              />
              <Chart id ='fertilizerprod' class="agriculture"
                     chartType="LineChart"
                     width="100%"
                     height="280px"
                     data={this.state.changedDatafertilizersprod}
                     options={optionsfertilizersprod}
              />
            </div>
        ) : (
            <p>No conditions are true</p>
        )}

      </div>
      
    )
  }
}
         
 export default Agriculture;