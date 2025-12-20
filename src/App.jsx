import { Switch, Route } from "react-router-dom";
import OrderForm from "./pages/OrderForm";
import Home from "./pages/Home";
import Success from "./pages/Success";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/order">
        <OrderForm />
      </Route>

      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  );
}

export default App;
