import "./App.css"
import Header from "./Components/common/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Components/Home/Home";



function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
        <Route exact path='/' component={Home} />
        
        </Switch>
      </Router>
    </>
  );
}

export default App;
