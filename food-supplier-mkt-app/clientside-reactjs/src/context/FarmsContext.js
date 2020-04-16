import React, { createContext, useState } from 'react';
import { getAllAirtableData } from '../utilities/requestOperations';

const initialFarms = {
    farms: [],
    farmFoodTypes: []
}

const FarmsContext = createContext(initialFarms)
const { Provider } = FarmsContext

const FarmsContextController = ({ children }) => {
    const [farms, setFarms] = useState(initialFarms.farms)
    const [farmFoodTypes, setFarmFoodTypes] = useState(initialFarms.farmFoodTypes)

    const fetchAllFarmData = async () => {
            try {
                // getAllAirtableData() returns an object containing two arrays
                // for complete farm data and unique food types.
                const response = await getAllAirtableData();
                const { farms, uniqueFarmFoodTypes } = response
                await setFarms(farms)
                await setFarmFoodTypes(uniqueFarmFoodTypes)
                // resolve(farms);
            } catch (err) {
                console.log(err)
                // reject(err);
            }
        // });
    }

    return (
        <Provider value={{ farms, farmFoodTypes, setFarms, setFarmFoodTypes, fetchAllFarmData }}>
            {children}
        </Provider>
    );
};

export { FarmsContext, FarmsContextController };

// import React, { useState } from 'react';
// import FarmContext from './farm-context';
// import { getAllAirtableData } from '../utilities/requestOperations';

// const GlobalState = props => {
//   const [farms, setFarms] = useState([])
//   const [farmFoodTypes, setFarmFoodTypes] = useState([])

//   const fetchAllFarmData = () => {
//     return new Promise(async (resolve, reject) => {
//     try {
//         // getAllAirtableData() returns an object containing two arrays
//         // for complete farm data and unique food types.
//         const response = await getAllAirtableData();
//         const { farms, uniqueFarmFoodTypes } = response
//         await setFarms(farms)
//         await setFarmFoodTypes(uniqueFarmFoodTypes)
//         resolve(farms);
//     } catch (err) {
//         console.log(err)
//         reject(err);
//     }
//   });
//   }

//   // Values are global through useContext
//   // Example usage:
//   //
//   // ** import React, { useContext } from 'react' **
//   // ** import FarmContext from './context/farm-context.js **
//   //
//   // const { farms } = useContext(FarmContext)
//   return (
//     <FarmContext.Provider value={{
//       farms,
//       farmFoodTypes,
//       fetchAllFarmData,
//     }}>
//       {props.children}
//     </FarmContext.Provider>
//   )
// }

// export default GlobalState;