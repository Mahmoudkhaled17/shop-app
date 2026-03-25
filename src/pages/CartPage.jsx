import CartItemRow from '../components/CartItemRow'

function CartPage({ cartItems, changeQty, deleteItem }) {

  // calculate the total price of everything in the cart
  let totalPrice = 0
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice = totalPrice + (cartItems[i].price * cartItems[i].quantity)
  }

  // if cart is empty show a message
  if (cartItems.length === 0) {
    return (
      <div className="page-container">
        <h2>My Cart</h2>
        <p>Nothing in your cart yet! Go to the shop and add some stuff 🛍️</p>
      </div>
    )
  }

  return (
    <div className="page-container">
      <h2>My Cart</h2>

      <div className="cart-list">
        {cartItems.map(function(item) {
          return (
            <CartItemRow
              key={item.id}
              item={item}
              changeQty={changeQty}
              deleteItem={deleteItem}
            />
          )
        })}
      </div>

      {/* show the grand total */}
      <div className="total-box">
        <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
      </div>

    </div>
  )
}

export default CartPage
