import React, {useState} from 'react';
import axios from 'axios'
import IconFile from './statics/img/file.svg'
import IconLink from './statics/img/link.svg'
import IconCheck from './statics/img/check.svg'
import styled from 'styled-components'
import NavigationBar from "./components/NavBar";

function App() {
  const [address, setAddress] = useState('')
  const [modal, setModal] = useState(false)
  const [pure, setPure] = useState('')
  const [link, setLink] = useState('')

  const handleInputFile = () => {
    const file = document.getElementById('file').files[0]
    const data = new FormData()
    data.append('file', file)
    data.append('name', 'csv')
    axios.post('http://213.219.213.136/calc/csv', data)
      .then(data => {
        setLink(data.data.url)
      })
      .catch(err => console.log(err))
  }
  const handleInput = (e) => {
    e.preventDefault()
    setAddress(e.target.value)
  }
  const handleSubmit = () => {
    if(address !== '') {
      const data = JSON.stringify(address)
      axios.get('http://213.219.213.136/calc?data=' + data)
        .then(data => {
          setPure(data.data.line)
          setModal(true)
        })
        .catch(err => console.log(err))
      setAddress('')
    }
  }

  return (
    <div className='app'>
      <NavigationBar/>
      <Container>
        <Row>
          <InputContainer>
            <Input onInput={handleInput} value={address} placeholder='Введите текст'/>
            <FileInput>
              <input
                id='file'
                className='file-input'
                type="file"
                onInput={handleInputFile}
              />
              <img src={IconFile} alt="delete"/>
            </FileInput>
          </InputContainer>
          {address && <ButtonSubmit onClick={handleSubmit}>
            <img src={IconCheck} alt=""/>
          </ButtonSubmit>}
          {link && <LinkRedirect href={link}>
            <img style={{ width: 64, height:64 }} src={IconLink} alt=""/>
          </LinkRedirect>}
        </Row>
      </Container>
      {modal &&
        <ModalWrapper>
          <Modal>
            <ModalHeader>Ваш результат</ModalHeader>
            <ModalField>
              <ModalFieldText>
                {pure}
              </ModalFieldText>
            </ModalField>
          </Modal>
          <ModalButtons>
            <ModalButtonCancel onClick={() => setModal(false)}>
              Назад
            </ModalButtonCancel>
          </ModalButtons>
        </ModalWrapper>
      }
    </div>
  )
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Row = styled.div`
  display: flex;
  margin-top: 342px;
`
const InputContainer = styled.div`
  background: #5EA957;
  box-shadow: 5px 5px 40px rgba(36, 78, 33, 0.2), -5px -5px 40px rgba(177, 244, 171, 0.2);
  border-radius: 65px;
  width: 770px;
  height: 130px;
  display: flex;
  align-items: center;
`
const Input = styled.input`
  width: 588px;
  margin-left: 52px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #ffffff;
  font-weight: 300;
  font-size: 30px;
  line-height: 37px;
  height: 64px;
  color: #ffffff;
  &::placeholder {
    color: #ffffff;
    font-weight: 300;
    font-size: 30px;
    line-height: 37px;
  }
`
const FileInput = styled.label`
  margin-left: 40px;
  cursor: pointer;
`
const ButtonSubmit = styled.button`
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  background: #5EA957;
  border: none;
  border-radius: 50%;
  box-shadow: 5px 5px 40px rgba(36, 78, 33, 0.2), -5px -5px 40px rgba(177, 244, 171, 0.2);
  cursor: pointer;
  outline: none;
`
const LinkRedirect = styled.a`
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  background: #5EA957;
  text-decoration: none;
  border: none;
  border-radius: 50%;
  box-shadow: 5px 5px 40px rgba(36, 78, 33, 0.2), -5px -5px 40px rgba(177, 244, 171, 0.2);
  cursor: pointer;
  outline: none;
`

const ModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0, 0.2);
`
const Modal = styled.div`
  z-index: 10;
  padding: 40px;
  width: 850px;
  height: 176px;
  background-color: #5EA957;
  box-shadow: 5px 5px 40px rgba(36, 78, 33, 0.2), -5px -5px 40px rgba(177, 244, 171, 0.2);
  border-radius: 64px;
`
const ModalHeader = styled.h2`
  margin-bottom: 40px;
  font-family: Proxima Nova, sans-serif, -apple-system;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
`
const ModalField = styled.div`
  width: 852px;
  height: 89px;
  background: #F5F5F5;
  border-radius: 23px;
  color: black;
`
const ModalFieldText = styled.p`
  margin: 16px;
`
const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 930px;
  margin: 30px 0;
`
const ModalButtonCancel = styled.button`
  border: none;
  outline: none;
  width: 290px;
  height: 64px;
  left: 815px;
  top: 715px;
  background: #5EA957;
  box-shadow: 5px 5px 40px rgba(36, 78, 33, 0.2), -5px -5px 40px rgba(177, 244, 171, 0.2);
  border-radius: 64px;
  cursor:pointer;
  color: #ffffff;
`
