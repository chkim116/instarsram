import { Link } from "react-router-dom";
import { FiHeart, FiFlag, FiMessageCircle } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

const CommentsIcons = styled.div`
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  svg {
    cursor: pointer;
    margin-right: 0.3em;
  }
`;

const BoardLike = styled.div`
  padding: 0.5em 1em;
  font-weight: bold;
  font-size: small;
`;

const CommentsId = styled.div`
  padding: 0.5em 1em;
  & > small {
    font-weight: bold;
  }
  span {
    margin-left: 0.5em;
  }
`;

const CommentsUsers = styled.div`
  padding: 0.5em 1em;
  & > small:nth-child(1) {
    text-decoration: underline;
    cursor: pointer;
    color: #8e8e8e;
  }
`;

const Comment = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  display: block;
  div {
    margin-bottom: 0.4em;
    strong {
      margin-right: 0.8em;
    }
  }
`;

const CommentsBoard = styled.form`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dbdbdb;
  width: 100%;
  padding: 0.5em 1em;
  input {
    all: unset;
    padding: 0.5em 1em 0.5em 0;
  }
  & > input:nth-child(1) {
    width: 70%;
  }
  & > input:nth-child(2) {
    color: blue;
    cursor: pointer;
  }
`;

export default function Comments() {
  // 좋아요 관리

  const [like, setLike] = useState({ fill: "", color: "" });
  const [likeCounter, setLikeCounter] = useState({ counter: 0 });
  const { counter } = likeCounter;

  const onClickLike = () => {
    const { fill } = like;
    if (!fill) {
      setLike({ ...like, fill: "red", color: "red" });
      setLikeCounter({ ...likeCounter, counter: counter + 1 });
    } else {
      setLike({
        ...like,
        fill: "",
        color: "",
      });
      setLikeCounter({ ...likeCounter, counter: counter - 1 });
    }
  };

  // 저장 관리
  const [save, setSave] = useState({ fill: "", message: "" });
  const onClickSave = () => {
    const { fill } = save;
    if (!fill) setSave({ ...save, fill: "black", message: "저장됨" });
    else setSave({ ...save, fill: "", message: "" });
  };

  // 코멘트 기능 관리
  const [input, setInput] = useState({ text: "", user: "" });
  const [comment, setComment] = useState([
    { user: "아이디", text: "댓글을 입력해 보세요!" },
  ]);

  const { text, user } = input;

  const onSubmit = (e) => {
    e.preventDefault();
    comment.length > 4 && setShowComments(false);
    text !== ""
      ? setComment(comment.concat({ user, text }))
      : alert("댓글을 입력하세요.");
    setInput({ ...input, text: "" });
  };

  const onChange = (e) => {
    setInput({ ...input, text: e.target.value, user: "아이디" });
  };

  const onClickComments = (e) => {
    comment.slice(0, comment.length);
    showComments ? setShowComments(false) : setShowComments(true);
  };

  const [showComments, setShowComments] = useState(true);

  useEffect(() => {
    if (comment.length > 4) {
      return setShowComments(false);
    } else return;
  }, [comment]);

  return (
    <>
      <CommentsIcons>
        <div>
          <FiHeart style={like} onClick={onClickLike} size={26} />
          <Link to="#">
            <FiMessageCircle size={26} />
          </Link>
          <Link to="#">
            <AiOutlineMessage size={26} />
          </Link>
        </div>
        <div>
          <FiFlag style={save} onClick={onClickSave} size={26} />
          {
            save.message && <div>저장됨</div>
            // 알림 메시지로 바꿀 것
          }
        </div>
      </CommentsIcons>
      {counter ? <BoardLike>좋아요 {counter}명 </BoardLike> : <> </>}

      <CommentsId>
        <small>chkim116</small>
        <span>
          <small>Good Morning</small>
        </span>
      </CommentsId>
      <CommentsUsers>
        {comment.length > 4 && (
          <small onClick={onClickComments}>
            댓글 {comment.length}개 모두 보기
          </small>
        )}
        <Comment>
          {!showComments ? (
            <div>
              <small>
                <strong>{comment.slice(-1)[0].user}</strong>
                <small>{comment.slice(-1)[0].text}</small>
              </small>
            </div>
          ) : (
            comment.map((text, index) => (
              <div key={index}>
                <small>
                  <strong>{text.user}</strong>
                  <small>{text.text}</small>
                </small>
              </div>
            ))
          )}
        </Comment>
      </CommentsUsers>
      <CommentsBoard onChange={onChange} onSubmit={onSubmit}>
        <input type="text" placeholder="댓글 달기..." value={text} />
        <input type="submit" value="게시" />
      </CommentsBoard>
    </>
  );
}
