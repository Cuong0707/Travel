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

import MyAccount from './components/MyAccount/MyAccount';
import HistoryOrder from './components/MyAccount/HistoryOrder';
import Information from './components/MyAccount/Information';
import Message from './components/MyAccount/Message';

import AuthProvider from './context/auth-context';

import Booking from './components/Hotel/Booking';
import PayOrder from './components/Hotel/PayOrder';
import OrderDetail from './components/MyAccount/OrderDetail';

import ListUser from './components/admin/ListUser';
import ListPartner from './components/admin/ListPartner';
import ListOrder from './components/admin/ListOrder';
import LineChart from './components/admin/LineChart';
// import DashBoard from './components/admin/Dashboard';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>

    <AuthProvider>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<ContactUs />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<SignUp />}></Route>

            <Route path='/HotelList' element={<HotelList />} />
            <Route path='/HotelList/HamRong' element={<HotelDetail />} />
            <Route path='/order' element={<Booking />} />
            <Route path='/pay' element={<PayOrder />}></Route>
            <Route path='/blog' element={<Blog />} />
            <Route path='/restaurant' element={<Restaurant />} />
            <Route path='/vist-location' element={<VistLocation />} />
            <Route path='/transport' element={<Transport />} />


            <Route path='/HotelList' element={<HotelList />} />
            <Route path='/HotelList/HamRong' element={<HotelDetail />} />
            <Route path='/order' element={<Booking />} />
            <Route path='/pay' element={<PayOrder />}></Route>
            <Route path='/blog' element={<Blog />} />
            <Route path='/restaurant' element={<Restaurant />} />
            <Route path='/vist-location' element={<VistLocation />} />
            <Route path='/transport' element={<Transport />} />

            <Route path='partner' element={<StepperForm />}></Route>
            <Route path='/forgot-password' element={<ForgotPass />}></Route>
            <Route path='/change-password' element={<ChangePass />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/reset-password' element={<ConfirmPassword />}></Route>

          </Route>
        </Routes>

        <Routes>
          <Route path='/my-account' exact element={<Information />}></Route>
          <Route path='/order-history' exact element={<HistoryOrder />}>
            <Route path='detail' element={<OrderDetail />}></Route>
          </Route>
          <Route path='/message' exact element={<Message />}></Route>
        </Routes>

        <Routes>
          <Route path='/listuser' element={<ListUser />}></Route>
          <Route path='/listpartner' element={<ListPartner />}></Route>
          <Route path='/listorder' element={<ListOrder />}></Route>
          <Route path='/viewpage' element={<LineChart />}></Route>

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
