import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import TechItem from './TechItem/TechItem';
import classes from './AvailableTech.module.css';



const AvailableTech = () => {

  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://online-retail-store-6272a-default-rtdb.firebaseio.com/items.json');

      if(!response.ok) {
        throw new Error('Opps, something turned sour!');
      }
      const responseData = await response.json();
      const loadedItems = [];
               
      for (const key in responseData) {
        loadedItems.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,

        });
      }
      setItem(loadedItems);
      setIsLoading(false);
    };
    
      fetchItems().catch((error) =>{
        setIsLoading(false)
        setHttpError(error.message);
      });
        
  }, []);

  if (isLoading){
    return <section className={classes.ItemLoading}>
      <p>Loading ... </p>
    </section>
  }

  if (httpError) {
    return (
       <section className={classes.ItemError}>
         <p>{httpError}</p>
      </section>
    );
  }



  const techList = items.map((tech) => (
    <TechItem
      key={tech.id}
      id={tech.id}
      name={tech.name}
      description={tech.description}
      price={tech.price}
    />
  ));

  return (
    <section className={classes.tech}>
      <Card>
        <ul>{techList}</ul>
      </Card>
    </section>
  );
};

export default AvailableTech;