import React, { useEffect, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { Select } from 'antd';
import FarmContext from '../context/farm-context';

const FoodSelect = ({ onChange }) => {
    const { farmFoodTypes, fetchFarmFoodTypes } = useContext(FarmContext)
    const isLoading = farmFoodTypes.length > 0 ? false : true;
    const classes = useStyles();
    const { selectBox } = classes
    const { Option } = Select;

    useEffect(() => {
        fetchFarmFoodTypes()
    }, [fetchFarmFoodTypes])

    return (
        <Select
            mode="multiple"
            size={'default'}
            placeholder="Please select food"
            onChange={onChange}
            className={selectBox}
            loading={isLoading}
        >
            {farmFoodTypes.map((food, i) => (
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
