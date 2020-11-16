import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import mountain from './components/mountain';
import birds from './components/birds';
import beaches from './components/beaches';
import food from './components/food';
import Nav from './components/nav';


function Notfound(){
  return(
    <div>
      <p>Not found</p>
    </div>
  )
}


function OpenRequest(){
let windows = window.location;
window.location = "http://localhost:3000/birds"
return(
  <div>
    {windows}
  </div>
)
}


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path='/' component={OpenRequest}/>
          <Route path='/birds' component={birds}/>
          <Route exact path='/mountain' component={mountain}/>
          <Route exact path='/beaches' component={beaches}/>
          <Route exact path='/food' component={food}/>
          <Route component={Notfound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
// https://api.unsplash.com/search/photosoH4qQpdTtDm8gCKO_7pC6zmaAV2LVjBwGErUms3MWD0