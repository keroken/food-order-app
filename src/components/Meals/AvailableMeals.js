import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';
import { firebaseConfig } from '../../firebase';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(`${firebaseConfig.databaseURL}/meals.json`);
      const responseData = await response.json();
      console.log(response);

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map(meal => 
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );

  return (
    <section className={classes.meals}>
      <Card>
        {mealsList}
      </Card>
    </section>
  );
};

export default AvailableMeals;