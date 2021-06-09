import React from 'react';
import classes from './MenuEntry.module.css';

const MenuEntry = (props) => {

    const { background, children } = props;

    return (
        <div style={{backgroundColor: background}} className={classes.MenuEntry}>
            {children}
        </div>
    );
}

export default MenuEntry;