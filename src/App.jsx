import React from 'react';
import Counter from './Pages/Counter';
import { AuthProvider } from './AuthProvider';
import { useRoutes } from 'react-router-dom';
import { routes } from './Routes';

import './index.css';

const App = () => {
  const routing = useRoutes(routes());

  return (
    <AuthProvider>
      {routing}
      <div className="container">
        <Counter />
      </div>
    </AuthProvider>
  );
};

export default App;
