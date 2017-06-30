//var React = require('react');
import React from 'react';

//var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" value = "task" />
        <button type="button"> Submit </button>
      </div>
    )
  }
}

class Todo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
        <li> <button type="button"> X </button> {"   "}{this.props.task} </li>
    )
  }
}


class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h3> ToDo List</h3>
        <ul>
          {this.props.dummyData.map((task) => <Todo task={task} />)}
        </ul>
      </div>
    )
  }
}

class ToDoApp extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <InputLine />
        <ToDoList dummyData = {this.props.dummyData}/>
      </div>
    )
  }
}
var dummyData = ["Amy: everyone is Chinese", "speaker at 4", "Jeremy come on!!" ];

ReactDOM.render(<ToDoApp dummyData={dummyData} />,
  document.getElementById('root'));

//console.log('app.js ran!!');

//ReactDOM.render(<App />, document.getElementById('root'));

// {arrayInput.map((number, i) => (<li className = {this.color(number)} key = {i} > {number} </li>))}

//ReactDOM.render(<FizzBuzz n={20}/>, document.getElementById('out'));
