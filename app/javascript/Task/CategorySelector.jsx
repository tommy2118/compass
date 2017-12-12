import React from 'react';

class CategorySelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }
  render() {
    const { options } = this.props;
    return (
      <div className="">
        <select className=""
          id="category"
          name="task[category]"
          value={this.state.value}
          onChange={this.handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        >
          <option>Please select a category</option>
          {Object.keys(options).map((value, index) => {
            return <option id={index} key={value} value={value}>
              {value}
            </option>
          })}
        </select>
        {this.state.value && this.props.title &&
            <p>Form is valid.  You may submit.</p>
        }
      </div>
    )
  }
}

export default CategorySelector
