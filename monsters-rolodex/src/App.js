import { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Yihua',
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Olá, {this.state.name}</p>
          <button
            onClick={() => {
              if (this.state.name === 'Yihua') {
                this.setState({ name: 'Andrei' })
              } else {
                this.setState({ name: 'Yihua' })
              }
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    )
  }
}

export default App
