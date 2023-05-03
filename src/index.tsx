import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss'
import App from './App';
import Container from './components/layout/Container/Container';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
  </Router>
);


