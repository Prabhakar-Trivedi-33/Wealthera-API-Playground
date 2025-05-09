import React, { useState } from 'react';
import './App.css';
import ApiPlayground from './components/ApiPlayground/ApiPlayground';
import AuthContext from './context/AuthContext';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('inwealthera_token') || '');

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      <div className="app-container">
        <header className="app-header">
          <h1>InWealthera API Playground</h1>
          {authToken ? (
            <button onClick={() => {
              setAuthToken('');
              localStorage.removeItem('inwealthera_token');
            }}>Logout</button>
          ) : (
            <button onClick={() => {
              const mockToken = 'mock_token_' + Math.random().toString(36).substr(2);
              setAuthToken(mockToken);
              localStorage.setItem('inwealthera_token', mockToken);
            }}>Login</button>
          )}
        </header>
        <main>
          <ApiPlayground />
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
