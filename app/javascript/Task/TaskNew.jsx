import React from 'react';
import TaskForm from './TaskForm';

class TaskNew extends React.Component {
  constructor(props) {
  super(props);
  };

  render() {
    return (
      <div className="m-4 pl-4">
        <h1>New Task</h1>
        <div className="row">
          <div className="col-sm-6">
            <TaskForm {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskNew
