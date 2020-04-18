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

const App = props => {
    const classes = useStyles();
    const { Content, Header } = Layout;
    const [drawerVisible, setDrawerVisible] = useState(true);

    return (
        <Div100vh>
            <Layout className={classes.base}>
                <Header className={classes.header}>
                  <img 
                    className={classes.logo} 
                    src='farmlist_cropped_logo.jpg' 
                    alt="farmlist_logo">
                  </img>
                  <h3><a className={classes.about} href="#about">About</a></h3>
                </Header>
                <Content>
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
            <AboutContent id="about"/>
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
        height: '80%',
    },
    '@media (max-width: 575px)': {
        cardPadding: {
            display: 'none'
        }
    }
});

export default App;
