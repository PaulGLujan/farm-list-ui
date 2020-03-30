import React from 'react';
import { Layout } from 'antd';
import { createUseStyles } from 'react-jss';
import Mapbox from './components/Mapbox.js';
import FarmCardsContainer from './components/FarmCardsContainer';
import GlobalState from './context/GlobalState';

const { Content, Header } = Layout;

const App = props => {
  const classes = useStyles();
  return (
    <GlobalState>
      <Layout>
        <Header className={classes.header}>
          <h1>Help Local Farms, Fishers, and Ranchers</h1>
        </Header>
        <Content>
          <Mapbox />
          <div className={classes.cardPadding}>
            <FarmCardsContainer />
          </div>
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
