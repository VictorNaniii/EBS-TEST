import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './HeaderStyle.css'
import { useCart } from '../CartComponets/CartContext'

function Header() {
  const { cart } = useCart()
  const cartItemCount = cart.reduce((acc, product) => acc + product.quantity, 0)

  return (
    <header className="HeaderComponents">
      <div>EBS-Task</div>

      <Link to="/cart" className="cart-link">
        <FaShoppingCart className="ShoppingCart" />
        {cartItemCount > 0 && (
          <span className="cart-item-count">{cartItemCount}</span>
        )}{' '}
      </Link>
    </header>
  )
}

export default Header
