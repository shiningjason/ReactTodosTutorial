import React from 'react';

export default class Input extends React.Component {
  render() {
    return (
      <input type="text" style={styles.textField} />
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
