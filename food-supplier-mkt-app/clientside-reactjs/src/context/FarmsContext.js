import React, { createContext, useState } from 'react';
import { getAllAirtableData } from '../utilities/requestOperations';

const initialFarmsData = {
    farms: [],
    farmFoodTypes: [],
    filteredFarms: []
}

const FarmsContext = createContext(initialFarmsData)
const { Provider } = FarmsContext

const FarmsContextController = ({ children }) => {
    const [farmsData, setFarmsData] = useState(initialFarmsData)

    const fetchAllFarmData = () => {
        return new Promise(async (resolve, reject) => {
            try {
                // getAllAirtableData() returns an object containing two arrays
                // for complete farm data and unique food types.
                const response = await getAllAirtableData();
                console.log(response)
                const { farms, uniqueFarmFoodTypes } = response

                const newFarmData = {
                    ...farmsData,
                    farms,
                    farmFoodTypes: uniqueFarmFoodTypes,
                }

                console.log(newFarmData)
                await setFarmsData(newFarmData)

                resolve(farms);
            } catch (err) {
                console.log(err)
                reject(err);
            }
        });
    }

    const filterFarms = filteredFarms => {
        const newFarmData = {
            ...farmsData,
            filteredFarms
        }

        setFarmsData(newFarmData)
    }

    return (
        <Provider value={{ farmsData, fetchAllFarmData, filterFarms }}>
            {children}
        </Provider>
    );
};

export { FarmsContext, FarmsContextController };
