import React from 'react';

const ENTER_KEY = 13;

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case ENTER_KEY:
        this.handleEnter(event);
        break;
    }
  }

  handleEnter(event) {
    event.preventDefault();

    const { onSubmitEditing } = this.props;
    if (onSubmitEditing) {
      onSubmitEditing(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <input
        type="text"
        style={styles.textField}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)}/>
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
