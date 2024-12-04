import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/HeaderComponents/Header'
import { CartProvider } from './components/CartComponets/CartContext'
import Content from './components/ContentCompontents/Content'
import CartPage from './components/CartComponets/CartPage'

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<h2>PAGE NOT FOUND</h2>} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
