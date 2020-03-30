import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { getAirtableData } from '../utilities/requestOperations';

const FoodSelect = ({ onChange }) => {
    const [listOfFoods, setListOfFoods] = useState([])
    const isLoading = listOfFoods.length ? false : true;
    const { Option } = Select;

    useEffect(() => {
        async function fetchFoodsList(){
            try {
                const result = await getAirtableData();
                setListOfFoods(result)
            } catch (err) {
                console.log(err)
            }
        }
        fetchFoodsList()
    }, [])

    return (
        <Select
            mode="multiple"
            size={'default'}
            placeholder="Please select food"
            onChange={onChange}
            style={{ width: '100%', marginBottom: 12 }}
            loading={isLoading}
        >
            {listOfFoods.map((food, i) => (
                <Option key={i} value={food}>
                    {food}
                </Option>
            ))}
        </Select>
    )
}

export default FoodSelect;
