import React, { useContext } from 'react';
import './GlobalStyles.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Components/Homepage/Homepage';
import LoginPage from './Components/LoginPage/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import {myContext} from './Context';


function App() {
  const userObject = useContext(myContext);
  console.log(userObject, " <----user")
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      {userObject ? null :
       <Route path='/login' element={<LoginPage />} />
      }
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
