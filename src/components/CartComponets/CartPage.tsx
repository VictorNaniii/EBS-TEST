import { useCart } from './CartContext'
import './CartPageStyle.css'

function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()
  const total = cart.reduce((acc, product) => {
    return acc + parseFloat(product.price) * product.quantity
  }, 0)

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your shopping basket</h1>
      {cart.length === 0 ? (
        <p className="empty-basket">Basket is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <h3 className="product-title">{product.title}</h3>
              <span className="product-price">{product.price}</span>
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>
                <span className="product-quantity">{product.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(product.id)}
              >
                Delete
              </button>
            </div>
          ))}
          <div className="total-container">
            <h3 className="total-amount">Price: {total.toFixed(2)} Lei</h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
