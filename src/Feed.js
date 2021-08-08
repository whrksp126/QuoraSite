import React, { useEffect, useState } from 'react';
import './Feed.css';
import QuoraBox from './QuoraBox';
import Post from './Post';
import db from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('questions')
      .orderBy('timestamp', 'desc') // db 에서 데이터를 가져오는 순서, 서버의 작성시간 순서로 내림차순(최신이 위로)
      .onSnapshot(
        (
          snapshot // 현재의 db 의 상태를 사진을 찍어서 가져온다
        ) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              // 사진을 찍어둔 모든 데이터를 새로운 배열로 만들어서 포스트 안에 넣어준다
              id: doc.id,
              question: doc.data(),
            }))
          )
      );
  }, []);

  return (
    <div className="feed">
      <QuoraBox />
      {posts.map(({ id, question }) => (
        <Post
          key={id}
          Id={id}
          image={question.imageUrl}
          question={question.question}
          timestamp={question.timestamp}
          quoraUser={question.user}
        />
      ))}
    </div>
  );
}

export default Feed;
