import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    const { content, completed } = this.props;
    return (
      <div>
        <input type="checkbox" checked={completed} />
        <label>{content}</label>
      </div>
    );
  }
}

TodoItem.propTypes = {
  content: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired
};
