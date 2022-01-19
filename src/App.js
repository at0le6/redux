import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './containers/header'
import ProductsListing from './containers/productsListing';
import ProductsDetails from "./containers/productDetails"

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductsListing/>}/>
          <Route path="/product/:id" element={<ProductsDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
