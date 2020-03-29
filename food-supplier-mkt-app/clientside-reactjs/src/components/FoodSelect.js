import React, { Component } from 'react';
import {  Select  } from 'antd';
import axios from 'axios';

const { Option } = Select;

class ExFoodSelectorA extends Component {
  state = {
    listOfFoods: []
  };
  
  handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  
  async componentDidMount() {
    // Example using axios to http get
        try {
          var headers = { 
            'Authorization': 'Bearer key9CJdcEkG2Ymiur',
            'Content-Type': 'application/json' 
          }
          var response_foodsTable = await axios('https://api.airtable.com/v0/appDk0v3oHfD3Bjf6/Food%20Items?maxRecords=3&view=Grid%20view&maxRecords=100', { headers })
          console.log('response_foodsTable.data', response_foodsTable.data)
          var dataReceived = response_foodsTable.data.records

          var listOfFoodsToSet = []
          dataReceived.map((item) => {
            if(item['fields']['Name']){
              listOfFoodsToSet.push(item['fields']['Name'])
            }
          })

          console.log('listOfFoodsToSet -- ', listOfFoodsToSet)
          this.setState({
            listOfFoods: listOfFoodsToSet
          })

        } catch(err) {
          alert(err);
        }
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
          style={{ width: '100%' }}
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

export default ExFoodSelectorA;