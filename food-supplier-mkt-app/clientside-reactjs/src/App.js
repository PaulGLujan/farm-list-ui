import React from 'react';
import { Card, Layout } from 'antd';
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
          <Card
            title="Default size card"
            style={{ width: 300 }}
            className={classes.mapCard}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
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
