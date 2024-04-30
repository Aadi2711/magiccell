import React, { useState } from 'react'
import SideBar from './Components/SideBar'
import DashBoard from './Components/DashBoard'
import IndividualIssue from './Components/IndividualIssueList'
import './App.css'
import Login from './Components/Login'

function App() {
    const [dash, setDash]= useState(false);
    const [loggedIn, setLoggedIn]= useState(true);
    return (
        <div className='admin-dashboard-main'>
            {loggedIn?(
            <>
                <SideBar dash={dash} setDash={setDash}/>
                {dash?(
                    <DashBoard/>
                ):(
                    <IndividualIssue/>
                )}
            </>
            ):(
                <Login/>
            )}
        </div>
    )
}

export default App