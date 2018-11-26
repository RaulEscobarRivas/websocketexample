import React, { Component } from 'react';
import Table from './Table'
import './App.css';

class App extends Component {
  state = {
    tableData: []
  };

  componentDidMount() {
    const socket = new WebSocket('wss://dev.tlservers.com:8888/calls'); 

    socket.onmessage = (event) => {
      const message = event.data;
      this.setTableData(JSON.parse(message));
    };
  }

  setTableData = newData => {
    this.setState(({ tableData }) => ({ tableData: [newData, ...tableData] }))
  };

  render() {
    const { tableData } = this.state;

    return (
      <div className="App">
        <h1>Tourlane Test</h1>
        <Table data={tableData}/>
      </div>
    );
  }
}

export default App;
