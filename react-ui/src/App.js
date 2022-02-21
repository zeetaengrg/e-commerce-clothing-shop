import { Home, About, Cart, ProductList, SingleProduct } from "./pages";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/products" element={<ProductList />} /> */}
                    {/* <Route path="/product/:id" element={<SingleProduct />} /> */}
                    {/* <Route path="/cart" element={<Cart />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
