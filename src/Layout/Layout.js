import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import classes from "./Layout.module.css";

const Layout = ({ menuContent, headerContent, children }) => {
  const { user, content } = headerContent;
  return (
    <div className={classes.Layout}>
      <Header
        pseudo={user.firstname}
        message={content.greetingMessage}
      ></Header>
      <Menu content={menuContent}></Menu>
      {children}
    </div>
  );
};

export default Layout;
