import './ContentStyle.css'
import { useEffect, useState } from 'react'
import { FcRating } from 'react-icons/fc'

interface IProduct {
  id?: string
  image?: string
  title?: string
  price?: string
  rating?: Rating
}
interface Rating {
  rate: string
  count: string
}

function Content() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([{}])
  function CategoriesFromAPI() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        json.unshift('All categories')
        setCategories(json)
      })
  }

  function ProductsFromAPI() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }

  useEffect(() => {
    CategoriesFromAPI()
    ProductsFromAPI()
  }, [])
  return (
    <>
      <div className="ContentComponets">
        <div className="Filter">
          {categories.map((category, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`category-${index}`}
                name="category"
                value={category}
              />
              <label htmlFor={`category-${index}`}>{category}</label>
            </div>
          ))}
        </div>
        <div className="Content">
          <div className="Products">
            {products.map((product: IProduct) => (
              <div className="ProductCard" key={product.id}>
                <img src={product.image} className="ProductImage" />
                <div className="ProductInfo">
                  <h4>{product.title}</h4>
                  <span>Price:{product.price}</span>
                  <div>
                    <FcRating />
                    <span>{product.rating?.rate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Content
