
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Footer from "./componets/Footer";
import Carrusel from "./componets/Carrusel";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route path='/'>
          <Carrusel />
        </Route>
      </Switch>
      <Route path="/"> 
          <Footer/>  
        </Route>
    </BrowserRouter>
  );
}

export default App;
