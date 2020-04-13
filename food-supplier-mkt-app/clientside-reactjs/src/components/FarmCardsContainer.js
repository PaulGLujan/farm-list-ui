import React, { useState, useContext, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Button, Col, Card, Drawer, Typography, Divider } from 'antd';
import FarmCard from './FarmCard';
import FoodSelect from './FoodSelect';
import FarmContext from '../context/farm-context';

const FarmCards = ({ drawerVisible, setDrawerVisible }) => {
    const { farms, fetchAllFarmData } = useContext(FarmContext);
    const [filteredFarms, setFilteredFarms] = useState(farms);
    const classes = useStyles();
    const { Text } = Typography;
    const { card, divider, overflowContainer } = classes;

    // Entry point for fetching all Farm Data from Airtable
    useEffect(() => {
        async function fetchData() {
            const initialFarms = await fetchAllFarmData();
            setFilteredFarms(initialFarms);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChange = filters => {
        // Render farm if farm.Type array contains one or more elements in the filters array
        setFilteredFarms(
            filters.length > 0
                ? farms.filter(farm =>
                      filters.some(f => farm.Type.indexOf(f) >= 0)
                  )
                : farms
        );
    };
    if (window.innerWidth < 576) {
        return (
            <Drawer
                placement="bottom"
                visible={drawerVisible}
                mask={false}
                closable={false}
                className={classes.drawer}
                closable={true}
                onClose={() => {
                    setDrawerVisible(false);
                }}
            >
                <Col xs={24} sm={16} md={12} lg={10} xl={8} xxl={6}>
                    <FoodSelect onChange={onChange} />
                    <div className={overflowContainer}>
                        {filteredFarms.map((farmData, i) => (
                            <FarmCard key={i} data={farmData} />
                        ))}
                    </div>
                </Col>
            </Drawer>
        );
    } else {
        return (
            <Col xs={24} sm={16} md={12} lg={10} xl={8} xxl={6}>
                <Card
                    title="Which foods are you searching for?"
                    className={card}
                >
                    <Text strong>
                        Please note: We are currently only serving the San
                        Francisco Bay Area. We will expand from there.
                    </Text>
                    <Divider className={divider} />
                    <FoodSelect onChange={onChange} />
                    <div className={overflowContainer}>
                        {filteredFarms.map((farmData, i) => (
                            <FarmCard key={i} data={farmData} />
                        ))}
                    </div>
                </Card>
            </Col>
        );
    }
};

const useStyles = createUseStyles({
    drawer: {
        '& .ant-drawer-content-wrapper': {
            height: '320px !important'
        },
        '& .ant-drawer-close': {
            top: 11
        }
    },
    card: {
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
        margin: 0
    }
});

export default FarmCards;
