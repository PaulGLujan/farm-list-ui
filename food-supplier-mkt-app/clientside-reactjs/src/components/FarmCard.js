import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Typography, Button, Avatar, Tag, Divider } from 'antd';

const FarmCard = ({ data }) => {
  const { Name, Type, WebsiteURL, ImageURL, Tags } = data;
  const { Text } = Typography;
  const classes = useStyles();
  const { tagStyles, avatarStyle, buttons, indentedRow, divider, containerRow} = classes;

  const handleWebsiteClick = () => {
    window.open(WebsiteURL);
  };

  return (
    <>
      <Row className={containerRow} justify="space-between" align="middle">
        <Col span={5} align="center">
          <Avatar
            justify="center"
            align="middle"
            shape="square"
            size={58}
            src={ImageURL}
            alt={Name}
            className={avatarStyle}
          ></Avatar>
        </Col>
        <Col span={14}>
          <Row>
            <Text strong>{Name}</Text>
          </Row>
          <Row className={indentedRow}>
              {Type.map(type => (
                <Tag className={tagStyles} color="purple">{type}</Tag>
              ))}
          </Row>
          <Row className={indentedRow}>
            {Tags.map(tag => (
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
        </Col>
      </Row>
      <Divider className={divider}></Divider>
    </>
  );
};

const useStyles = createUseStyles({
  avatarStyle: {
    border: '1px solid grey',
    '& img': {
      objectFit: 'contain'
    }
  },
  buttons: {
    margin: '2px 0'
  },
  tagStyles: {
    margin: '2px 2px 2px 0'
  },
  containerRow: {
    margin: '0 10px 0 0'
  },
  indentedRow: {
    paddingLeft: 8,
  },
  divider: {
    margin: 10
  }
});

export default FarmCard;
