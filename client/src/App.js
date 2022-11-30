import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Detail from "./Pages/Detail";
import Footer from "./componets/Footer";
import Navbar from "./componets/NavBar";
import Home from './Pages/home'
import Products from './Pages/Products'
import ShoppingCart from "./Pages/ShoppingCart"
import Profile from "./componets/Profile";
import ProteccionRoutes from "./componets/proteccionRoutes";
import { useSelector } from "react-redux";
import CreateProduct from "./Pages/CreateProduct";
import CreateCategory from "./Pages/CreateCategory";
import CreateUser from "./Pages/CreateUser";
import AdminPage from "./AdminPage/Admin";
import EditProfile from "./componets/EditProfile";
import EditUser from "./Pages/EditUser";
import EditProduct from "./Pages/EditProduct";
import EditTrasnsaction from "./Pages/EditTransaction";

function App() {
  const user = useSelector(state => state.petitionsReducer.user)


  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path={"/profile"} component={Profile} /> 
        <Route exact path={"/detail/:productId"} component={Detail}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/shoppingcart' component={ShoppingCart}/>
        <Route exact path={'/editProfile/:userId'} component={EditProfile}/>

        <Route exact path='/admin' component={AdminPage}>

          <ProteccionRoutes user={user}>
           <AdminPage/>
          </ProteccionRoutes>
        </Route>
        <Route exact path='/admin/createproduct' component={CreateProduct}>
          <ProteccionRoutes user={user}>
           <CreateProduct/>
          </ProteccionRoutes>
        </Route>
        <Route exact path='/admin/createcategory' component={CreateCategory}>
          <ProteccionRoutes user={user}>
           <CreateCategory/>
          </ProteccionRoutes>
        </Route>
        <Route exact path='/admin/createuser' component={CreateUser}>
          <ProteccionRoutes user={user}>
           <CreateUser/>
          </ProteccionRoutes>
        </Route>
        <Route exact path='/admin/edituser/:userId' component={EditUser}>
          <ProteccionRoutes user={user}>
           <EditUser/>
          </ProteccionRoutes>
        </Route>
        <Route exact path='/admin/editproduct/:productId' component={EditProduct}>
          <ProteccionRoutes user={user}>
           <EditProduct/>
          </ProteccionRoutes>
        </Route>
        <Route exact path='/admin/editTransaction/:transactionId' component={EditTrasnsaction}>
          <ProteccionRoutes user={user}>
           <EditTrasnsaction/>
          </ProteccionRoutes>
        </Route>
      </Switch>
      <Footer/>  
    </BrowserRouter>
  );
}

export default App;
