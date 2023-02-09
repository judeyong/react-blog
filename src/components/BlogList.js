import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const BlogList = ({ setSelectTitle, setSelectDesc , detailModal, setSelectId, setselectPostAuthor, setSelectCreatedAt
 }) => {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigate();
  const authRedux = useSelector((state) => {
    return state.auth.isloggedIn;
  });

  const Blogs = () => {
    axios.get('http://localhost:3004/posts?_sort=created_At&_order=desc')
    .then((res) => {
      //console.log('res ', res.data);
      setPosts(res.data);
    })
  };

  useEffect(() => {
    Blogs();
  }, []);
  
  const selectPost = (data) => {
    detailModal();
    setSelectTitle(data.title);
    setSelectDesc(data.desc);
    setSelectId(data.id);
    setselectPostAuthor(data.author);
    setSelectCreatedAt(data.created_At)
  };

  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div>
      <h2>글 목록</h2>
        {posts.map((data) => {
          return (
            <ClickDiv key={data.id} onClick={() => {
              if(authRedux){
                selectPost(data);
              } else {
                alert('로그인이 필요합니다.');
                navigation('/login');
              }
            }}>
              <h1>{data.title}</h1>
              <small> created_At: {printDate(data.created_At)},</small>
              <small>  author: <b>{data.author? data.author:""}</b></small>
              <p>{data.desc}</p>
              <hr style={{ border:'solid 1px #DEDEDE', width: '100%' }}></hr>
            </ClickDiv>
          );
        })}
    </div>
  )
}
const ClickDiv = styled.div`
&:hover {  
  background-color : #DEDEDE;
  color : black
}
`;

export default BlogList;