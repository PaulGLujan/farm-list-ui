import React from 'react';
import { Layout } from 'antd';
import Mapbox from './Mapbox.js';

const { Content, Header } = Layout;

export default function App(props) {
  return (
    <Layout>
      <Header>Save Our Farms</Header>
      <Content>
        <Mapbox />
      </Content>
    </Layout>
  );
}
