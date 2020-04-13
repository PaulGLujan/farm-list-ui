import React, {useState} from 'react';
import { Layout } from 'antd';
import { createUseStyles } from 'react-jss';
import Mapbox from './components/mapbox/Mapbox.js';
import FarmCardsContainer from './components/FarmCardsContainer';
import GlobalState from './context/GlobalState';
import { ViewportContextController } from './context/ViewportContext';

const App = props => {
    const classes = useStyles();
    const { Content, Header } = Layout;
    const [drawerVisible, setDrawerVisible] = useState(true);

    return (
        <GlobalState>
            <Layout>
                <Header className={classes.header} onClick={()=>{setDrawerVisible(true)}}>
                    <h1>Help Local Farms, Fishers, and Ranchers <span>SEARCH</span></h1>
                </Header>
                <Content>
                    <ViewportContextController>
                        <Mapbox />
                        <div className={classes.cardPadding}>
                            <FarmCardsContainer drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
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
