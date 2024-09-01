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
              <p>PP&L (Electric) <a className="number" href="tel:+1-443-364-0723">443-364-0723</a></p>
              <p>UGI (Gas) <a className="number" href="tel:+1-443-364-0723">443-364-0723</a></p>
              <p>Service Electric (Cable) <a className="number" href="tel:+1-443-364-0723">443-364-0723</a></p>
        </div>
    </div>
  )
}

export default UtilityContacts