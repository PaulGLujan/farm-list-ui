import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Select } from 'antd';
import { getAirtableData } from '../utilities/requestOperations';

const FoodSelect = ({ onChange }) => {
    const [listOfFoods, setListOfFoods] = useState([])
    const isLoading = listOfFoods.length > 0 ? false : true;
    const classes = useStyles();
    const { selectBox } = classes
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
            className={selectBox}
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

const useStyles = createUseStyles({
    selectBox: {
        width: '100%',
        margin: '0 0 15px 0'
    }
});

export default FoodSelect;
