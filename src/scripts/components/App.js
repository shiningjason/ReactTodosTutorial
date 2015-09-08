import React from 'react';

export default class App extends React.Component {
  render() {
    var codeBlockStyle = { "fontFamily": "monospace",
                           "backgroundColor": "#D0D0D0" };
    return (
    <div>
      <header>
        <h1>ReactTodosTutorial</h1>
        <h3>A React/Flux app generate by RF, powered with Babel</h3>
      </header>
      <article className="context">
        <p>
          Greeting form <a href="https://github.com/taiansu/generator-rf">RF generator</a>.
        </p>

        <p>
          Remember you are powered with <a href="https://gaearon.github.io/react-hot-loader/">react-hot-loader</a> now. Edit this file in <span style={ codeBlockStyle }>src/scripts/components/App.js</span> and save it, it will auto reload the page for you.
        </p>
      </article>
    </div>
    );
  }
}
