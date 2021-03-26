import React from 'react';
import { Provider } from 'react-redux';
import store  from './ducks';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Layout />
        </Router>
      </Provider>
    </React.StrictMode>
  )
}

export default App
