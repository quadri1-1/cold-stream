import React from 'react'
import { Link } from 'react-router-dom'
import contact from "../assets/contact.png"
import "../styles/utility.css"
const UtilityContacts = () => {
  return (
    <div>
        <div className='container' id='contain'>
            <img src={contact} alt="" />
              <h2>Utility Contacts</h2>
              <p>PP&L (Electric) <Link className='lod'>1-800-342-5775</Link></p>
              <p>UGI (Gas) <Link className='lod'>1-800-276-2722</Link></p>
              <p>Service Electric (Cable) <Link className='lod'> 610-865-9100</Link></p>
        </div>
    </div>
  )
}

export default UtilityContacts