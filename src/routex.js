import React from 'react'
import App from './App';
import Home from './views/home'

import { BrowserRouter as Router , Route } from 'react-router-dom';
import KanbanBoard from './views/taskManagement';
import CustomerManagement from './views/customerManagement'


const Routes = () => (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/kanban" component={KanbanBoard} />
      <Route path="/customer" component={CustomerManagement} />
    </App>
  </Router>
)

export default Routes;