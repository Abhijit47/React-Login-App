
import React, { useState } from 'react';
import './App.css';
import EmployeesList from './components/EmployeesList/EmployeesList';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import data from './data/data.json';


const App = () => {

  // Initailize the user details
  const loginUserInfo = {
    username: "abhijit@gmail.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ email: "" });

  const loginUser = (details) => {
    if (
      details.email === loginUserInfo.username
      && details.password === loginUserInfo.password
    ) {
      setUser({
        email: details.email,
      });
      // console.log(user);
    } else {
      alert("Invalid Credentials! Please check username or password");
    }
  };

  return (
    <>
      <Navbar />
      {
        user.email
          ? <EmployeesList data={data} />
          : <Login loginUser={loginUser} error={alert} />
      }

    </>
  );
};

export default App;
