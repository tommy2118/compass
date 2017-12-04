import React from 'react';
import CategorySelector from './CategorySelector';

class TaskForm extends React.Component {
  constructor(props) {
  super(props);
    this.state = {title: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  };

  resetState() {
    this.setState({ title: "",
      value: '',
    });
  }

  handleChange(event) {
    this.setState({title: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Task created Successfully.');
    this.resetState();
  }

  render() {
    const categories = this.props.categories;
    let message = this.state.title;
    return (
      <div className="w-full max-w-xs">
        <form onSubmit={this.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="task_title">
              Title
            </label>
            <input type="text"
              name="task_title"
              id="task_title"
              value={this.state.title}
              onChange={this.handleChange.bind(this)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
          <div>
            <CategorySelector options={categories} title={this.state.title} value="" />
          </div>
          <input type="submit" value="Create Task"
            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 mt-4 rounded"/>
        </form>
        { message &&
            <div className="bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3" role="alert">
        <p className="font-bold">Informational message</p>
        <p className="text-sm">Titles are important!  Choose yours well.</p>
      </div>}
      </div>
    );
  }
}

export default TaskForm
