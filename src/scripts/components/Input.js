import React from 'react';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        style={styles.textField}
        value={this.state.value}
        onChange={this.handleChange.bind(this)} />
    );
  }
}

const styles = {
  textField: {
    border: '1px solid rgba(0,0,0,0.12)',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 8,
    height: 32,
    fontSize: 15
  }
};
