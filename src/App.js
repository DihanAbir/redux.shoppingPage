import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./containers/Header";
import Products from "./containers/Products";
import ProductsDetails from "./containers/ProductsDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:productID" exact component={ProductsDetails} />
          <Route>404 Page ERROR!!</Route>
        </Switch>
      </Router>
      <hr />
    </div>
  );
}

export default App;
