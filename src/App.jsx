import React, { useState } from 'react'
import SideBar from './Components/SideBar'
import DashBoard from './Components/DashBoard'
import IndividualIssue from './Components/IndividualIssueList'
import './App.css'

function App() {
    const [dash, setDash]= useState(false);
    return (
        <div className='admin-dashboard-main'>
            <SideBar dash={dash} setDash={setDash}/>
            {dash?(
                <DashBoard/>
            ):(
                <IndividualIssue/>
            )}
        </div>
    )
}

export default App