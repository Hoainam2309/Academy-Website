import "./App.css"
import Header from "./Components/common/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Components/Home/Home";
import About from "./Components/About/About";



function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
