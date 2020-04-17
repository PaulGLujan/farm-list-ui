import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { Select } from 'antd';
import { FarmsContext } from '../context/FarmsContext';

const FoodSelect = ({ onChange }) => {
    // const { farmsData } = useContext(FarmsContext);
    // const { farmFoodTypes } = farmsData
    // const isLoading = farmFoodTypes.length > 0 ? false : true;
    const classes = useStyles();
    const { selectBox } = classes;
    const { Option } = Select;

    return (
        <FarmsContext.Consumer>
            {({ farmsData }) => (
                <Select
                    mode="multiple"
                    size={'default'}
                    placeholder="Please select food"
                    showSearch={false}
                    onChange={onChange}
                    className={selectBox}
                    // loading={isLoading}
                >

                {farmsData.farmFoodTypes.map((food, i) => (
                    <Option key={i} value={food}>
                        {food}
                    </Option>
                ))}
                </Select>
            )}
        </FarmsContext.Consumer>

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

export default (FoodSelect);

{/* <IndexContext.Consumer>
{({ handleChange }) => (
    <TouchableOpacity onPress={handleChange(props.index)}>
        <AsyncImage
            source={ props.img_src }
            placeholderColor="#fafafa"
            style={{ flex: 1, width: null, height: 200 }}
        />
        <Text>{ props.var_name }</Text>
        <Text>{ props.price }</Text>
        <Text>{ props.sku }</Text>
    </TouchableOpacity>
)};
</IndexContext.Consumer>

<IndexContext.Consumer>
    {({ handleChange }) => (
        <TouchableOpacity onPress={handleChange(props.index)}>
            <AsyncImage
                source={ props.img_src }
                placeholderColor="#fafafa"
                style={{ flex: 1, width: null, height: 200 }}
            />
            <Text>{ props.var_name }</Text>
            <Text>{ props.price }</Text>
            <Text>{ props.sku }</Text>
        </TouchableOpacity>
    )}
</IndexContext.Consumer> */}