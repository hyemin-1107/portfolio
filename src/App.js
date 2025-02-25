import React from "react";
import styled from "styled-components";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import AboutContents from "./components/AboutContents";
import ContactContents from "./components/ContactContents";
import FooterContents from "./components/FooterContents";
import ScrollTopButtonContents from "./components/ScrollTopButtonContents";
import ProjectContents from "./components/ProjectContents";

function App() {
  return (
    <Body>
      <Main />
      <SideNav />
      <AboutContents />
      <ProjectContents />
      <ContactContents />
      <FooterContents />
      <ScrollTopButtonContents />
    </Body>
  );
}

export default App;

const Body = styled.body`
  margin: 0 auto;

  width: 1100px;

  @media (width < 768px) {
    width: 100%;
  }
`;
