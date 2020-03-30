import React from 'react';

export default React.createContext({
  farms: [],
  fetchFarms: () => {},
  farmFoodTypes: [],
  fetchFarmFoodTypes: () => {}
})