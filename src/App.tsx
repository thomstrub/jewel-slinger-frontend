import React, { useContext } from 'react';
import './GlobalStyles.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/Homepage/Homepage';
import LoginPage from './Pages/LoginPage/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import IndexPage from './Pages/IndexPage/IndexPage';
import DetailPage from './Pages/DetailPage/DetailPage';


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
     {/* {userObject ? 
       <Route path='/items' element={<IndexPage />} />:
       null
      } */}
      <Route path='/items' element={<IndexPage />} />
      {userObject ? 
       <Route path='/' element={<DetailPage/>} /> :
       null
      }
    </Routes>
    </BrowserRouter>
  );
}

export default App;
