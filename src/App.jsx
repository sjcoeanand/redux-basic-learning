import { Routes, Route } from 'react-router-dom'
import Product from './component/Product'
import Cart from './component/Cart'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
