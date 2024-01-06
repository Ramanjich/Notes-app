import styled from 'styled-components'

export const NotesC = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  align-items: center;
`

export const Mainheading = styled.h1`
  font-family: Bree Serif;
  color: #4c63b6;
  margin-top: 50px;
  font-size: 50px;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`
export const NotesInputcontainer = styled.form`
  height: 230px;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border: 1px solid #d8d8d8;
  padding: 15px;
  box-shadow: 0px 4px 14px #aab8c8;
  @media (max-width: 768px) {
    width: 85%;
  }
`
export const TitleInputEle = styled.input`
  background: none;
  border: none;
  outline: none;
  color: #475569;
  margin-bottom: 30px;

  padding: 5px;
`
export const TextInputEle = styled.textarea`
  border: none;
  color: #1e293b;
  outline: none;
`

export const AddBtn = styled.button`
  border: none;
  margin-top: 30px;
  color: #ffffff;
  background-color: #4c63b6;
  align-self: flex-end;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const NoitemsC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`
export const NoitemsImage = styled.img`
  height: 100px;
  width: 100px;
`
export const NoitemsH = styled.h1`
  font-size: 20px;
  color: #334155;
`
export const NoitemsPara = styled.p`
  font-size: 15px;
`
export const NotesItemsList = styled.ul`
  width: 60%;
  margin-top: 30px;
  padding-left: 0px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 85%;
    padding-left: 0px;
  }
`
