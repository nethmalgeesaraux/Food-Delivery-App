// ...existing code...
import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category = "All" }) => {
  const { food_list = [] } = useContext(StoreContext);

  const visible = Array.isArray(food_list)
    ? food_list.filter(item => category === "All" || item?.category === category)
    : [];

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {visible.length > 0 ? (
          visible.map((item, index) => (
            <FoodItem
              key={item._id ?? item.id ?? index}
              id={item._id ?? item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p className="no-results">No dishes found</p>
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
// ...existing code...