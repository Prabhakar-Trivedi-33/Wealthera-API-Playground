import React from 'react';

const AuthContext = React.createContext({
  authToken: '',
  setAuthToken: () => {}
});

export default AuthContext;
