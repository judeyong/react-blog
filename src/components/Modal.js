import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Modal = ({ selectTitle, selectDesc, setModal, postEdit, postDelete, isEditing, setisEditing, setSelectTitle, setSelectDesc,
  selectCreatedAt, selectPostAuthor
 }) => {

  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <BackgroundDiv>
      <WrapperModal>
        <CloseModal onClick={() => {
          setisEditing(false);
          setModal(false);
          }}>X</CloseModal>
        <Div>
          <TitleDiv>
            {isEditing? 
            <InputDesign value={selectTitle}
              onChange={(e)=>setSelectTitle(e.target.value)}
            />
            : selectTitle}
          </TitleDiv>
          <small>author: {selectPostAuthor}</small>
          <small>createdAt : {printDate(selectCreatedAt)}</small>
          <hr style={{ border:'solid 1px #DEDEDE', width: '100%' }}></hr>
          <ContentDiv>
          {isEditing? 
            <TextareaDesign rows='15' value={selectDesc}
              onChange={(e)=>setSelectDesc(e.target.value)}
            />
            : selectDesc}
          </ContentDiv>
          {selectPostAuthor === localStorage.getItem('isLoggedIn') ? (
            <BtnDiv>
              <Btns onClick={postEdit}>Edit</Btns>
              {isEditing?
              <Btns onClick={() => setisEditing(false)} >cancel</Btns>
              : <Btns onClick={postDelete} >Delete</Btns>}
            </BtnDiv>
          ) : (
            <small>수정, 삭제는 자신의 게시물만 가능합니다.</small>
          )}
        </Div>
      </WrapperModal>
    </BackgroundDiv>
  )
}

const BackgroundDiv =  styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-Items: center;
  justify-Content:center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const WrapperModal =  styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border: solid 1px #CDCDCD;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  z-index: 1;
`;
const TitleDiv =  styled.div`
  padding: 20px;
  font-Size: 30px;
  color: black;
`;
const Div =  styled.div`
  width: 75%;
  height: 75%;
  display: flex;
  flex-Direction: column;
  align-Items: center;
  padding: 20px;
`;
const ContentDiv =  styled.div`
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: black;
`;
const BtnDiv =  styled.div`
  display: flex;
  align-Items: center;
  padding: 3px;
`;
const Btns =  styled.button`
  margin-left: 10px;
  border: none;
  font-Size: 15px;
  color: black;
  background-color: #CDCDCD;
  &:hover {  
    background-color : #DEDEDE;
    color : blue
  }
`;
const CloseModal =  styled.span`
  position: relative;
  top: 20px;
  left: 380px;
  cursor: pointer;
  z-index: 1000;
  color: black;
  font-Size: 30px;
`;

const InputDesign =  styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #CDCDCD;
`;
const TextareaDesign =  styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid #CDCDCD;
`;
Modal.prototype = {
  isEditing: PropTypes.boolean,
};
Modal.defaultProps = {
  isEditing: false,
}

export default Modal