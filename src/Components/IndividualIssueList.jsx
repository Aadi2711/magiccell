import React from 'react'
import Data from '../data'
import './IndividualIssue.css'

function IndividualIssue() {
  return (
    <div className='individual-issue'>
        <table className="manage-link-table">
            <tr>
                <th className="manage-links-title">Name</th>
                <th className="manage-links-title">Roll Number</th>
                <th className="manage-links-title">Program</th>
                <th className="manage-links-title">Concerned Department</th>
                <th className="manage-links-title">Status</th>
            </tr>
            <div className='table-data'>
                {Data?.map((details, index)=>{
                    return(
                        <tr>
                            <td >
                                <p className="manage-link-manage">{details.Name}</p>
                            </td>
                            <td >
                                <p className="manage-link-manage">{details.roll_no.toUpperCase()}</p>
                            </td>
                            <td >
                                <p className="manage-link-manage">{details.Program}</p>
                            </td>
                            <td >
                                <p className="manage-link-manage">{details.Department}</p>
                            </td>
                            <td >
                                <p className="manage-link-manage">{details.Status.charAt(0).toUpperCase() + details.Status.substr(1)}</p>
                            </td>
                        </tr>
                    )
                })}
            </div>

              
          </table>
    </div>
  )
}

export default IndividualIssue