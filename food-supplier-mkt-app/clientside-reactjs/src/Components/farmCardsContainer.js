import React, { useState, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { Card } from 'antd';
import Farm from './farmCard';
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
    const classes = useStyles();
    const { card } = classes;
    const [farmOptions, setFarmOptions] = useState([]);

    const onChange = useCallback(value => setFarmOptions(value), []);

    // Defaults to all farms
    // Filters farms based on presence of farm.type in selected options in FoodSelect.js
    const filteredFarms = () => farmOptions.length > 0 ? farms.filter(farm => farmOptions.includes(farm.type)) : farms

    return (
        <Card title="Which foods are you searching for?" className={card}>
            <div className={classes.cardTitle}>
                Please note: We are currently only serving the San Francisco Bay
                Area. We will expand from there.
            </div>
            <br />
            <FoodSelect onChange={onChange}/>
            {filteredFarms().map((farmData, i) => (
                <Farm key={i} data={farmData} />
            ))}
        </Card>
    );
};

const useStyles = createUseStyles({
    card: {
        width: 400,
        overflow: 'auto',
        maxHeight: '85vh',
        borderRadius: 10
    }
});

export default FarmCards;
