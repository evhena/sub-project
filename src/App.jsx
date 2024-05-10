import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Pages/Counter';

import './index.css';

const App = () => (
  <div className="container">
    <div>Name: sub-project</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
