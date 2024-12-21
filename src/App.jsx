import React, { useContext } from "react";
import Login from "./componenets/auth/Login";
import { useState, useEffect } from "react";
import { getlocalstorge } from "./utils/Localstorage";
import { setlocalstorge } from "./utils/Localstorage";
import Employeedasboard from "./componenets/dashboard/Employeedasboard";
import Header from "./componenets/others/Header";
import Admindasboard from "./componenets/dashboard/Admindasboard";
import { Authcontext } from "./context/Authprovider";

function App() {
  const [user, setuser] = useState("");
  const [loggedinuserdata, setloggedinuserdata] = useState("");

  const [localdata , setlocaldata] = useContext(Authcontext);
 
  
  
  

  
  useEffect(() => {
    
    const loggedin = localStorage.getItem("loggedin");
    if (loggedin) {
      const loggeduser = JSON.parse(loggedin);
      
      
      setuser(loggeduser.role);
      setloggedinuserdata(loggeduser.data);
    }
  }, []);

  const loginhandler = (email, password) => {
    console.log(localdata);
    
    const logempdata = localdata.empdata.find(
      (e) => email == e.email && password == e.password
    );
    if (localdata.empdata && localdata.admindata) {
      var logadmindata = localdata.admindata.find(
        (e) => email == e.email && password == e.password
      );
    }
   
    if (logadmindata) {
      setuser("admin");
      setloggedinuserdata(logadmindata)
      localStorage.setItem(
        "loggedin",
        JSON.stringify({ role: "admin", data: logadmindata })
      );
    } else if (logempdata) {
      setuser("emp");
      setloggedinuserdata(logempdata)
      localStorage.setItem(
        "loggedin",
        JSON.stringify({ role: "emp", data: logempdata })
      );
    } else {
      alert("invalid user");
    }
  };

  return (
    <>
      {!user ? <Login loginhandler={loginhandler}></Login> : ""}

      {user == "emp" ? (
        <Employeedasboard data={loggedinuserdata} changeuser={setuser}></Employeedasboard>
      ) : (
        ""
      )}
      {user == "admin" ? (
        <Admindasboard data={loggedinuserdata} changeuser={setuser}></Admindasboard>
      ) : (
        ""
      )}

      {/* 
     
       */}
    </>
  );
}

export default App;
