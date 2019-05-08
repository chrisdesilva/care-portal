import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { BrowserRouter as Link, Route } from "react-router-dom";


const FooterMenu = props => {
  return (
    <div>
      <Menu id="footerMenu" widths={4} icon>
        <Menu.Item name="chevron circle left">
          <Link to="/">
            <Icon name="chevron circle left" />
          </Link>
        </Menu.Item>

        <Menu.Item name="home">
          <Icon onClick={props.home} name="home" />
        </Menu.Item>

        <Menu.Item name="mail">
          <Icon name="mail" />
        </Menu.Item>

        <Menu.Item name="globe">
          <Icon name="globe" />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default FooterMenu;
