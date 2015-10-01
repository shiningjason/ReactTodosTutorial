import React from 'react';

export default (store) => {
  if (__DEVTOOLS__) {
    var { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );

  } else {
    return undefined;
  }
};
