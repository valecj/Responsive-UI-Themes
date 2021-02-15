import React from 'react'
import App from './App';
import Home from './views/home'
import Hero from './views/hero'

import { BrowserRouter as Router , Route } from 'react-router-dom';
import KanbanBoard from './views/taskManagement';


const Routes = () => (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/kanban" component={KanbanBoard} />
      <Route path="/hero" component={Hero} />
    </App>
  </Router>
)

export default Routes;