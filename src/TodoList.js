import React from 'react';
import jQuery from 'jquery';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {id: 0, title: "", done: false }
      ],
      counts: {
        todo: 0,
        done: 0
      }
    };
  }

  reloadTodos(event) {
    let component = this;

    jQuery.getJSON(`https://stormy-eyrie-25961.herokuapp.com/todos.json`, function(data) {
      console.log(data);

      component.setState({
        todos: data
      });

      component.reCount();
    });
  }

  reCount() {
    let component = this;

    this.setState({
      counts: {
        todo: component.todosTodo().length,
        done: component.todosDone().length
      }
    });
  }

  todosTodo() {
    return this.state.todos.filter(function(todo, i) {
      return todo.completed !== true;
    });
  }

  todosDone() {
    return this.state.todos.filter(function(todo, i) {
      return todo.completed === true;
    });
  }

  componentDidMount() {
    this.reloadTodos();
  }

  render() {
    return (
      <div className="todo-list">
        <TodoForm onChange={this.reloadTodos.bind(this)} />
        <ul>
          {this.state.todos.map(function(todo, i) {
            return(
              <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}  createdAt={todo.created_at} updatedAt={todo.updated_at} onDestroy={this.reloadTodos.bind(this)} onChange={this.reloadTodos.bind(this)} />
            );
          }, this)}
        </ul>
        <div className="meta">
          <p>
            {this.state.todos.length} total • {this.state.counts.todo} left • {this.state.counts.done} done
          </p>
        </div>
      </div>
    );
  }
}

export default TodoList;
