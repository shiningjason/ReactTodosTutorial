import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    const { content, completed, onToggle } = this.props;
    return (
      <div style={styles.container}>
        <input
          type="checkbox"
          style={styles.checkbox}
          checked={completed}
          onChange={onToggle} />
        <label
          style={Object.assign({}, styles.content, completed && styles.completed)}>
          {content}
        </label>
      </div>
    );
  }
}

TodoItem.propTypes = {
  content: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func.isRequired
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 21
  },
  checkbox: {
    marginRight: 16,
    marginLeft: 16
  },
  content: {
    color: 'rgba(0,0,0,0.87)'
  },
  completed: {
    fontStyle: 'italic',
    fontWeight: 'lighter',
    color: 'rgba(0,0,0,0.54)',
    textDecoration: 'line-through'
  }
};
