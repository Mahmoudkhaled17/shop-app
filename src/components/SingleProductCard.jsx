import { useState } from 'react'

// this component shows one product
// it gets the product data and the addItemToCart function from ShopPage
function SingleProductCard({ product, addItemToCart }) {

  // how many the user wants to buy
  const [qty, setQty] = useState(1)

  function handleMinusClick() {
    // don't go below 1
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  function handlePlusClick() {
    setQty(qty + 1)
  }

  function handleInputChange(e) {
    // make sure the value is a valid number
    const typed = parseInt(e.target.value)
    if (!isNaN(typed) && typed >= 1) {
      setQty(typed)
    }
  }

  function handleAddClick() {
    addItemToCart(product, qty)
    setQty(1) // reset back to 1 after adding
    alert(product.title + ' added to cart!') // TODO: make this look nicer later
  }

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <p className="product-category">{product.category}</p>
      <h3 className="product-name">{product.title}</h3>
      <p className="product-price">${product.price}</p>

      {/* the +/- buttons and number input */}
      <div className="qty-row">
        <button onClick={handleMinusClick}>-</button>
        <input
          type="number"
          value={qty}
          onChange={handleInputChange}
          min="1"
        />
        <button onClick={handlePlusClick}>+</button>
      </div>

      <button className="add-to-cart-btn" onClick={handleAddClick}>
        Add to Cart
      </button>

    </div>
  )
}

export default SingleProductCard
