import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './component/Header.jsx';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
            <div className="container">
              <Header/>
              <App />
            </div>
      </React.StrictMode>
  </BrowserRouter>
</Provider>
)
