import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/about" component={About}/>
          <Route path = "/shop" exact component={Shop}/>
          <Route path = "/shop/:id" component={ItemDetail}/>
        </switch>
      </div>
    </Router>
  );
}

const Home  = () =>(
  <div>
    <h1>
      Home Page
    </h1>
  </div>
);
