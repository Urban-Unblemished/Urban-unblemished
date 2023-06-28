import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import './index.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
      <MantineProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </MantineProvider>
    </UserContextProvider>,
);
