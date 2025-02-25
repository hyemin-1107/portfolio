import React, { useState, useEffect } from "react";
import Observation from "../utills/Observation";
import useSetShow from "../utills/useSetShow";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

const SideNav = () => {
  const [activeId, setActiveId] = useState(" ");
  Observation(setActiveId);

  const [showNav, setShowNav] = useState(false);
  useSetShow(setShowNav);

  useEffect(() => {
    const handleSideNav = () => {
      if (window.scrollY > 400) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("scroll", handleSideNav);
    return () => {
      window.removeEventListener("scroll", handleSideNav);
    };
  }, []);

  return (
    <>
      {showNav && (
        <Nav>
          <Link to="nav_skill" smooth={true} style={{ cursor: "pointer" }}>
            <div className={activeId === "content_skill" ? "active" : ""}>
              1. Skill
            </div>
          </Link>
          <div>2. Project</div>
          <Link to="nav_subproject" smooth={true} style={{ cursor: "pointer" }}>
            <p className={activeId === "content_subproject" ? "active" : ""}>
              2.1 Toy Project
            </p>
          </Link>
          <Link
            to="nav_projectclone"
            smooth={true}
            style={{ cursor: "pointer" }}
          >
            <p className={activeId === "content_clone" ? "active" : ""}>
              2.2 Clone Coding
            </p>
          </Link>
          <Link
            to="nav_projectportfolio"
            smooth={true}
            style={{ cursor: "pointer" }}
          >
            <p className={activeId === "content_portfolio" ? "active" : ""}>
              2.3 Portfolio
            </p>
          </Link>
          <Link to="nav_projectaws" smooth={true} style={{ cursor: "pointer" }}>
            <p className={activeId === "content_aws" ? "active" : ""}>
              2.4 AWS 배포
            </p>
          </Link>
          <Link to="nav_contact" smooth={true} style={{ cursor: "pointer" }}>
            <div className={activeId === "content_contact" ? "active" : ""}>
              {/* <div props = {activeId === ContactWrap ? Active : ""}> */}
              3. Contact
            </div>
          </Link>
        </Nav>
      )}
    </>
  );
};

export default SideNav;

const fadeInRight = keyframes`
	0% {
		opacity: 0;
		transform: translate3d(30%, 0, 0);
	}
	100% {
		opacity: 1;
		transform: translateZ(0);
	}
`;

const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  z-index: 100;

  padding-top: 200px;

  height: 100vh;
  background-color: rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  animation: ${fadeInRight} 2s ease-out;

  div {
    width: 158px;
    margin: 10px 18px;
  }

  p {
    margin: 10px 10px 10px 22px;
    font-size: 14px;
  }

  :hover {
    font-weight: 500;
  }

  :nth-child(2):hover {
    font-weight: 400;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
