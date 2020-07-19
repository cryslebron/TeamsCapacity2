import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
// import Sequelize from 'sequelize';

const store = configureStore();



// const sequelize = new Sequelize('database_name', 'user_name', 'password', {
//     host: 'host',
//     dialect: 'mssql',
//     encrypt: true,
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
// });

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });


ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'))