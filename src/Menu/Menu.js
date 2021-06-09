import React from 'react';
import MenuEntry from '../MenuEntry/MenuEntry';
import classes from './Menu.module.css';

const Menu = (props) => {

    const { content } = props;

    return (
        <div className={classes.Menu}>
            { content.map(item => <MenuEntry background={item.background} key={item.id}>{item.name}</MenuEntry>
            )}
        </div>
    )
}

export default Menu;