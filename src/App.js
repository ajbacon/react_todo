import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out rubbish',
        completed: false
      },
      {
        id: 2,
        title: 'dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'meeting with boss',
        completed: false
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
