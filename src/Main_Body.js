import React,{useState} from "react";
import "./Main_Body.css";
import Sidebar from "./components/SideBar";
import db from "./firebase"
import SideChat from "./components/SideChat";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login"
import { useStateValue } from "./StateProvider";

function MainBody() {
  const [{user}, dispatch] = useStateValue();
  const removeRoom = (roomid)=>{ 
    // console.log(history)
    db.collection("Rooms").doc(roomid).delete().then(()=>{
      alert("Room Deleted");
    });
  }
  return (
    <div>
    {user ? (<div className="main_body">
      <BrowserRouter>
      <Sidebar />
      <Switch>
      <Route path="/rooms/:roomId">
        <SideChat removeRoom={removeRoom}/>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
    ) : (<Login />)}
    </div>
    
  );
}

export default MainBody;