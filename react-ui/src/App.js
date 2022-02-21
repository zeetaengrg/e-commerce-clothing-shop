import { Home, Cart, ProductList, SingleProduct } from "./pages";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="App">
                {/* <Home /> */}
                <ProductList />
                {/* <SingleProduct /> */}
                {/* <Cart /> */}
            </div>
        </Router>
    );
};

export default App;
