import React, { useContext, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Select } from 'antd';
import { FarmsContext } from '../context/FarmsContext';

const FoodSelect = ({ onChange }) => {
    const { farmsData } = useContext(FarmsContext);
    const { farmFoodTypes } = farmsData
    const isLoading = farmFoodTypes.length > 0 ? false : true;
    const classes = useStyles();
    const { selectBox } = classes;
    const { Option } = Select;

    return (
        <Select
            mode="multiple"
            size={'default'}
            placeholder="Please select food"
            showSearch={false}
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
    );
};

const useStyles = createUseStyles({
    selectBox: {
        width: '100%',
        margin: '0 0 15px 0'
    },
    '@media (max-width: 575px)': {
        selectBox: {
            width: '92%'
        }
    }
});

export default FoodSelect;
