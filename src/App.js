import React from 'react';
import Interfaces from "./pages/Interfaces";
import Rutas from "./pages/Rutas"
import Home from "./pages/Home"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App=()=> {
return (
  <Router>
    {/* <Header /> */}
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/interfaces" component={Interfaces} />
        <Route path="/rutas" component={Rutas} />
      </Switch>
    </div>
    
  </Router>
);
}
export default App;
