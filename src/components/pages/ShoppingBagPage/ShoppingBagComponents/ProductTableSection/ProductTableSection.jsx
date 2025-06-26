import React from "react";
import "./ProductTableSection.css";
import { useProductInteraction } from "../../../../shared/ProductInteractionContext/ProductInteractionContext";
import { useNavigate } from "react-router-dom";

export default function ProductTableSection() {
  // set Navigate
  const navigate = useNavigate();
  // Get product interaction functions and states from context
  const { buyProducts, removeProduct, setProductCount } =
    useProductInteraction();

  // Convert buyProducts object to an array for easier mapping
  const productsArray = Object.values(buyProducts);

  // Calculate subtotal by summing totalPrice of all products
  const subtotal = productsArray.reduce(
    (sum, p) => sum + parseFloat(p.totalPrice),
    0
  );

  // Handler to update product quantity, ensuring count >= 1
  const handleQuantityChange = (productId, newCount) => {
    if (newCount < 1 || isNaN(newCount)) return;
    setProductCount(productId, newCount);
  };

  // Handler for UPDATE button click - navigate to /product page
  const handleUpdateClick = () => {
    navigate("/product");
  };

  return (
    <div className="product-table-section-bg">
      <section className="product-table-section">
        {/* Desktop Table View */}
        <table className="cart-table desktop-only">
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
            {productsArray.map((product) => (
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
                <td className="quantity-cell">
                  <input
                    type="number"
                    className="quantity-input"
                    value={product.count}
                    min={1}
                    onChange={(e) =>
                      handleQuantityChange(product.id, parseInt(e.target.value))
                    }
                  />
                </td>
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
            ))}
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="cart-responsive mobile-only">
          {productsArray.map((product) => (
            <div className="cart-item" key={product.id}>
              <div className="cart-product">
                <img src={product.image} alt={product.name} />
                <p className="product-name">{product.name}</p>
              </div>
              <div className="cart-details">
                <p>
                  Price: $
                  {parseFloat(product.price.replace("$", "")).toFixed(2)}
                </p>
                <p>
                  Quantity:
                  <input
                    type="number"
                    className="quantity-input"
                    value={product.count}
                    min={1}
                    onChange={(e) =>
                      handleQuantityChange(product.id, parseInt(e.target.value))
                    }
                  />
                </p>
                <p>Total: ${product.totalPrice}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="cart-footer">
          <div className="subtotal">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <p className="note">Shipping & taxes calculated at checkout</p>
          <div className="cart-buttons">
            <button className="gold-btn" onClick={handleUpdateClick}>
              CONTINUE SHOPPING
            </button>
            <button className="gold-btn" onClick={handleUpdateClick}>
              UPDATE
            </button>
            <button className="gold-btn">CHECK OUT</button>
          </div>
        </div>
      </section>
    </div>
  );
}
