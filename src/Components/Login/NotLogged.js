import Footer from "../Layouts/Footer";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../../images/iphone.png";
import phoneImg1 from "../../images/instar1.png";
import phoneImg2 from "../../images/instar2.png";
import phoneImg3 from "../../images/instar3.png";
import React, { useEffect } from "react";

const WrapLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  min-height: 800px;
  img {
    height: 420px;
    width: 412px;
    margin-bottom: 5em;
    position: relative;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

const ImageSlider = styled.div`
  position: relative;
  top: -12.125em;
  left: -23.64em;
  background: white;
  img {
    position: absolute;
    width: 181px;
    height: 311px;
    transition: all 1000ms;
    opacity: 0;
    &.showing {
      opacity: 1;
    }
  }
`;

const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapForm = styled.form`
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0.7em;
  min-width: 350px;
  min-height: 380px;
  background: white;
  h2 {
    padding: 1.5em;
    font-size: 2rem;
  }
  input {
    padding: 0.8em;
    width: 250px;
    margin: 0 auto;
    margin-bottom: 1em;
    border: 1px solid #dbdbdb;
  }
  button {
    margin-top: 0.3em;
    width: 220px;
    background: #0095f6;
    padding: 0.5em 1em;
    color: white;
    font-weight: bold;
    border-radius: 8px;
  }
  span {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  a {
    margin: 0.6em 0;
  }
`;

const FacebookLogin = styled.a`
  color: #385185;
  cursor: pointer;
`;

const Register = styled.div`
  width: 350px;
  border: 1px solid #dbdbdb;
  background: white;
  margin: 1em 0;
  padding: 1.4em;
  display: flex;
  justify-content: center;
  span {
    margin-left: 0.3em;
    padding: 1.4em;
    color: #0095f6;
    cursor: pointer;
  }
`;

const WrapInstallBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
  button {
    width: 100px;
    padding: 0.8em;
    margin: 0 0.4em;
    background: black;
    border-radius: 8px;
    color: white;
  }
`;

const changeImg = () => {
  const firstImg = document.querySelector(".img:first-child");
  const currentImg = document.querySelector(".showing");
  if (!currentImg) return;
  if (currentImg) {
    currentImg.classList.remove("showing");
    const nextImg = currentImg.nextElementSibling;
    if (nextImg) nextImg.classList.add("showing");
    else firstImg.classList.add("showing");
  } else firstImg.classList.add("showing");
};

export const NotLogged = ({ onSubmit, change, onChange }) => {
  const Interval = () => {
    if (!change) {
      setInterval(() => {
        changeImg();
      }, 3500);
    }
  };

  useEffect(() => {
    Interval();
  }, []);

  return (
    <>
      <WrapLogin>
        <img src={image} alt="bg" />
        <ImageSlider>
          <img src={phoneImg1} className="img showing" alt="bg" />
          <img src={phoneImg2} className="img" alt="bg" />
          <img src={phoneImg3} className="img" alt="bg" />
        </ImageSlider>

        <WrapInfo>
          <WrapForm onSubmit={onSubmit} onChange={onChange}>
            <h2>Instarsram</h2>
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            ></input>
            <input type="password" placeholder="비밀번호"></input>
            <button type="submit">로그인</button>
            <span>또는</span>
            <Link to="#">
              <FacebookLogin>Facebook으로 로그인</FacebookLogin>
            </Link>
            <Link to="#">
              <small>비밀번호를 잊으셨나요?</small>
            </Link>
          </WrapForm>
          <Register>
            <h4>계정이 없으신가요?</h4>
            <span>가입하기</span>
          </Register>
          <h5>앱을 다운로드 하세요.</h5>
          <WrapInstallBtn>
            <button>AppStore</button>
            <button>GooglePlay</button>
          </WrapInstallBtn>
        </WrapInfo>
      </WrapLogin>
      <Footer />
    </>
  );
};
