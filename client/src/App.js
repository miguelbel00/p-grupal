
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/register'>
<Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
