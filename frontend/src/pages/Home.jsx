import React, { useState } from 'react'
import withAuth from '../utils/withAuth'
import { Badge, Button, IconButton, TextField } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore';
import { useNavigate } from 'react-router-dom'
import "../App.css"
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function  HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);

    let handlieJoinVideoCall = async () =>{
      await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

  return (
    <>
        <div className="navBar">
            <div style={{display: "flex", alignItems: "center", }}>
               <h2>Apna Video Call</h2>
            </div>

            <div style={{display: "flex", alignItems: "center"}}>
              <IconButton onClick={
                () =>{
                  navigate("/history")
                }
              }>
                <RestoreIcon />
              </IconButton>
                <p>History</p>
              <Button onClick={() =>{
                localStorage.removeItem('token')
                navigate("/auth")
              }}>
                  Logout
              </Button>
            </div>
        </div>
        <div className="meetContainer">
          <div className="leftPanel">
            <div>
              <h2>Providing Quality Video Call Just Like Quality Education</h2>
              <div style={{display: "flex", gap: "10px"}}>
                <TextField onChange={e => setMeetingCode(e.target.value)}  id='outline' variant="outlined" label="Meeting Code"/>
                <Button variant='contained' onClick={handlieJoinVideoCall}>Join</Button>
              </div>
            </div>
          </div>
          <div className="rightPanel">
            <img srcSet='/logo3.png' alt=''/>
          </div>
        </div>
    </>
  )
}


export default withAuth(HomeComponent)