import React, { Component } from 'react'
import {database} from './firebase'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      data: null,
      newData: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    console.log('componentDidMount')
    database.ref().on('value', (snapshot) => {
      console.log('Data updated ', snapshot.val())

      this.setState({
        data: snapshot.val()
      })
    })
  }

  handleChange (event) {
    const newData = event.target.value
    this.setState({
      newData: newData
    })
  }

  handleSubmit (event) {
    event.preventDefault()

    const newData = database.ref().child('AMAZING').set(this.state.newData)
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          { JSON.stringify(this.state.data, null, 2)}
        </p>

        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.newData} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default App
