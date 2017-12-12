import React from 'react';
import TaskForm from './TaskForm';

class TaskNew extends React.Component {
  constructor(props) {
  super(props);
  };

  render() {
    return (
      <div>
        <h1>New Task</h1>
        <TaskForm categories={ this.props.categories }/>
    </div>
    );
  }
}

export default TaskNew
