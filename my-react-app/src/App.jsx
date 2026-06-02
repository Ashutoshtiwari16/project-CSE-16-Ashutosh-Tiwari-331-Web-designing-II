import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Mobile",
      price: 79999,
      rating: 4.8,
      badge: "New",
      image: "https://picsum.photos/300?1",
    },
    {
      id: 2,
      name: "Gaming Laptop",
      category: "Electronics",
      price: 65999,
      rating: 4.7,
      badge: "Sale",
      image: "https://picsum.photos/300?2",
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Accessories",
      price: 3999,
      rating: 4.5,
      badge: "Hot",
      image: "https://picsum.photos/300?3",
    },
    {
      id: 4,
      name: "Running Shoes",
      category: "Fashion",
      price: 2499,
      rating: 4.4,
      badge: "Sale",
      image: "https://picsum.photos/300?4",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 1999,
      rating: 4.3,
      badge: "New",
      image: "https://picsum.photos/300?5",
    },
    {
      id: 6,
      name: "Backpack",
      category: "Fashion",
      price: 1499,
      rating: 4.1,
      badge: "Hot",
      image: "https://picsum.photos/300?6",
    },
  ];

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = () => {
    if (cart.length > 0) {
      setCart(cart.slice(0, -1));
    }
  };

  const filteredProducts = products.filter((item) => {
    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || item.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <div>
      <nav className="navbar">
        <div className="logo">FlipkartX</div>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="cart-box">
          🛒 {cart.length}
        </div>
      </nav>

      <section className="hero">
        <h1>Big Shopping Festival</h1>
        <p>Up to 70% Off on Electronics & Fashion</p>
      </section>

      <section className="filter-section">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Mobile")}>Mobiles</button>
        <button onClick={() => setCategory("Electronics")}>
          Electronics
        </button>
        <button onClick={() => setCategory("Fashion")}>Fashion</button>
        <button onClick={() => setCategory("Accessories")}>
          Accessories
        </button>
      </section>

      <div className="cart-controls">
        <button onClick={removeFromCart}>
          Remove Last Cart Item
        </button>
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <span className="badge">{product.badge}</span>

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>{product.category}</p>

            <div className="rating">
              ⭐ {product.rating}
            </div>

            <h2>₹{product.price}</h2>

            <button
              className="cart-btn"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <footer>
        <h3>FlipkartX Clone</h3>
        <p>Built using React JS</p>
      </footer>
    </div>
  );
}

export default App;