import React from 'react';

import { Route, Switch } from "react-router-dom";
import { Navigation } from "./components"

import {
  Home,
  TeamLookup,
  TeamYearLookup,
  TeamView,
  TeamCompare,
  Hypothetical,
}
from "./components/Containers";
import styles from "./App.module.css"

const App = () => {
  return (
    <div>
      <Navigation className={styles.nav}/>
      <Switch className={styles.body}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/teams">
          <TeamLookup />
        </Route>
        <Route exact path="/years">
          <TeamYearLookup />
        </Route>
        <Route path="/teams/:team">
         <TeamView />
        </Route>
        <Route path="/compare">
          <TeamCompare />
        </Route>
        <Route path="/predict">
          <Hypothetical />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
