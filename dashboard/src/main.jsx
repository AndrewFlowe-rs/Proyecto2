import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './assets/css/app.css';
import { ProviderRouter } from './routes/routesProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderRouter/>
  </React.StrictMode>,
)
