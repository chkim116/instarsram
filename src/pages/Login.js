import Logged from "../Components/Home/Logged";
import React, { useState } from "react";
import { NotLogged } from "../Components/Login/NotLogged";
import { useSelector } from "react-redux";

export const Login = () => {
  const [change, setChange] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setChange(true);
  };

  return (
    <>
      {change ? (
        <Logged />
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>
            로그인을 클릭하시면 로그인 된 페이지로 이동합니다
          </h2>
          <NotLogged onSubmit={onSubmit} change={change} />
        </>
      )}
    </>
  );
};
