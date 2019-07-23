import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';


export default class TodoApp extends React.Component {

  constructor(props) {
      super(props);
      this.checkBoxes = []
      this.state = {
          checkBoxes: this.checkBoxes
      };
    }

    handleChange = name => event => {
      this.setState({ ...this.state, [name]: event.target.checked });
    };

  render() {
    const items = [];
    for (const [index, value] of this.checkBoxes.entries()) {
      items.push(<li key={index}>{value}</li>)
    }
    return (
      <div>
        <Checkbox
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          value="checkedA"
          inputProps={{
            'aria-label': 'primary checkbox',
          }}
        />
      </div>
    );
  }
}
