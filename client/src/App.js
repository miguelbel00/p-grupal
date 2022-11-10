
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Home from './Pages/home'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home}/>
        <Route exact path='/register'><Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
