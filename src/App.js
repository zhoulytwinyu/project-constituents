import React,{PureComponent} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Browse from "./pages/Browse";
import BrowseIndividual from "./pages/BrowseIndividual";
// Components
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
// CSS
import "./App.css";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <header className="app-container app-header">
          <div className="app-subcontainer">
            <NavigationBar />
          </div>
        </header>
        <div className="app-container">
          <div className="app-subcontainer">
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route path="/browse" component={Browse} />
          <Route path="/browse/:id" component={BrowseIndividual} />
          </div>
        </div>
        <footer className="app-container app-footer">
          <div className="app-subcontainer">
            <Footer />
          </div>
        </footer>
      </Router>
    );
  }
}

export default App;
