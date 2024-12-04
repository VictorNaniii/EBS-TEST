import React from 'react'
import { useCart } from '../CartComponets/CartContext'
import './ButtonStyle.css'

interface ButtonProps {
  product: {
    id: string
    title: string
    price: string
    image: string
    quantity: number
  }
}

const Button: React.FC<ButtonProps> = ({ product }) => {
  const { addToCart, removeFromCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(product.id)
  }

  return (
    <div className="button-container">
      <button className="buttonHandleClick" onClick={handleAddToCart}>
        Click to buy
      </button>
      <button className="buttonRemoveFromCart" onClick={handleRemoveFromCart}>
        Remove from cart
      </button>
    </div>
  )
}

export default Button
