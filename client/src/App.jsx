import { Home, About, Cart, Jeans, Jackets, Tshirts, Suits, SingleProduct } from "./pages";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/products/:category" element={<Jeans />} />
                    {/* <Route path="/products/:category" element={<Jackets />} /> */}
                    {/* <Route path="/products/:category" element={<Tshirts />} /> */}
                    {/* <Route path="/male/suits" element={<Suits />} /> */}
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
