import React, { useState } from "react";
import "./Banner.css";

function App() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const products = [
    { id: 1, name: "Product 1", price: 50, img: '/item/img/Booking.png' },
    { id: 2, name: "Product 2", price: 75, img: '/item/img/Booking.png' },
    { id: 3, name: "Product 3", price: 100, img: '/item/img/Booking.png' },
    { id: 4, name: "Product 4", price: 200, img: '/item/img/Booking.png' },
    { id: 5, name: "Product 5", price: 300, img: '/item/img/Booking.png' },
    { id: 6, name: "Product 6", price: 400, img: '/item/img/Booking.png' },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const placeOrder = () => {
    setOrderPlaced(true);
    setCart([]);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>E-Kart Apni Dukan</h1>
      </header>

      <main className="main-content">
        <section className="products">
          <h2>Products</h2>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.img} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

        <section className="cart">
          <h2>Shopping Cart</h2>
          {cart.length > 0 ? (
            <>
              <ul>
                {cart.map((product) => (
                  <li key={product.id} className="cart-item">
                    {product.name} - ${product.price} x {product.quantity}
                    <button onClick={() => removeFromCart(product.id)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <h3>Total: ${total}</h3>
              <button className="place-order-button" onClick={placeOrder}>
                Place Order
              </button>
            </>
          ) : orderPlaced ? (
            <p>Thank you for your order!</p>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;