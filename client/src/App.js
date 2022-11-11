
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Footer from "./componets/Footer";
import Carrusel from "./componets/Carrusel";
import Navbar from "./componets/NavBar";



function App() {
  return (
    <BrowserRouter>
      <Route path='/'>
        <Navbar/>
      </Route>
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
