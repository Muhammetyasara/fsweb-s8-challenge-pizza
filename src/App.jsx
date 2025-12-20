import { Switch, Route } from "react-router-dom";
import OrderForm from "./pages/OrderForm";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Anasayfa</h1>
      </Route>

      <Route path="/order">
        <OrderForm />
      </Route>
    </Switch>
  );
}

export default App;
