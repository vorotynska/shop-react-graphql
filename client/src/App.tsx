import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductPage from "./pages/product"
import ProductList from "./pages/products"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
