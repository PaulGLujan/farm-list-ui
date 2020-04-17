import React, { useState } from 'react';
import { Layout } from 'antd';
import { createUseStyles } from 'react-jss';
import Div100vh from 'react-div-100vh';
import Mapbox from './components/mapbox/Mapbox.js';
import FarmCardsContainer from './components/FarmCardsContainer';
import MobileFooter from './components/MobileFooter';
import GlobalState from './context/GlobalState';
import { ViewportContextController } from './context/ViewportContext';

const App = props => {
    const classes = useStyles();
    const { Content, Header } = Layout;
    const [drawerVisible, setDrawerVisible] = useState(true);

    return (
        <GlobalState>
            <Div100vh>
                <Layout className={classes.base}>
                    <Header className={classes.header}>
                        <h1>Farm List - pushed to master</h1>
                    </Header>
                    <Content>
                        <ViewportContextController>
                            <Mapbox />
                            <div className={classes.cardPadding}>
                                <FarmCardsContainer
                                    drawerVisible={drawerVisible}
                                    setDrawerVisible={setDrawerVisible}
                                />
                            </div>
                        </ViewportContextController>
                    </Content>
                    <MobileFooter setDrawerVisible={setDrawerVisible} />
                </Layout>
            </Div100vh>
        </GlobalState>
    );
};

const useStyles = createUseStyles({
    base: {
        height: 'inherit',
        '& .ant-layout-content': {
            height: 'calc(100% - 64px)'
        }
    },
    header: {
        backgroundColor: 'white'
    },
    cardPadding: {
        padding: 20
    },
    mapCard: {
        position: 'absolute'
    },
    '@media (max-width: 575px)': {
        cardPadding: {
            display: 'none'
        }
    }
});

export default App;
