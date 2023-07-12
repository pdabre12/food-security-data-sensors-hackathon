import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.country ="";
    this.year = "";
    this.commodity ="";
  }

  submit() {
    var page = "";
    if(this.country ==="Egypt" && this.year === "2018" && this.commodity === "Rice"){
      page = "EgyptRice2018";
    } else if(this.country ==="Egypt" && this.year === "2019" && this.commodity === "Rice"){
      page = "EgyptRice2019";
    } else if(this.country ==="Egypt" && this.year === "2020" && this.commodity === "Rice"){
      page = "EgyptRice2020";
    } else if(this.country ==="Egypt" && this.year === "2018" && this.commodity === "Wheat"){
      page = "EgyptWheat2018";
    } else if(this.country ==="Egypt" && this.year === "2019" && this.commodity === "Wheat"){
      page = "EgyptWheat2019";
    } else if(this.country ==="Egypt" && this.year === "2020" && this.commodity === "Wheat"){
      page = "EgyptWheat2020";
    } else if(this.country ==="Saudi Arabia" && this.year === "2018" && this.commodity === "Rice"){
      page = "SARice2018";
    } else if(this.country ==="Saudi Arabia" && this.year === "2019" && this.commodity === "Rice"){
      page = "SARice2019";
    } else if(this.country ==="Saudi Arabia" && this.year === "2020" && this.commodity === "Rice"){
      page = "SARice2020";
    } else if(this.country ==="Saudi Arabia" && this.year === "2018" && this.commodity === "Wheat"){
      page = "SAWheat2018";
    } else if(this.country ==="Saudi Arabia" && this.year === "2019" && this.commodity === "Wheat"){
      page = "SAWheat2019";
    } else if(this.country ==="Saudi Arabia" && this.year === "2020" && this.commodity === "Wheat"){
      page = "SAWheat2020";
    } 
    this.props.history.push(page);
     
  }

  render() {
    return (
      <div>
          <label for="country-choice">Select Country: </label>
          <select name="country-choices" id="country-choices"
            onChange={(event) => {
                this.country=event.target.value;
                      }}>
              <option value=""></option>
              <option value="Egypt">Egypt</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
          </select>
          <label for="year-choice">Select Year: </label>
          <select name="year-choice" id="year-choice"
            onChange={(event) => {
                this.year=event.target.value;
                      }}>
              <option value=""></option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
          </select>

          <label for="commodity-choice">Select Commodity: </label>
          <select name="commodity-choice" id="commodity-choice"
            onChange={(event) => {
                this.commodity=event.target.value;
                      }}>
              <option value=""></option>
              <option value="Rice">Rice</option>
              <option value="Wheat">Wheat</option>
          </select>
          <br></br>
          <div class="row">
          <div class="col-3"></div>
          <div class="col-6"><button onClick={this.submit}>Submit</button></div>
          <div class="col-3"></div>
          </div>
           
        </div>
    )
  }
}
export default Home;

