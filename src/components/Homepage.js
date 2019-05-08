import React, { useState } from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom"
import Nav from './Nav'

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

const Homepage = () => {

  return (
    <div className="homePage">
    <Nav />
      <style>
        {`
                    body > div,
                    body > div > div,
                    body > div > div > div.homePage {
                        height: 100%;
                    }
                `}
      </style>
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <h1>
              Welcome to <span id="donors">Donors</span><span id="list">List</span>
            </h1>
            <Image src="/careportal.png" /> Log-in to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                value="user@gmail.com"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value="password"
              />
                <Button as={NavLink} to="/donate" color="orange">
                  I am a Donor
                </Button>
                <Button as={NavLink} to="/admin" color="teal">
                  I am an Admin
                </Button>
            </Segment>
          </Form>
          <Message>
            Want to make a difference?{" "}
            <NavLink to="/signup">Sign Up</NavLink>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Homepage;
