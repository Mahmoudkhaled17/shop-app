import { Link } from 'react-router-dom'

// just a simple home page for now
// will make it look nicer later maybe

function HomePage() {
  return (
    <div className="page-container">

      <div className="hero-box">
        <h1>Welcome to My Shop!</h1>
        <p>This is a project I built while learning React 🎉</p>
        <p>You can browse products, add them to cart, and see the total.</p>
        <Link to="/shop" className="go-to-shop-btn">
          Go to Shop →
        </Link>
      </div>

      {/* little info cards */}
      <div className="info-cards">
        <div className="info-card">
          <h3>🏷️ Real Products</h3>
          <p>Products come from the FakeStore API</p>
        </div>
        <div className="info-card">
          <h3>🛒 Cart Works</h3>
          <p>Add items, change qty, remove them</p>
        </div>
        <div className="info-card">
          <h3>⚡ Built with React</h3>
          <p>useState, useEffect, react-router and more</p>
        </div>
      </div>

    </div>
  )
}

export default HomePage
