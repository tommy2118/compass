import React from 'react';
import ReactDOM from 'react-dom';
import TaskNew from '../Task/TaskNew';

document.addEventListener('turbolinks:load', () => {
  const element = document.getElementById('task-new-component');
  const node = document.getElementById('categories_data');
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(<TaskNew categories={data} />, element);
});
