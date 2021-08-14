import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './QuoraBox.css';

function QuoraBox() {
  const user = useSelector(selectUser);

  return (
    <div className="quoraBox">
      <div className="quoraBox_info">
        <Avatar src={user.photo} />
        <h5>{user.displayName}</h5>
      </div>
      <div className="quoraBox_quora">
        <p>
          기능 구현 항목
          <br />
          <br />
          <span>
            로그인, 로그아웃, 회원가입, 구글(로그인, 로그아웃, 회원 가입),
            질문하기, 답변달기
          </span>
        </p>
      </div>
    </div>
  );
}

export default QuoraBox;
