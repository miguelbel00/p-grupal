import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Home from './componentes/home'


function App() {
  return (
    <BrowserRouter>
        <Route exact path='/'/><Home/>
      <Switch>
        <Route exact path='/register'><Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
