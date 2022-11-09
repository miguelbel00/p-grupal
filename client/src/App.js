import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Footer from "./componentes/Footer";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path="/"> 
          <Footer/>  
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
