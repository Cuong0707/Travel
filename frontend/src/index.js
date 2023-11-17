import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import MyAccount from './components/MyAccount';
// import Login from './components/Login/Login';
import Login from './components/Login/SignIn';
import StepperForm from './components/Partner/StepperForm';
import SignUp from './components/Login/SignUp';
import ForgotPass from './components/ForgotPass/ForgotPass';


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
          <Route path='/myaccount' element={<MyAccount />}>
            <Route path='account-general' element={<account-general />}></Route>
            <Route path='account-change-password' element={<account-change-password />}></Route>

      

          </Route>
          <Route path='partner' element={<StepperForm />}></Route>
          <Route path='/forgot-pass' element={<ForgotPass />}></Route>

        </Route>
      </Routes> 
      {/* Admin */}
      <App />
      {/* Admin */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
