import React, { useState } from 'react'
import Data from '../data'
import './IndividualIssue.css'
import './Popup.css'; // Importing CSS file for styling


function IndividualIssue() {
    const [isOpen, setIsOpen] = useState(false);
    const [indiDetails, setIndiDetails] = useState(null);

    const togglePopup = (details, index) => {
      setIsOpen(!isOpen);
      setIndiDetails({...details, issueNumber: index});
    };
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
                            <tr style={{cursor:"pointer"}} onClick={()=>{togglePopup(details, index)}}>
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

                {isOpen && <div className="overlay"></div>}

                <div className="container">
                    {isOpen && (
                        <div className="popup">
                            <div className="popup-content">
                                <h2>Issue Number: {indiDetails.issueNumber+1}</h2>
                                <div className='popup-upper'>
                                    <div>
                                        <span style={{fontWeight:"600"}}>Issue Date</span>
                                        <span>: {indiDetails.Date}</span>
                                    </div>
                                    <div>
                                        <span style={{fontWeight:"600"}}>Status</span>
                                        <span>: {indiDetails.Status?"Open":"Closed"}</span>
                                    </div>
                                </div>
                                <div className='popup-middle'>
                                    <div className='popup-description'>
                                        <span style={{textDecoration:"underline", fontWeight:"600"}}>Name</span>
                                        <span>: {indiDetails.Name}</span>
                                    </div>
                                    <div className='popup-description'>
                                        <span style={{textDecoration:"underline", fontWeight:"600"}}>Roll No</span>
                                        <span>: {indiDetails.roll_no}</span>
                                    </div>
                                    <div className='popup-description'>
                                        <span style={{textDecoration:"underline", fontWeight:"600"}}>Department</span>
                                        <span>: {indiDetails.Department}</span>
                                    </div>
                                    <div className='popup-description'>
                                        <span style={{textDecoration:"underline", fontWeight:"600"}}>Description</span>
                                        <span className='popup-description-text'>: {indiDetails.Description}</span>
                                    </div>
                                </div>
                                <div className='individual-btn-container'>
                                    <button className='individual-button' onClick={()=>setIsOpen(!isOpen)}>Close</button>
                                </div>
                                
                            </div>
                        </div>
                    )}
                </div>

                
            </table>
        </div>
    )
}

export default IndividualIssue