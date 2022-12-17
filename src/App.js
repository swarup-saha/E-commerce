import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Success from "./components/payment/Success";

// import Payment from "./components/payment/Payment";
function App() {
  const user = true;
  // const UserProvides = useContext(UserContext)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          exact
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
