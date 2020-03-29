import React from 'react';
import { Layout } from 'antd';
import { createUseStyles } from 'react-jss';
import Mapbox from './Mapbox.js';
import FarmCards from './Components/farmCards.container';

const { Content, Header } = Layout;

const App = props => {
  const classes = useStyles();
  return (
    <Layout>
      <Header className={classes.header}>
        <h1> Save Our Farms</h1>
      </Header>
      <Content>
        <Mapbox />
        <div className={classes.cardPadding}>
          <FarmCards></FarmCards>
        </div>
      </Content>
    </Layout>
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
