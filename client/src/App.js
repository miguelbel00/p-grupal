import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Detail from "./Pages/Detail";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Home from './Pages/home';
import Products from './Pages/Products';
import CreateProduct from './components/CreateProduct';




function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path={"/detail/:productId"} component={Detail}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/create' component={CreateProduct}/>
      </Switch>
      <Footer/>  
    </BrowserRouter>
  );
}

export default App;
