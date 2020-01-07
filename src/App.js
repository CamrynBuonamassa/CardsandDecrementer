import React, {Component} from 'react';
import './App.css';
import Card from './card.js'
import CardStyle from './style.css';
import Decrement from './decrement.js'

class App extends Component {
  render(){
    return<div>
      <Card name="Naveed Naqi" email="Naveed.Naqi30@myhunter.cuny.edu" mphone="123-456-7890" />
      <Card name="Camryn Buonamassa" email="Camryn.Buonamassa60@myhunter.cuny.edu" mphone="516-510-5692" />
      <Card name="Caitlin Selca" email="Caitlin.Selca11@myhunter.cuny.edu" mphone="516-797-9779" />
      <Decrement startNum={5}/>
    </div>
  }
}

export default App;
