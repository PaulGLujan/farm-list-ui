import React from 'react';

// Sets the intial values for the FarmContext
export default React.createContext({
  farms: [],
  farmFoodTypes: [],
  fetchAllFarmData: () => {}
})
