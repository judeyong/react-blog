import React, { useState } from 'react'
import Nav from '../components/Nav'
import BlogList from '../components/BlogList'
import BlogForm from '../components/BlogForm'
import './Home.css';
import Modal from '../components/Modal';
import axios from 'axios';

const Home = () => {
  const [modal, setModal] = useState(false);
  const [selectTitle, setSelectTitle] = useState('');
  const [selectDesc, setSelectDesc] = useState('');
  const [selectId, setSelectId] = useState('');
  const [selectPostAuthor, setSelectPostAuthor] = useState('');
  const [selectCreatedAt, setSelectCreatedAt] = useState('');
  const [isEditing, setisEditing] = useState(false);

  const detailModal = () => {
    setModal(true);
  }

  const postDelete = () => {
    console.log('postDelete!');
    axios.delete(`http://localhost:3004/posts/${selectId}`)
    .then((res) => {
      console.log('deleted ', res.data);
      setModal(false);
      //window.location.replace('/react-blog');
      window.location.reload();
    })
  }

  const postEdit = () => {
    console.log('postEdit!');
    if(isEditing) {
      axios.patch(`http://localhost:3004/posts/${selectId}`,{
        title:selectTitle,
        desc: selectDesc,
      }).then((res)=> {
        console.log('editing success');
        setModal(false);
        //window.location.replace('/');
        window.location.reload();
      })
    }
    setisEditing(true);
  }

  return (
    <div className='home-main'>
      <Nav />
      <br />
      <hr style={{ border:'solid 1px #DEDEDE', width: '75%' }}></hr>
      <div className='home-body'>
        <div className='home-list' >
          <BlogList 
            setSelectTitle={setSelectTitle} 
            setSelectDesc={setSelectDesc} 
            detailModal={detailModal}
            setSelectId={setSelectId}
            setselectPostAuthor={setSelectPostAuthor}
            setSelectCreatedAt={setSelectCreatedAt}
          />
        </div>
        <div style={{ border: "solid 1px #DEDEDE", width: '1', height: '70vh'}} />
        <div className='home-form'>
          <BlogForm />
        </div>
      </div>

      {modal ? <Modal 
        isEditing={isEditing}
        setisEditing={setisEditing}
        selectTitle={selectTitle}
        setSelectTitle={setSelectTitle}
        selectDesc={selectDesc}
        setSelectDesc={setSelectDesc}
        selectCreatedAt={selectCreatedAt}
        selectPostAuthor={selectPostAuthor}
        setModal={setModal} 
        postDelete={postDelete}
        postEdit={postEdit}
      /> : null}
    </div>
  )
}


export default Home
