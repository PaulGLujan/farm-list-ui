import React, { Component } from 'react';
import { Select } from 'antd';
import { getAirtableData } from '../utilities/requestOperations';

const { Option } = Select;

class FoodSelect extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            listOfFoods: []
        };
    }

    handleChange(value) {
        this.props.onChange(value)
    }

    async componentDidMount() {
        const listOfFoods = await getAirtableData();
        this.setState({ listOfFoods });
    }

    render() {
      const isLoading = this.state.listOfFoods.length ? false : true;

        return (
            <>
                <Select
                    mode="multiple"
                    size={'default'}
                    placeholder="Please select food"
                    onChange={this.handleChange}
                    style={{ width: '100%', marginBottom: 12 }}
                    loading={isLoading}
                >
                    {this.state.listOfFoods.map((food, i) => (
                        <Option key={i} value={food}>
                            {food}
                        </Option>
                    ))}
                </Select>
            </>
        );
    }
}

export default FoodSelect;
