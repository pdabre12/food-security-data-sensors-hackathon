import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Imports from './pages/ImportData'
import Import1 from './pages/EgyptRice2018'
import Import2 from './pages/EgyptRice2019'
import Import3 from './pages/EgyptRice2020'
import Import4 from './pages/EgyptWheat2018'
import Import5 from './pages/EgyptWheat2019'
import Import6 from './pages/EgyptWheat2020'
import Import7 from './pages/SARice2018'
import Import8 from './pages/SARice2019'
import Import9 from './pages/SARice2020'
import Import10 from './pages/SAWheat2018'
import Import11 from './pages/SAWheat2019'
import Import12 from './pages/SAWheat2020'
import WalnutsIron from './pages/WalnutsIron'
import Agriculture from './pages/Agriculture'
import MacroEco from './pages/MacroEco'
import Debt from './pages/Debt'
import CropsBanana from './pages/maps/mapBanana'
import Gdp from './pages/MacroEcoGdp';
import Inflow from './pages/MacroEcoInflow'
import Outflow from './pages/MacroEcoOutFlow'
import WalnutsIronYields from "./pages/WalnutsIronYields";
import CropsMango from './pages/maps/mapMango';
import CropsWalnut from './pages/maps/mapWalnut';
import SensorData from './pages/SensorData'
import SensorDataCattleTemperature from './pages/SensorDataCattleTemperature'
import SensorDataCattleHumidity  from './pages/SensorDataInternalSensorHumidity'
import SensorDataInternalSensorHumidity from './pages/SensorDataInternalSensorHumidity'
import SensorDataInternalSensorTemperature from './pages/SensorDataInternalSensorTemperature'

// This is the main routing for the application
class MainRouter extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Agriculture' component={Agriculture}/>
          <Route exact path='/MacroEco' component={MacroEco}/>
          <Route exact path='/Debt' component={Debt}/>
          <Route path='/MacroEco/Gdp' component={Gdp} />
          <Route path='/MacroEco/Inflow' component={Inflow} />
          <Route path='/MacroEco/Outflow' component={Outflow} />
          <Route exact path='/import' component={Imports}/>
          <Route exact path='/EgyptRice2018' component={Import1}/>
          <Route exact path='/EgyptRice2019' component={Import2}/>
          <Route exact path='/EgyptRice2020' component={Import3}/>
          <Route exact path='/EgyptWheat2018' component={Import4}/>
          <Route exact path='/EgyptWheat2019' component={Import5}/>
          <Route exact path='/EgyptWheat2020' component={Import6}/>
          <Route exact path='/SARice2018' component={Import7}/>
          <Route exact path='/SARice2019' component={Import8}/>
          <Route exact path='/SARice2020' component={Import9}/>
          <Route exact path='/SAWheat2018' component={Import10}/>
          <Route exact path='/SAWheat2019' component={Import11}/>
          <Route exact path='/SAWheat2020' component={Import12}/>
          <Route exact path='/WalnutsIronYields' component={WalnutsIronYields}/>
          <Route exact path='/sensors' component={SensorData}/>
          <Route exact path='/sensors/cattletemp' component={SensorDataCattleTemperature}/>
          <Route exact path='/sensors/cattlehum' component={SensorDataCattleHumidity}/>
          <Route exact path='/sensors/inttemp' component={SensorDataInternalSensorTemperature}/>
          <Route exact path='/sensors/inthum' component={SensorDataInternalSensorHumidity}/>

          <Route exact path='/crops-banana' component={CropsBanana} />
          <Route exact path='/crops-mango' component={CropsMango} />
              <Route exact path='/crops-walnut' component={CropsWalnut} />
          {/*<Route exact path='/predict' component={Predict}/>*/}
        </Switch>
      </main>
    )
  }
}

export default MainRouter


