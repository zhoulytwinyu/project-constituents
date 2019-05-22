import React,{PureComponent} from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Browse from "./pages/Browse";
import BrowseIndividual from "./pages/BrowseIndividual";
import Calculate from "./pages/Calculate";
// Components
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
// CSS
import "./App.css";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <header className="app-header">
          <NavigationBar/>
        </header>
        <div className="my-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/browse" component={Browse} />
            <Route path="/browse/:id" component={BrowseIndividual} />
            <Route path="/calculate" component={Calculate} />
          </Switch>
        </div>
        <footer className="app-footer">
          <Footer />
        </footer>
      </Router>
    );
  }
}

export default App;
