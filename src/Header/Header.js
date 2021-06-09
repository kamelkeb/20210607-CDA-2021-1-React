import React from 'react';
import classes from './Header.module.css';
import LeftIconGroup from '../LeftIconGroup/LeftIconGroup';
import CentralMessage from '../CentralMessage/CentralMessage';

const Header = (props) => {

    const { pseudo, message, children } = props;

    return (
        <div className={classes.maDiv}>
            <LeftIconGroup />
            <CentralMessage pseudo={pseudo} message={message} />
            {children}
        </div>
    )
}

export default Header;