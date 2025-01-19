import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';

const HomeData = () => {

  const [foodItems, setFoodItems] = useState([{ food: '', quantity: 1 }]);
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (foodItems.some(item => !item.food.trim())) {
      setError('Please enter a valid food name for all items');
      return;
    }

    setLoading(true);
    setError('');
    setFoodData([]);

    try {
      for (const item of foodItems) {
        const response = await axios.get(
          `https://api.calorieninjas.com/v1/nutrition?query=${item.food}`,
          {
            headers: {
              'X-Api-Key': 'yuM3GGpG6fWPjv+IaWLM4g==vh2KP1Pe0GltM4Nr', 
            },
          }
        );

  
        console.log(response.data);

        if (response.data.items.length > 0) {
          const foodItemData = response.data.items[0];
          console.log('Food Item Data:', foodItemData);
          const calories = foodItemData.calories || 0;
          const carbs = foodItemData.carbohydrates_total_g || 0;
          const protein = foodItemData.protein_g || 0;
          const fat = foodItemData.fat_total_g || 0;

          setFoodData(prevData => [
            ...prevData,
            {
              food: foodItemData.name,
              calories: calories * item.quantity,
              carbs: carbs * item.quantity,
              protein: protein * item.quantity,
              fat_total_g: fat * item.quantity,
              quantity: item.quantity,
            },
          ]);
        } else {
          setError('No data found for one or more foods.');
        }
      }
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
      console.error(err);
    }
    setLoading(false);
  };


  const handleAddItem = () => {
    setFoodItems([...foodItems, { food: '', quantity: 1 }]);
  };


  const handleRemoveItem = (index) => {
    const updatedItems = foodItems.filter((_, i) => i !== index);
    setFoodItems(updatedItems);
  };


  const handleInputChange = (index, type, value) => {
    const updatedItems = [...foodItems];
    updatedItems[index][type] = value;
    setFoodItems(updatedItems);
  };

  return (
    <div className='mainDiv'>
        <div className="home-container">
      <h2>Food Calorie Calculator</h2>
      <form onSubmit={handleSubmit} className="form-container">
        {foodItems.map((item, index) => (
          <div key={index} className="food-item">
            <input
              type="text"
              placeholder="Enter food name"
              value={item.food}
              onChange={(e) => handleInputChange(index, 'food', e.target.value)}
              className="food-input"
            />
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
              className="quantity-input"
            />
            {foodItems.length > 1 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => handleRemoveItem(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" className="add-btn" onClick={handleAddItem}>
          Add Item
        </button>
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Loading...' : 'Get Calories'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {foodData.length > 0 && !loading && (
        <div className="results-container">
          <h3>Nutrition Breakdown:</h3>
          <table className="results-table">
            <thead>
              <tr>
                <th>Food</th>
                <th>Quantity</th>
                <th>Calories</th>
                <th>Carbs</th>
                <th>Protein</th>
                <th>Fat</th>
              </tr>
            </thead>
            <tbody>
              {foodData.map((data, index) => (
                <tr key={index}>
                  <td>{data.food}</td>
                  <td>{data.quantity}</td>
                  <td>{data.calories} cal</td>
                  <td>{data.carbs}g</td>
                  <td>{data.protein}g</td>
                  <td>{data.fat_total_g}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>
  );
};

export default HomeData;
