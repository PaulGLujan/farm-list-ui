import React, { createContext, useEffect, useState } from 'react';
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

      // Entry point for fetching all Farm Data from Airtable
      useEffect(() => {
        fetchAllFarmData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchAllFarmData = async () => {
            try {
                // getAllAirtableData() returns an object containing two arrays
                // for complete farm data and unique food types.
                const response = await getAllAirtableData();
                const { farms, farmFoodTypes } = response
                const newFarmsData = {
                    ...farmsData,
                    farms,
                    farmFoodTypes,
                }
                await setFarmsData(newFarmsData)
            } catch (err) {
                console.log(err)
            }
    }

    const filterFarms = filteredFarms => {
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
