// ...existing code...
import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import "./FoodItem.css"
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems = {}, addToCart, removeFromCart } = useContext(StoreContext)
  const count = cartItems[id] || 0
  const imgSrc = image || assets.placeholder

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={imgSrc} alt={name || 'food item'} />

        {!count ? (
          <img
            className='add'
            src={assets.add_icon_white}
            alt='add'
            onClick={() => addToCart(id)}
            role="button"
          />
        ) : (
          <div className='food-item-counter'>
            <img
              src={assets.remove_icon_red}
              alt='remove'
              onClick={() => removeFromCart(id)}
              role="button"
            />
            <p>{count}</p>
            <img
              src={assets.add_icon_green}
              alt='add more'
              onClick={() => addToCart(id)}
              role="button"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
// ...existing code...