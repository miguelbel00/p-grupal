
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Home from './Pages/home'
import Navbar from './componets/NavBar'
import Footer from './componets/Footer.jsx'


function App() {
  return (
    <BrowserRouter>
      <Route path='/'>
        <Navbar/>
      </Route>
      <Switch>
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
