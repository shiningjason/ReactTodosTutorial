import React from 'react';

export default class Header extends React.Component {
  render() {
    const { username, todoNumber } = this.props;
    return (
      <header>
        <h1>Todos</h1>
        <p>哈囉，{username}：您今天有 {todoNumber} 條代辦事項！</p>
      </header>
    );
  }
}

Header.propTypes = {
  username: React.PropTypes.string,
  todoNumber: React.PropTypes.number.isRequired
};

Header.defaultProps = {
  username: '路人甲'
};
