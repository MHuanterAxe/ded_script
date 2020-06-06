import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import NavigationBar from "./components/NavBar";
import {Button, TextInput} from "react-materialize";

function App() {
  return (
    <div style={{height: '100%'}}>
      <NavigationBar/>
      <div className="container">
        <form action="">
          <TextInput type="text"/>
          <Button className='green'>Преобразовать</Button>
        </form>
      </div>
    </div>
  )
}

export default App;

