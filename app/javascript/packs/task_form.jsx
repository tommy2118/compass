import React from 'react';
import ReactDOM from 'react-dom';
import TaskForm from '../TaskForm';

document.addEventListener('turbolinks:load', () => {
  const element = document.getElementById('task-form-component');
  const node = document.getElementById('categories_data');
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(<TaskForm categories={data} />, element);
});
