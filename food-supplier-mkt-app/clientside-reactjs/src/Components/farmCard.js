import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Typography, Button, Avatar, Tag, Divider } from 'antd';

const Farm = ({ data }) => {
  const { name, type, websiteURL, imageURL, tags } = data;
  const { Text } = Typography;

  const handleWebsiteClick = () => {
    window.open(websiteURL);
  };

  const handleLocationsClick = () => {
    // TODO: Handle Location mapping
  };

  const classes = useStyles();
  const { tagStyles, avatarStyle, buttons, indentedRow } = classes;

  return (
    <>
      <Row justify="space-between" align="middle">
        <Col span={5} align="center">
          <Avatar
            justify="center"
            align="middle"
            shape="square"
            size={58}
            src={imageURL}
            alt={name}
            className={avatarStyle}
          ></Avatar>
        </Col>
        <Col span={14}>
          <Row>
            <Text strong>{name}</Text>
          </Row>
          <Row className={indentedRow}>
            <Tag className={tagStyles} color="purple">
              {type}
            </Tag>
          </Row>
          <Row className={indentedRow}>
            {tags.map(tag => (
              <Tag className={tagStyles} color="cyan">{tag}</Tag>
            ))}
          </Row>
        </Col>
        <Col span={5} align="center">
          <Button
            className={buttons}
            size="small"
            type="primary"
            onClick={handleWebsiteClick}
          >
            Website
          </Button>
          <Button
            className={buttons}
            size="small"
            type="primary"
            onClick={handleLocationsClick}
          >
            Directions
          </Button>
        </Col>
      </Row>
      <Divider style={{ margin: 10 }}></Divider>
    </>
  );
};

const useStyles = createUseStyles({
  avatarStyle: {
    border: '1px solid grey'
  },
  buttons: {
    margin: '2px 0'
  },
  tagStyles: {
    margin: '2px 2px 2px 0'
  },
  indentedRow: {
    paddingLeft: 8
  }
});

export default Farm;
