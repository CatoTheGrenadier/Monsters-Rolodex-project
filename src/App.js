import { Component } from 'react'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[
      {
        name:'Marcus Porcius Cato Uticensis',
        id:'12335'
      },
      {
        name:'Lucius Caecilius Metellus',
        id:'kjafnbak'
      },
      {
        name:'Titus Quinctius Flaminius',
        id:'haif'
      },
      {
        name:'Nero Claudius Drusus Germanicus',
        id:'iafafa'
      }
    ]
    };
  }


  render(){
    return (
      <div className="App">
          {
            this.state.monsters.map((monster) => {
              return (
              <div key={monster.id}>
                <h1>{ monster.name }</h1>
              </div>
            );
            })
          }
      </div>
    );
  }
}

export default App;
