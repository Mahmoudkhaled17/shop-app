import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// my pages
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'

// my components
import MyNavbar from './components/MyNavbar'

function App() {

  // cart will be an array of products the user added
  // each item looks like: { id, title, price, image, quantity }
  const [cartItems, setCartItems] = useState([])

  // this function adds a product to the cart
  // if the product is already in the cart, just increase the quantity
  function addItemToCart(product, howMany) {
    setCartItems(function(oldCart) {
      // check if this product is already in the cart
      const alreadyInCart = oldCart.find(function(item) {
        return item.id === product.id
      })

      if (alreadyInCart) {
        // if yes, update the quantity
        return oldCart.map(function(item) {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + howMany }
          }
          return item
        })
      } else {
        // if no, add it as a new item
        return [...oldCart, { ...product, quantity: howMany }]
      }
    })
  }

  // this changes the qty of something already in the cart
  function changeQty(productId, newQty) {
    // if qty goes to 0, just remove the item
    if (newQty < 1) {
      deleteItem(productId)
      return
    }
    setCartItems(function(oldCart) {
      return oldCart.map(function(item) {
        if (item.id === productId) {
          return { ...item, quantity: newQty }
        }
        return item
      })
    })
  }

  // removes an item from cart completely
  function deleteItem(productId) {
    setCartItems(function(oldCart) {
      return oldCart.filter(function(item) {
        return item.id !== productId
      })
    })
  }

  // count total items for the navbar badge
  // reduce goes through each item and adds up all the quantities
  const totalItemsInCart = cartItems.reduce(function(total, item) {
    return total + item.quantity
  }, 0)

  return (
    <div>
      <MyNavbar howManyItems={totalItemsInCart} />

      <Routes>
        <Route path="/"     element={<HomePage />} />
        <Route path="/shop" element={<ShopPage addItemToCart={addItemToCart} />} />
        <Route path="/cart" element={
          <CartPage
            cartItems={cartItems}
            changeQty={changeQty}
            deleteItem={deleteItem}
          />}
        />
      </Routes>
    </div>
  )
}

export default App
