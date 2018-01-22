import React, { Component } from 'react';
import TodoList from './Components/TodoList';

class App extends Component {
  state = {
    values : [],
    text : ''
  }

  handleChange=(event) =>{
    this.setState({text: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      values: prevState.values.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div>
        <TodoList values={this.state.values} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default App;
