import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styled from "styled-components";
const Styleddiv = styled.div`
  margin: 4rem;
`;
const ChooseWay = () => {
  return (
    <>
      <Header />
      <Styleddiv>
        <Link to="./getvoice" style={{ textDecoration: "none" }}>
          <Button>말로 하기</Button>
        </Link>
        <Link to="./gettext" style={{ textDecoration: "none" }}>
          <Button>글로 적기</Button>
        </Link>
      </Styleddiv>
    </>
  );
};
export default ChooseWay;
