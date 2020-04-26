import React, { Component } from "react";
import "./sass/App.scss";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
  FooterLinkList
} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header
            className="header-color"
            title={
              <Link to="/">
                <img
                  style={{ maxHeight: "40px" }}
                  src="/images/daniel-gundersen-logo.svg"
                  alt="logo"
                />
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link className="link-hover grow" to="/aboutme">
                About Me
              </Link>
              <Link className="link-hover grow" to="/resume">
                My CV
              </Link>
              <Link className="link-hover grow" to="/contact">
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                My portfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/aboutme">About me</Link>
              <Link to="/resume">My CV</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>

          <Footer className="footer-color" size="mini">
            <FooterSection type="left" logo="My portfolio">
              <FooterLinkList>
                <Link to="/aboutme">About me</Link>
                <Link to="/resume">My CV</Link>
                <Link to="/contact">Contact</Link>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
