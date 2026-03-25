import { useState, useEffect } from 'react'
import SingleProductCard from '../components/SingleProductCard'

function ShopPage({ addItemToCart }) {

  const [productsList, setProductsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  // fetch the products when this page loads
  // useEffect with [] runs only once when the component appears
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(function(res) {
        return res.json()
      })
      .then(function(data) {
        console.log('got products:', data) // just to see what came back
        setProductsList(data)
        setIsLoading(false)
      })
      .catch(function(err) {
        console.log('something went wrong:', err)
        setErrorMsg('Could not load products, try refreshing the page')
        setIsLoading(false)
      })
  }, [])

  // show loading text while waiting
  if (isLoading) {
    return (
      <div className="page-container">
        <p>Loading products... please wait</p>
      </div>
    )
  }

  // show error if fetch failed
  if (errorMsg) {
    return (
      <div className="page-container">
        <p style={{ color: 'red' }}>{errorMsg}</p>
      </div>
    )
  }

  return (
    <div className="page-container">
      <h2>All Products</h2>

      <div className="products-grid">
        {productsList.map(function(product) {
          return (
            <SingleProductCard
              key={product.id}
              product={product}
              addItemToCart={addItemToCart}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ShopPage
