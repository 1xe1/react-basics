import React, { Component } from 'react'
import logo from './assets/react.svg'
export default class App extends Component {
  state = {
    count:0
  }
  render() {
    return (
      <div className="flex flex-col justify-center items-center gap-y-6 h-screen">
        <img src={logo} className='w-40 cursor-pointer' alt='react logo' onClick={()=>this.setState({count:0})} />
        <button type='button' className='block text-lg text-yellow-50 bg-[#00d8fd] p-3 rounded-lg hover:bg-black' onClick={()=>this.setState({ count: this.state.count +1})}>Count is: {this.state.count}</button>
      </div>
    )
  }
}
