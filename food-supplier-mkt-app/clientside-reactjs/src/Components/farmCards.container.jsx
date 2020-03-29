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
    tags: ['CSA', 'Local Pickup']
  }
];

const FarmCards = () => {
  return (
    <Card title="Default size card" style={{ width: 300 }}>
      {farms.map(farmData => (
        <Farm data={farmData}></Farm>
      ))}
    </Card>
  );
};

export default FarmCards;
