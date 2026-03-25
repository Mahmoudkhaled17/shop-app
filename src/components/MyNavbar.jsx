import { Link } from 'react-router-dom'

// howManyItems comes from App.jsx so the number stays updated
function MyNavbar({ howManyItems }) {
  return (
    <nav className="my-navbar">

      <p className="site-name">🛒 My Shop</p>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>

        {/* the cart link - show a number if there are items */}
        <Link to="/cart" className="cart-nav-link">
          Cart
          {howManyItems > 0 && (
            <span className="items-count">{howManyItems}</span>
          )}
        </Link>
      </div>

    </nav>
  )
}

export default MyNavbar
