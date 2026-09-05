import React from "react";

const Card = ({ data ,handleDelete}) => {
  console.log(data);
  const { title, price, image, rating, shipping = "abc" ,id} = data;

  

  const handleBuyNow = () => {
    console.log(`Buying ${title}`);
  };

  return (
    <div className="product-card">
      {/* Seller Badge */}
      <span className="seller-badge">Nearest Seller</span>

      {/* Product Image */}
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>

      {/* Product Information */}
      <div className="product-info">
        <h2 className="product-title">{title}</h2>

        <div className="product-rating">
          <span className="stars">★★★★★</span>
          <span className="rating-value">{rating.rate}</span>
        </div>

        <p className="shipping">{shipping}</p>

        <p className="product-price">${price}</p>

        {/* Buttons */}
        <div className="product-actions">
          <button className="cart-btn" onClick={()=>handleDelete(id)}>
            Delete Item
          </button>

          <button className="buy-btn" onClick={handleBuyNow}>
            🛍 Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
