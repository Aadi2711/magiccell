import React from 'react'
import DepartmentWise from './Charts/DepartmentWise'
import YearWise from './Charts/YearWise'
import CompletionWise from './Charts/CompletionWise'
import SchoolWise from './Charts/SchoolWise'
import './DashBoard.css'

function DashBoard() {
  return (
    <div className='dashboard-main'>
        <div className='dashboard-header'>
          ADMIN DASHBOARD
        </div>
        <div className='dashboard-component'>
          <DepartmentWise/>
        </div> 
        <div className='dashboard-component'>
          <YearWise/>
        </div> 
        <div className='dashboard-component'>
          <CompletionWise/>
        </div> 
        <div className='dashboard-component'>
          <SchoolWise/>
        </div> 
    </div>
  )
}

export default DashBoard