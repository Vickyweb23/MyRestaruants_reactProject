import React from 'react'
import './App.css';
import Resturent from './resturent'
import NavScrollExample from './navbar1'
import Carsole from './carsole'
import Card from './card'
import  Chefcard from './chefcard'
import Fotter from './fotter'
import Lastfotter from './lastfotter'
import ControlledCarousel from './carsole'
import 'bootstrap/dist/css/bootstrap.min.css';
import Api from  './api'
function App() {
  return (
    <div className="App">
<Api/>
      <NavScrollExample/>
<Resturent/>
<Carsole/>
<Card/>
<Chefcard/>
<Fotter/>
<Lastfotter/> 
 <ControlledCarousel/>
 <Api/>
          </div>  
  );                                                           
}

export default App;                   
