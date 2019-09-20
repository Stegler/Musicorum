import React from 'react';
import StartPage from './pages/startPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
            <Route exact path='/' component={StartPage}></Route>
            {/* <Route exact path='#' component={}></Route>
            <Route exact path='#' component={}></Route>
            <Route exact path='#' component={}></Route>
            <Route exact path='#' component={}></Route> */}
      </Switch>

    </div>
    </Router>
  );
}

export default App;
