
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Detail from "./Pages/Detail";
import Footer from "./componets/Footer";
import Navbar from "./componets/NavBar";
import Home from './Pages/home'



function App() {
  return (
    <BrowserRouter>
      <Route path='/'>
        <Navbar/>
      </Route>
      <Switch>
        <Route exact path={"/detail"} component={Detail}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register'><Register />
        </Route>
      </Switch>
      <Route path="/"> 
          <Footer/>  
        </Route>
    </BrowserRouter>
  );
}

export default App;
