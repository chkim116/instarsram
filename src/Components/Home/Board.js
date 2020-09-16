import styled from "styled-components";
import Comments from "./Comments";
import React from "react";

const WrapBoard = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 2em;
`;

const SliderIcons = styled.div`
  border: 1px solid #dbdbdb;
  margin: 1em;
  height: 118px;
  display: flex;
  flex-wrap: no-wrap;
  padding: 1.3em 1em;
  overflow: hidden;
  div {
    display: flex;
    flex-direction: column;
    margin-right: 1em;
    img {
      border: 2px solid #dd4183;
      width: 66px;
      padding: 0.13em;
      border-radius: 50%;
      cursor: pointer;
      height: 66px;
    }
    small {
      text-align: center;
      margin-top: 0.7em;
    }
  }
`;

const BoardContents = styled.div`
  margin: 1em;
  border: 1px solid #dbdbdb;
  margin-bottom: 5em;
`;

const BoardCreator = styled.div`
  border-bottom: 1px solid #dbdbdb;
  padding: 1.3em;
  position: relative;
  display: flex;
  span {
    line-height: 35px;
  }
  span:nth-child(3) {
    position: absolute;
    right: 3%;
    top: 10px;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const WrapImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const BoardImg = styled.div`
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  height: 614px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default function Board({ profileImg, boardImg1, boardImg2 }) {
  return (
    <WrapBoard>
      <SliderIcons>
        <div>
          <img src={profileImg} alt="SliderImg" />
          <small>chkim116</small>
        </div>
        <div>
          <img src={profileImg} alt="SliderImg" />
          <small>chkim116</small>
        </div>
        <div>
          <img src={profileImg} alt="SliderImg" />
          <small>chkim116</small>
        </div>
        <div>
          <img src={profileImg} alt="SliderImg" />
          <small>chkim116</small>
        </div>
        <div>
          <img src={profileImg} alt="SliderImg" />
          <small>chkim116</small>
        </div>
        <div>
          <img src={profileImg} alt="SliderImg" />
          <small>chkim116</small>
        </div>
        <div>
          <img src={profileImg} alt="SliderImg" />
          <small>chkim116</small>
        </div>
        <div>
          <img src={profileImg} alt="SliderImg" />
          <small>chkim116</small>
        </div>
        <div>
          <img src={profileImg} alt="SliderImg" />
          <small>chkim116</small>
        </div>
      </SliderIcons>
      {/* 이미지 슬라이더는 다음에 */}
      <BoardContents>
        <BoardCreator>
          <WrapImage>
            <img src={profileImg} alt="CreatorImg" />
          </WrapImage>
          <span>chkim116</span>
          <span>...</span>
        </BoardCreator>
        <BoardImg>
          <img src={profileImg} alt="MainImg" />
        </BoardImg>
        <Comments />
      </BoardContents>

      <BoardContents>
        <BoardCreator>
          <WrapImage>
            <img src={boardImg1} alt="CreatorImg" />
          </WrapImage>
          <span>chkim116</span>
          <span>...</span>
        </BoardCreator>
        <BoardImg>
          <img src={boardImg1} alt="MainImg" />
        </BoardImg>
        <Comments />
      </BoardContents>

      <BoardContents>
        <BoardCreator>
          <WrapImage>
            <img src={boardImg2} alt="CreatorImg" />
          </WrapImage>
          <span>chkim116</span>
          <span>...</span>
        </BoardCreator>
        <BoardImg>
          <img src={boardImg2} alt="MainImg" />
        </BoardImg>
        <Comments />
      </BoardContents>
    </WrapBoard>
  );
}
