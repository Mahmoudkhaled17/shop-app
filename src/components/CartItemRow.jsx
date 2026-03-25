// this shows one item inside the cart page

function CartItemRow({ item, changeQty, deleteItem }) {
  return (
    <div className="cart-item-row">

      <img src={item.image} alt={item.title} className="cart-img" />

      <div className="cart-item-details">
        <p className="cart-item-name">{item.title}</p>
        <p className="cart-item-price">${item.price} each</p>
      </div>

      {/* qty controls */}
      <div className="qty-row">
        <button onClick={() => changeQty(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => changeQty(item.id, item.quantity + 1)}>+</button>
      </div>

      {/* subtotal for this item */}
      <p className="cart-subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </p>

      <button className="delete-btn" onClick={() => deleteItem(item.id)}>
        Remove
      </button>

    </div>
  )
}

export default CartItemRow
