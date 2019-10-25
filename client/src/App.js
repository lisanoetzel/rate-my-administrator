import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/homeComponent";
import About from "./components/aboutComponent";
import Survey from "./components/surveyComponent";


class App extends Component {
  render() {
    return (
      <Router>
         <div className="container">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">Home</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                  <Link to="/about" className="nav-link">About </Link>
                  </li>
                  <li className="nav-item active">
                  <Link to="/survey" className="nav-link">Survey</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <h2>Welcome to Rate My Administrator!</h2>
        </div>

        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/survey" exact component={Survey}/>
      </Router>
     
    );
  }
}
export default App;
