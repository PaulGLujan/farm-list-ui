import React, { useContext, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Col, Card, Drawer, Typography, Divider } from 'antd';
import FarmCard from './FarmCard';
import FoodSelect from './FoodSelect';
import { FarmsContext } from '../context/FarmsContext';

const FarmCards = ({ drawerVisible, setDrawerVisible }) => {
    const { farmsData, filterFarms, fetchAllFarmData } = useContext(FarmsContext);
    const { farms } = farmsData
    const classes = useStyles();
    const { Text } = Typography;
    const { card, divider, overflowContainer } = classes;

    // Entry point for fetching all Farm Data from Airtable
    useEffect(() => {
        fetchAllFarmData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChange = filters => {
        // Render farm if farm.Type array contains one or more elements in the filters array
        filterFarms(
            filters.length > 0
                ? farms.filter(farm =>
                        filters.some(f => farm.Type.indexOf(f) >= 0)
                    )
                : farms
        );
    };
    if (window.innerWidth < 576) {
        return (
            <FarmsContext.Consumer>
                {({ farmsData }) => (
                    <Drawer
                        placement="bottom"
                        visible={drawerVisible}
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
                                {((farmsData.filteredFarms.length === 0) ? farmsData.farms : farmsData.filteredFarms).map((farmData, i) => <FarmCard key={i} data={farmData} />)}
                            </div>
                        </Col>
                    </Drawer>
                )}
            </FarmsContext.Consumer>
        );
    } else {
        return (
            <FarmsContext.Consumer>
                {({ farmsData }) => (
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
                                {((farmsData.filteredFarms.length === 0) ? farmsData.farms : farmsData.filteredFarms).map((farmData, i) => <FarmCard key={i} data={farmData} />)}
                            </div>
                        </Card>
                    </Col>
                )}
            </FarmsContext.Consumer>
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
