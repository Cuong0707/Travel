import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';

import ContactUs from './components/ContactUs/ContactUs';

// import Login from './components/Login/Login';
import Login from './components/Login/SignIn';
import StepperForm from './components/Partner/StepperForm';
import SignUp from './components/Login/SignUp';
import ForgotPass from './components/ForgotPass/ForgotPass';
import ChangePass from './components/ChangePass/ChangePass';
import HotelList from './components/Hotel/HotelList';
import HotelDetail from './components/Hotel/HotelDetail';
import Blog from './components/Page404/Blog';
import Restaurant from './components/Page404/Restaurant';
import VistLocation from './components/Page404/VistLocation';
import Transport from './components/Page404/Transport';
import Search from './components/Search';
import ConfirmPassword from './components/ForgotPass/ConfirmPassword';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
          {/* <Route path='/myaccount' element={<MyAccount />}>
            <Route path='account-general' element={<account-general />}></Route>
            <Route path='account-change-password' element={<account-change-password />}></Route>
          </Route> */}
          <Route path='/HotelList' element={<HotelList />} />
          <Route path='/HotelList/HamRong' element={<HotelDetail />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/vist-location' element={<VistLocation />} />
          <Route path='/transport' element={<Transport />} />

          <Route path='partner' element={<StepperForm />}></Route>
          <Route path='/forgot-pass' element={<ForgotPass />}></Route>
          <Route path='/change-pass' element={<ChangePass />}></Route>
          <Route path='/reset-password' element={<ConfirmPassword />}></Route>
          <Route path='/search' element={<Search />}></Route>
          
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
