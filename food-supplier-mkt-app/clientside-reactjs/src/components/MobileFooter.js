import React from 'react';
import { createUseStyles } from 'react-jss';
import { SearchOutlined } from '@ant-design/icons';

const MobileFooter = ({ setDrawerVisible }) => {
    const classes = useStyles();
    return (
        <div
            className={classes.base}
            onClick={() => {
                setDrawerVisible(true);
            }}
        >
            <SearchOutlined className={classes.searchIcon} />
        </div>
    );
};

const useStyles = createUseStyles({
    base: {
        height: 60,
        backgroundColor: '#f2f4f5',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        textAlign: 'center'
    },
    searchIcon: {
        fontSize: 32,
        marginTop: 12
    },
    '@media (min-width: 575px)': {
        base: {
            display: 'none'
        }
    }
});

export default MobileFooter;
