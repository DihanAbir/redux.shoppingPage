import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./containers/Header";
import Products from "./containers/Products";
import ProductsDetails from "./containers/ProductsDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/product/:productID" exact component={ProductsDetails} />
          <Route>404 Page ERROR!!</Route>
        </Switch>
      </Router>
      <hr />
    </div>
  );
}

export default App;
