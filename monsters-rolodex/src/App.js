import { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '9281iub191'
        },
        {
          name: 'Frank',
          id: '90189812hjbh1b'
        },
        {
          name: 'Jacky',
          id: '91812jb12ih12'
        },
        {
          name: 'Andrei',
          id: '1u7b88ahbhu1'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
      </div>
    )
  }
}

export default App
