 import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Index from './components/index.component';
import Home from './components/home.component';
import Invoicelist from './components/invoicelist.component';
import CreateInvoice from './components/createinvoice.component';
import fundRequestList from './components/fundrequestlist.component.js';
import CreateFundRequest from './components/createfundrequest.component.js';
import approveRequest from  './components/approverequest.com.js';

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
                  <Link to={'/invoicelist'} className="nav-link">Estimation List</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/fundrequestlist'} className="nav-link">Fund Request List</Link>
                </li>

                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Report</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          
          
          <Switch>

              <Route exact path='/invoicelist' component={ Invoicelist } />
              <Route path='/index' component={ Index } />
              <Route path='/create' component={ CreateInvoice } />
              <Route path='/fundrequestlist' component={ fundRequestList } />
              <Route path='/fundrequestcreate' component={ CreateFundRequest } />
              <Route path='/approverequest/:id' component={ approveRequest } />
              
              <Route path='/' component={ Home } />
          </Switch>
      
        </div>
      </Router>

    );
  }
}

export default App;
