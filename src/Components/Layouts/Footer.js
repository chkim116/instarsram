import styled from "styled-components";
import React from "react";

const WrapFooter = styled.footer`
  display: flex;
  padding: 1em;
  align-items: center;
  margin-bottom: 1.1em;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0;
    margin-top: -3em;
    li {
      margin-bottom: 0.3em;
    }
  }
  li {
    list-style: none;
    margin-right: 1em;
    font-size: small;
    cursor: pointer;
    color: #00376b;
  }
  span {
    color: #8e8e8e;
    font-weight: bold;
  }
`;

const Footer = () => {
  return (
    <>
      <WrapFooter>
        <li>소개</li>
        <li>도움말</li>
        <li>API</li>
        <li>약관</li>
        <li>위치</li>
        <li>언어</li>
        <li>해시태그</li>
        <span>
          <small>& 2020 INSTARGURAM FROM FACEBOOK</small>
        </span>
      </WrapFooter>
    </>
  );
};

export default Footer;
