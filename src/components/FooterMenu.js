import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { BrowserRouter as Link } from 'react-router-dom';

const FooterMenu = props => {
  return (
    <Menu id="footerMenu" widths={4} icon>
      <Link to="/">
        <Menu.Item name="chevron circle left">
          <Icon name="chevron circle left" />
        </Menu.Item>
      </Link>

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
  );
};

export default FooterMenu;
