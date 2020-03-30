import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Card, Typography, Divider } from 'antd';
import FarmCard from './farmCard';
import FoodSelect from './FoodSelect';

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
    const [filteredFarms, setFilteredFarms] = useState(farms);
    const classes = useStyles();
    const { Text } = Typography;
    const { card, divider, overflowContainer } = classes;

    const onChange = filters => {
        setFilteredFarms(filters.length > 0 ? farms.filter(farm => filters.includes(farm.type)) : farms)
    };

    return (
        <Card title="Which foods are you searching for?" className={card}>
            <Text strong>
                Please note: We are currently only serving the San Francisco Bay Area.
                We will expand from there.
            </Text>
            <Divider className={divider}></Divider>
            <FoodSelect onChange={onChange}/>
            <div class={overflowContainer}>
                {filteredFarms.map((farmData, i) => (
                    <FarmCard key={i} data={farmData} />
                ))}
            </div>
        </Card>
    );
};

const useStyles = createUseStyles({
    card: {
        width: 400,
        borderRadius: 10
    },
    divider: {
        margin: 15
    },
    overflowContainer: {
        overflowY: 'auto',
        overflowX: 'hidden',
        maxHeight: '55vh',
        padding: 0,
        margin: 0,
    }
});

export default FarmCards;
