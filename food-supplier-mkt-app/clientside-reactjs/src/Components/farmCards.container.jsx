import React from 'react';
import Farm from './farmCard.component';
import { Card } from 'antd';

const farms = [
  {
    name: 'Seaforager',
    type: 'Fish',
    websiteURL: 'https://www.seaforager.com/',
    imageURL:
      'https://helplocalfarms-images.s3-us-west-2.amazonaws.com/sea_forager.jpg',
    tags: ['CSA', 'Pickup']
  },
  {
    name: 'Water2Table',
    type: 'Fish',
    websiteURL: 'https://www.water2table.com/',
    imageURL:
      'https://helplocalfarms-images.s3-us-west-2.amazonaws.com/water_2_table.png',
    tags: ['Pickup', 'Local Delivery']
  },
  {
    name: 'TwoXSea',
    type: 'Fish',
    websiteURL: 'http://twoxsea.com/',
    imageURL:
      'https://helplocalfarms-images.s3-us-west-2.amazonaws.com/two_x_sea.jpg',
    tags: ['Pickup']
  },
  {
    name: 'Dirty Girl Produce',
    type: 'Farm',
    websiteURL: 'http://www.dirtygirlproduce.com/',
    imageURL:
      'https://helplocalfarms-images.s3-us-west-2.amazonaws.com/dirty_girl_produce.gif',
    tags: ['Organic', 'CSA']
  },
  {
    name: 'Liberty Ducks',
    type: 'Poultry',
    websiteURL: 'http://www.libertyducks.com/',
    imageURL:
      'https://helplocalfarms-images.s3-us-west-2.amazonaws.com/liberty_ducks.jpeg',
    tags: ['Pickup', 'Local Delivery']
  },
  {
    name: 'Riverdog Farm',
    type: 'Farm',
    websiteURL: 'http://www.riverdogfarm.com/',
    imageURL:
      'https://helplocalfarms-images.s3-us-west-2.amazonaws.com/riverdog_farm.jpg',
    tags: ['Organic', 'CSA']
  },
  {
    name: 'CreamCo Meats',
    type: 'Meat',
    websiteURL: 'http://www.dirtygirlproduce.com/',
    imageURL:
      'https://helplocalfarms-images.s3-us-west-2.amazonaws.com/creamco_meats.png',
    tags: ['Pickup', 'Local Delivery']
  }
];

const FarmCards = () => {
  return (
    <Card title="Default size card" style={{ width: 310 }}>
      {farms.map(farmData => (
        <Farm data={farmData}></Farm>
      ))}
    </Card>
  );
};

export default FarmCards;
