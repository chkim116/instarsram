// import Logged from "../Components/Home/Logged";
import React from "react";
import NotLogged from "../Components/Login/NotLogged";

export const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/home";
  };

  return (
    <>
      {/* 유저 로그인 여부에 따른 렌더링 페이지 */}
      {/* <Logged /> */}
      <h2 style={{ textAlign: "center" }}>
        로그인을 클릭하시면 로그인 된 페이지로 이동합니다
      </h2>
      <NotLogged onSubmit={onSubmit} />
    </>
  );
};
