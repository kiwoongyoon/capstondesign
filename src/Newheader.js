import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./main.css";

const Newp = styled.p`
  width: 230px;
  margin: 0px;
`;
const Newheader = () => {
  return (
    <header>
      <div class="header-div">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            class="header-logo"
            href="/"
            aria-label="Stress-Free Home Page"
          />
        </Link>
      </div>
    </header>
  );
};
export default Newheader;
