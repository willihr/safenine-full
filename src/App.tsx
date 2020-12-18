import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import DashboardGlobalStyle from './styles/dashboardGlobal';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <ToastContainer />
    <DashboardGlobalStyle />
  </>
);

export default App;
