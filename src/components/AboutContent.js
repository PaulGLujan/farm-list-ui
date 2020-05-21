import React from 'react';
import { createUseStyles } from 'react-jss';

const AboutContent = () => {
    const classes = useStyles();
    return (
        <div className={classes.base}>
            <p id="about">
                The farm-to-table supply chain is deeply affected by the
                Covid-19 pandemic. Restaurants are hurting and so are many of
                the country's finest farmers that supply them. Farmlist is an
                online resource connecting the consumers to ranchers, fishermen,
                vegetable, dairy, and poultry farmers in the U.S. These farmers
                are now selling direct to consumer, whether it's through a CSA
                or a webstore, in some cases for the first time. Our goal is to
                highlight these amazing purveyors and connect them with
                passionate people who want access to their products. If you're a
                farmer or supplier and would like to be added to our list,
                please shoot an email over to codybreene@gmail.com and we'll add
                you to Farmlist.
            </p>
        </div>
    );
};

const useStyles = createUseStyles({
    base: {
        padding: '13px 36px',
        '& p': {
            margin: 0
        }
    }
});

export default AboutContent;
