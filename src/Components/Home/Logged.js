import Header from "../Layouts/Header";
import React from "react";
import Board from "./Board";
import styled from "styled-components";
import profileImg from "../../images/profile.png";
import boardImg1 from "../../images/board1.png";
import boardImg2 from "../../images/board2.png";

const WrapContent = styled.div`
  width: 100%;
  position: fixed;
  height: 54px;
  border-bottom: 1px solid #dbdbdb;
  top: 0;
  background: #ffffff;
`;

const WrapWidth = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
`;

export default function Logged() {
  return (
    <>
      <WrapContent>
        <Header profileImg={profileImg} />
      </WrapContent>
      <WrapWidth>
        <Board
          profileImg={profileImg}
          boardImg1={boardImg1}
          boardImg2={boardImg2}
        />
      </WrapWidth>
      <hr />
    </>
  );
}
