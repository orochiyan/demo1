import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createAppStore } from './store/index';
const store = createAppStore();
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect path="/" to="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <Dashboard />
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
