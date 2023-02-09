import React, { useState, useEffect } from 'react'
import './BlogForm.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [clickCondition, setClickCondition] = useState(true);
  const authRedux = useSelector((state) => {
    return state.auth.isloggedIn;
  });
  const navigation = useNavigate();

  const handlePostClick = () => {
    axios.post('http://localhost:3004/posts', {
      title: title,
      desc: desc,
      created_At: Date.now(),
      author: localStorage.getItem('isLoggedIn'),
    }).then((res) => {
      console.log('res', res);
      setTitle('');
      setDesc('');
      window.location.replace('/');
    })
  };

  useEffect(() => {
    if(title !== '' && desc !== '') {
      setClickCondition(false);
    } else {
      setClickCondition(true);
    }
  }, [title, desc]);
  
  return (
    <div>
      <h2>글 쓰기</h2>
      <div className='input-form'>
        <label>제목</label>
        <input className='input-title' type='text' name='title' 
          value={title}
          onChange={(e) => {
            if(authRedux) {
              setTitle(e.target.value);
            } else {
              alert('로그인이 필요합니다.');
              navigation('login');
            }
          }}
        />
        <label>내용</label>
        <textarea className='input-desc' type='text' rows='20' name='description'
          value={desc}
          onChange={(e) => {
            if(authRedux) {
              setDesc(e.target.value);
            } else {
              alert('로그인이 필요합니다.');
              navigation('login');
            }
          }}
        />
      </div>
      <div className='post-btn'>
        <button disabled={clickCondition} onClick={handlePostClick}>post</button>
      </div>
    </div>
  )
}

export default BlogForm