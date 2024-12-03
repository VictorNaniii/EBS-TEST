import { FaShoppingCart } from 'react-icons/fa'
import './HeaderStyle.css'
function Header() {
  return (
    <header className="HeaderComponents">
      <div>EBS-Task</div>
      <FaShoppingCart className="ShoppingCart" />
    </header>
  )
}

export default Header
