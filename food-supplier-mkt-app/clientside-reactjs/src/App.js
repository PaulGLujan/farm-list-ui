import React from 'react';
import { Layout } from 'antd';
import { createUseStyles } from 'react-jss';
import Mapbox from './components/mapbox/Mapbox.js';
import FarmCardsContainer from './components/FarmCardsContainer';
import GlobalState from './context/GlobalState';
import { ViewportContextController } from './context/ViewportContext';

const App = props => {
    const classes = useStyles();
    const { Content, Header } = Layout;

    return (
        <GlobalState>
            <Layout>
                <Header className={classes.header}>
                    <h1>Help Local Farms, Fishers, and Ranchers</h1>
                </Header>
                <Content>
                    <ViewportContextController>
                        <Mapbox />
                        <div className={classes.cardPadding}>
                            <FarmCardsContainer />
                        </div>
                    </ViewportContextController>
                </Content>
            </Layout>
        </GlobalState>
    );
};

const useStyles = createUseStyles({
    header: {
        backgroundColor: 'white'
    },
    cardPadding: {
        padding: 20
    },
    mapCard: {
        position: 'absolute'
    }
});

export default App;
