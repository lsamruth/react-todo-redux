import React, { Component, Fragment } from "react";
import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Table
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTodos, deleteTodo, addTodo, markAsDone } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      id: "",
      status: "OPEN"
    };
    this.delete = this.delete.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.markAsDone = this.markAsDone.bind(this);
  }

  componentDidMount() {
    this.props.get();
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      status: "OPEN",
      id: this.props.todos.length + 1
    });
  }
  delete(id) {
    this.props.delete(this.props.todos, id);
  }
  addTodo() {
    this.props.add(this.props.todos, this.state);
  }
  markAsDone(id) {
    this.props.markAsDone(this.props.todos, id);
  }
  render() {
    return (
      <Fragment>
        <Container>
          <h1>Todo App</h1>
          <Form inline>
            <FormGroup className="mb-2 mr-sm-6 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">
                Add Todo
              </Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="task"
                id="task"
                placeholder="task name"
              />
            </FormGroup>
            <Button color="success" type="button" onClick={this.addTodo}>
              Add
            </Button>
          </Form>
          <br />
          {this.props.todos.length > 0 ? (
            <Table responsive striped>
              <thead>
                <tr>
                  <th>id</th>
                  <th>task</th>
                  <th>status</th>
                  <th>Delete</th>
                  <th>Mark As Done</th>
                </tr>
              </thead>
              <tbody>
                {this.props.todos.map(i => {
                  return (
                    <tr
                      key={i.id}
                      style={{
                        backgroundColor: i.status === "DONE" ? "#92a8d1" : ""
                      }}
                    >
                      <td>{i.id}</td>
                      <td>{i.task}</td>
                      <td>{i.status}</td>
                      <td>
                        <Button
                          color="danger"
                          onClick={() => this.delete(i.id)}
                        >
                          X
                        </Button>
                      </td>
                      <td>
                        <Button
                          color="success"
                          onClick={() => this.markAsDone(i.id)}
                        >
                          ✔
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <Alert color="info">No Todo's found</Alert>
          )}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  };
};

const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      get: getTodos,
      delete: deleteTodo,
      add: addTodo,
      markAsDone: markAsDone
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
