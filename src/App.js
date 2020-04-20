import React, { useState } from 'react';
import { Layout } from 'antd';
import { createUseStyles } from 'react-jss';
import Div100vh from 'react-div-100vh';
import Mapbox from './components/mapbox/Mapbox.js';
import FarmCardsContainer from './components/FarmCardsContainer';
import MobileFooter from './components/MobileFooter';
import AboutContent from './components/AboutContent';
import { ViewportContextController } from './context/ViewportContext';
import { FarmsContextController } from './context/FarmsContext.js';
import farmListLogo from './resources/images/farmlist_cropped_logo.jpg';

const App = props => {
    const classes = useStyles();
    const { Content, Header } = Layout;
    const [drawerVisible, setDrawerVisible] = useState(true);
    const [showDescription, setShowDescription] = useState(false);

    return (
        <Div100vh>
            <Layout className={classes.base}>
                <Header className={classes.header}>
                    <img
                        className={classes.logo}
                        src={farmListLogo}
                        alt="farmlist_logo"
                    />
                    <h3>Master git branch</h3>
                    <h3 className={classes.about_link}>
                        <a
                            className={classes.about}
                            onClick={() => {
                                setShowDescription(!showDescription);
                            }}
                        >
                            About
                        </a>
                    </h3>
                </Header>
                <Content>
                    {showDescription ? <AboutContent /> : null}
                    <FarmsContextController>
                        <ViewportContextController>
                            <Mapbox />
                            <div className={classes.cardPadding}>
                                <FarmCardsContainer
                                    drawerVisible={drawerVisible}
                                    setDrawerVisible={setDrawerVisible}
                                />
                            </div>
                        </ViewportContextController>
                    </FarmsContextController>
                </Content>
                <MobileFooter setDrawerVisible={setDrawerVisible} />
            </Layout>
        </Div100vh>
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
        backgroundColor: 'white',
        display: 'flex',
        'justify-content': 'space-between',
        'align-items': 'center'
    },
    cardPadding: {
        padding: 20
    },
    mapCard: {
        position: 'absolute'
    },
    logo: {
        height: '80%'
    },
    about_link: {
        'padding-top': '8px'
    },
    '@media (max-width: 575px)': {
        cardPadding: {
            display: 'none'
        }
    }
});

export default App;
