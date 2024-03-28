import React from 'react'
import './SideBar.css';
import profile from "../assets/profile.jpg"
function SideBar({dash, setDash}) {
  return (
    <div className='side-bar-main'>
      <div>
          <div className='side-bar-pic-holder'>
            <img src={profile} alt="" className='profile-pic-sidebar'/>
          </div>
          <div>

          </div>
      </div>
       
      <div className='btn-holder'>
        <button className='btn-switch'
          onClick={()=>{setDash(!dash)}}
        >
          {dash? "Show Issues" : "Show DashBoard"}
        </button>
        <button className='btn-switch' style={{backgroundColor:"#BE0004"}}>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default SideBar