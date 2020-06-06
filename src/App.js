import React, {useState} from 'react';
import axios from 'axios'
import IconFile from './statics/img/file.svg'
import IconCheck from './statics/img/check.svg'
import styled from 'styled-components'
import NavigationBar from "./components/NavBar";

function App() {
  const [address, setAddress] = useState('')
  const [pure, setPure] = useState('')
  const [link, setLink] = useState('')

  const handleInputFile = () => {
    const file = document.getElementById('file').files[0]
    const data = new FormData()
    data.append('file',file)
    data.append('name', 'csv')
    axios.post('http://213.219.213.136/calc/csv', data)
      .then(data => setLink(data.data))
      .catch(err => console.log(err))
  }
  const handleInput = (e) => {
    e.preventDefault()
    setAddress(e.target.value)
  }
  const handleSubmit = () => {
    const data = JSON.stringify(address)
    axios.post('http://213.219.213.136/calc', data)
      .then(data => setPure(data.data))
      .catch(err => console.log(err))
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
          <ButtonSubmit onClick={handleSubmit}>
            <img src={IconCheck} alt=""/>
          </ButtonSubmit>
        </Row>
      </Container>
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
