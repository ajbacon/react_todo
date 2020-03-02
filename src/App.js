import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'take out rubbish',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'dinner with wife',
        completed: false
      },
      {
        id: uuidv4(),
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

  addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
