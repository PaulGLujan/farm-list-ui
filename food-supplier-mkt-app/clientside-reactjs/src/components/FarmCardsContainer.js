import React, { useState, useContext, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Card, Typography, Divider } from 'antd';
import FarmCard from './FarmCard';
import FoodSelect from './FoodSelect';
import FarmContext from '../context/farm-context'

const FarmCards = props => {
    const { farms, fetchAllFarmData } = useContext(FarmContext)
    const [filteredFarms, setFilteredFarms] = useState(farms);
    const classes = useStyles();
    const { Text } = Typography;
    const { card, divider, overflowContainer } = classes;

    // Entry point for fetching all Farm Data from Airtable
    useEffect(() => {
        async function fetchData() {
            const initialFarms = await fetchAllFarmData()
            setFilteredFarms(initialFarms);
        } fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onChange = filters => {
        // Render farm if farm.Type array contains one or more elements in the filters array
        setFilteredFarms(filters.length > 0 ? farms.filter(farm => filters.some(f => farm.Type.indexOf(f) >= 0)) : farms)
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
