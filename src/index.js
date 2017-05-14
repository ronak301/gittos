import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const App = () => (
  <div >
    <div>
      <h2>Welcome to React</h2>
    </div>
    <p >
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
