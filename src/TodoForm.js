import React from 'react';
import jQuery from 'jquery';
import CheckboxExampleSimple from './styles/CheckboxExampleSimple';
import Checkbox from 'material-ui/Checkbox';

class TodoForm extends React.Component {
  constructor() {
    super();
  }

  createTodo(event) {
    event.preventDefault();

    let component = this;
    let title = this.refs.newTodoInput.value;


    let newTodo = {
      id: null,
      title: title,
      completed: false
    };

    jQuery.ajax({
      type: "POST",
      url: `https://stormy-eyrie-25961.herokuapp.com/todos.json`,
      data: JSON.stringify({
          todo: newTodo
      }),
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        component.props.onChange();
        component.refs.newTodoInput.value = "";
      })

      .fail(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="well">
        <form onSubmit={this.createTodo.bind(this)}>
          <div className="row">
            <div className="form-group col-xs-10">
              <input type="text" className="form-control" ref="newTodoInput" placeholder="What's today's task???" />
            </div>
            <div className="form-group col-xs-2">
              <button type="submit" className="btn btn-primary">Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
