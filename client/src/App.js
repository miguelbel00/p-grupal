
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Detail from "./Pages/Detail";
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
        <Route exact path={"/detail"} component={Detail}/>
      </Switch>
      <Route path="/"> 
          <Footer/>  
        </Route>
    </BrowserRouter>
  );
}

export default App;
