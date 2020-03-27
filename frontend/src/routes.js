import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon'; // n precisa do /index, pq ele ja procura autom.
import Register from './pages/Register'; 
import Profile from './pages/Profile'; 
import NewIncident from './pages/NewIncident'; 

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} /> {/* exact = o caminho precisa ser idêntico */}
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}