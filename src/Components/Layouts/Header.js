import styled from "styled-components";
import React, { useState } from "react";
import { FiHome, FiHeart, FiFlag, FiSettings } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { ImCompass2 } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Headers = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  padding: 0.8em;
  max-width: 1200px;
`;

const Logo = styled.h3`
  flex: 1;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const NavItems = styled.div`
  margin: 0 0.8em;
  cursor: pointer;
  font-size: 0.8rem;
`;

const NavProfile = styled.ul`
  position: absolute;
  top: 60px;
  height: 140px;
  right: 2%;
  width: 23%;
  box-shadow: 0.3px 0.3px 2px 1px #dbdbdb;
  background: white;
  display: ${(props) => (props.disPlay ? "none" : "block")};
  p {
    padding-left: 0.5em;
  }
  & > li {
    padding: 0.5em;
    font-size: 0.8rem;
    display: flex;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const SearchInput = styled.input`
  padding: 0.3em 1.2em;
  flex: 1;
  text-align: center;
  outline: none;
  border: 1px solid #dbdbdb;
  &:focus {
    text-align: left;
    padding-left: 0.3em;
  }
`;

const WrapImage = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export default function Header({ profileImg }) {
  const [disPlay, setDisPlay] = useState(true);
  const onClick = () => {
    disPlay ? setDisPlay(false) : setDisPlay(true);
  };

  return (
    <>
      <Headers>
        <Logo>Instarsram</Logo>
        <div>
          <SearchInput type="text" placeholder="검색" />
        </div>
        <Nav>
          <NavItems>
            <Link to="/">
              <FiHome size={26} />
            </Link>
          </NavItems>
          <NavItems>
            <Link to="#">
              <AiOutlineMessage size={26} />
            </Link>
          </NavItems>
          <NavItems>
            <Link to="#">
              <ImCompass2 size={26} />
            </Link>
          </NavItems>
          <NavItems>
            <FiHeart size={26} />
          </NavItems>
          <NavItems>
            <WrapImage>
              <img src={profileImg} alt="Profile" onClick={onClick} />
            </WrapImage>
            <NavProfile disPlay={disPlay}>
              <li>
                <CgProfile size={18} />
                <p>프로필</p>
              </li>
              <li>
                <FiFlag size={18} />
                <p>저장됨</p>
              </li>
              <li>
                <FiSettings size={18} />
                <p>설정</p>
              </li>
              <hr />
              <p>로그아웃</p>
            </NavProfile>
          </NavItems>
        </Nav>
      </Headers>
    </>
  );
}
