import Test from "./Test";
import Layout from "./layout";
import New from "./New";
import "./Input.css";
import  {Routes, Route, useNavigate, Link } from "react-router-dom";
import Color from "./Color";
import SumOfEvenNumbers from "./SumOfEvenNumbers";

import Count1 from "./Count";
import ParentComponent from "./ParentComponent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addUser } from "./store/action";
import Room from "./bookroom/room";
import View from "./bookroom/view";
import City from "./bookroom/city";
import Pool from "./bookroom/pool";
import Farm from "./bookroom/farm";
import LoginPage from "./page/login";


const App = () => {

  const token = localStorage.getItem("token");

  const navigation = useNavigate();
  useEffect(() => {
    if (token == 'false') {
      navigation("/login");
      
    }
  }, [])
  

  return(
    <div className="m-0">
    {/*  <input placeholder="Nhâp dữ liệu" value={data} type="text" onChange={(e) => setData(e.target.value)}/>
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      
      {infor}
        */}
        

        
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />} >
          
          <Route path="/room" element={<Room />} />
          <Route path="/view" element={<View />} />
          <Route path="/city" element={<City />} />
          <Route path="/pool" element={<Pool />} />
          <Route path="/farm" element={<Farm />} />
         
          <Route path="/ParentComponent" element={<ParentComponent />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
