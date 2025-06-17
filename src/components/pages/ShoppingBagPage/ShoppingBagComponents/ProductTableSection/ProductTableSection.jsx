import React from "react";
import "./ProductTableSection.css";
import { useProductInteraction } from "../../../../shared/ProductInteractionContext/ProductInteractionContext";

export default function ProductTableSection() {
  // Access buyProducts and removeProduct function from context
  const { buyProducts, removeProduct } = useProductInteraction();

  // Convert buyProducts object to an array for easier mapping
  const productsArray = Object.values(buyProducts);

  // Calculate subtotal by summing totalPrice of each product
  const subtotal = productsArray.reduce(
    (sum, p) => sum + parseFloat(p.totalPrice),
    0
  );

  return (
    <section className="product-table-section">
      <table className="cart-table">
        <thead>
          <tr className="cart-header">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productsArray.map((product) => {
            return (
              <tr className="cart-row" key={product.id}>
                <td className="product-info">
                  <img src={product.image} alt={product.name} />
                  <div>
                    <p className="product-name">{product.name}</p>
                  </div>
                </td>
                <td className="price">
                  ${parseFloat(product.price.replace("$", "")).toFixed(2)}
                </td>

                <td className="quantity-cell">{product.count}</td>

                <td className="total">${product.totalPrice}</td>
                <td>
                  <button
                    className="remove-btn"
                    onClick={() => removeProduct(product.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="cart-footer">
        <div className="subtotal">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <p className="note">Shipping & taxes calculated at checkout</p>
        <div className="cart-buttons">
          <button className="gold-btn">CONTINUE SHOPPING</button>
          <button className="gold-btn">UPDATE</button>
          <button className="gold-btn">CHECK OUT</button>
        </div>
      </div>
    </section>
  );
}
