import { useEffect, useState } from 'react'
import { FcRating } from 'react-icons/fc'
import Button from '../ButtonComponents/Button'
import './ContentStyle.css'

interface IProduct {
  id: string
  image: string
  title: string
  price: string
  rating: { rate: string; count: string }
  quantity: number
  category: string
}

function Content() {
  const [categories, setCategories] = useState<string[]>([])
  const [products, setProducts] = useState<IProduct[]>([])
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])
  const [selectedCategory, setSelectedCategory] =
    useState<string>('All categories')
  const [sortOrder, setSortOrder] = useState<string>('asc')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        json.unshift('All categories')
        setCategories(json)
      })

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json)
        setFilteredProducts(json)
      })
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === 'All categories') {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      )
      setFilteredProducts(filtered)
    }
  }

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value)
    const sorted = [...filteredProducts].sort((a, b) => {
      const priceA = parseFloat(a.price)
      const priceB = parseFloat(b.price)
      return event.target.value === 'asc' ? priceA - priceB : priceB - priceA
    })
    setFilteredProducts(sorted)
  }

  return (
    <div className="ContentComponents">
      <div className="Filter">
        {categories.map((category, index) => (
          <div key={index}>
            <input
              className="fitreStyle"
              type="radio"
              id={`category-${index}`}
              name="category"
              value={category}
              checked={category === selectedCategory}
              onChange={() => handleCategoryChange(category)}
            />
            <label htmlFor={`category-${index}`}>{category}</label>
          </div>
        ))}
      </div>

      <div className="SortByPrice">
        <label htmlFor="sort">Sort by price:</label>
        <select id="sort" onChange={handleSortChange} value={sortOrder}>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="Products">
        {filteredProducts.map((product) => (
          <div className="ProductCard" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="ProductImage"
            />
            <div className="ProductInfo">
              <h4>{product.title}</h4>
              <span>Price: {product.price}</span>
              <div>
                <FcRating />
                <span>{product.rating.rate}</span>
              </div>
            </div>
            <Button product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Content
