import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import Create from  './components/create.component';
import Edit from  './components/edit.component';
import Index from './components/index.component';
import Home from './components/home.component';
import Invoicelist from './components/invoicelist.component';



class App extends Component {
  render() {
    return (
       <Router>
        <div className="container">
        
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Cashflow Management</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/invoicelist'} className="nav-link">Invoice List</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Report</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          
          
          <h2>Pratama CashFlow Management</h2> <br/>
          <Switch>
              <Route exact path='/invoicelist' component={ Invoicelist } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route path='/' component={ Home } />
          </Switch>
      
        </div>
      </Router>

    );
  }
}

export default App;
