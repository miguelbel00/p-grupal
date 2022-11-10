import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Detail from "./Pages/Detail";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path={"/detail"} component={Detail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
