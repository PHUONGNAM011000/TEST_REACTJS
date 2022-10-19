import { useEffect, useState } from 'react';
import _size from 'lodash/size';
import { frequencyValueInArray } from './helper';

function App() {
  const [objData, setObjData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://metanode.co/json/eng.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData)
        if (
          frequencyValueInArray(responseData, responseData[key]) === 1 &&
          _size(loadedMeals) < 24
        )
          loadedMeals.push({
            name: responseData[key],
            index: key,
          });

      setObjData(loadedMeals);
    };

    fetchData();
  }, []);

  return (
    <div>
      {objData.map((item) => (
        <p key={item.index}>word: {item.name}</p>
      ))}
    </div>
  );
}

export default App;
