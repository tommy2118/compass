import React from 'react';

class CategorySelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSelectedOptionChange(event.target.value);
  }
  render() {
    const { options } = this.props;
    return (
      <div className="form-group">
        <label className="col-form-label">{this.props.label}</label>
        <select className="form-control"
          id="category"
          name="task[category]"
          value={this.props.selectedOption}
          onChange={this.handleChange}
          className="form-control"
        >
          <option>Please select a category</option>
          {Object.keys(options).map((value, index) => {
            return <option id={index} key={value} value={value}>
              {value}
            </option>
          })}
        </select>
      </div>
    )
  }
}

export default CategorySelector
