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
                const { farms, uniqueFarmFoodTypes } = response

                const newFarmsData = {
                    ...farmsData,
                    farms,
                    farmFoodTypes: uniqueFarmFoodTypes,
                }

                await setFarmsData(newFarmsData)

                resolve(farms);
            } catch (err) {
                console.log(err)
                reject(err);
            }
        });
    }

    const filterFarms = filteredFarms => {
        console.log(farmsData)

        const newFarmsData = {
            ...farmsData,
            filteredFarms
        }
        setFarmsData(newFarmsData)
    }

    return (
        <Provider value={{ farmsData, fetchAllFarmData, filterFarms }}>
            {children}
        </Provider>
    );
};

export { FarmsContext, FarmsContextController };
