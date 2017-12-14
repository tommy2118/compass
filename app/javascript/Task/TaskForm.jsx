import React from 'react';
import CategorySelector from './CategorySelector';

class TaskForm extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      title: '',
      description: '',
      selectedOption: '',
      taskList: [],
      categories: this.props.categories,
      tasks: this.props.tasks,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSelectedOptionChange= this.handleSelectedOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  };

  resetState() {
    this.setState({ title: '',
      value: '',
      description: '',
    });
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value})
  }

  handleSelectedOptionChange(option) {
    this.setState({selectedOption: option})
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.taskList.push({
      title: this.state.title,
      description: this.state.description,
    });
    $.ajax({
      url: "/tasks",
      dataType: 'json',
      type: 'POST',
      data: {
        task: {
          category: this.state.selectedOption,
          title: this.state.title,
          description: this.state.description,
        },
      },
      success: (res) => {
        const newTasksList = this.state.tasks;
        newTasksList.push(res);
        console.log("value: ", this.state.selectedOption);
        this.setState({
          tasks: newTasksList,
          title: '',
          selectedOption: '',
          description: '',
          errors: {},
        });
      },
      error: (res) => {
        this.setState({ errors: res.responseJSON.errors });
      },
    });
  }

  render() {
    const { categories, tasks } = this.state;

    function DefinitionTerm(props) {
      return <dt>{props.value}</dt>
    }

    function DefinitionDescription(props) {
      return <dd>Description: {props.value}</dd>
    }
    const tasksAll = tasks.map((task, index) =>
      <React.Fragment key={index}>
        <p>Category: {task.category}</p>
        <DefinitionTerm value={task.title} />
        <DefinitionDescription value={task.description} />
      </React.Fragment>
    );

    return (
      <div className="">
        <form onSubmit={this.handleSubmit} className="">
          <div className="mt-2">
            <CategorySelector options={categories} selectedOption={this.state.selectedOption} onSelectedOptionChange={this.handleSelectedOptionChange} label="Main Category"/>
            <div className="form-group">
              <label className="col-form-label"
                htmlFor="task_title">
                Title
              </label>
              <input type="text"
                name="task_title"
                id="task_title"
                value={this.state.title}
                onChange={this.handleTitleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">
                Description
              </label>
              <textarea rows="4" className="form-control"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </div>
          </div>
          <button type="submit"
            className="btn btn-primary"
          >Create Task
          </button>
        </form>
        <div className="mt-4">
          <h3 className="border border-top-0 border-right-0 border-left-0">Task List</h3>
          <dl>
            {tasksAll}
          </dl>
        </div>
      </div>
    );
  }
}

export default TaskForm
