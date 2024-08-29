import React from 'react'
import sms from "../assets/sms.png"

const Services = () => {
  return (
      <div>
          <div>
              <img src={sms} alt="" />
              <h5>Tenant Screening</h5>
              <p>Every application we receive goes through numerous screening steps. We only place highly qualified tenants that meet our strict approval criteria.</p>
          </div>
          <div>
              <img src="" alt="icon" />
              <h5>Rent Collection </h5>
              <p>Get your rent payments in on time with our team managing your tenant accounts. We send out monthly statements, collect funds, and deposit your funds.</p>
          </div>
          <div>
              <img src="" alt="menta" />
              <h5>Maintenance</h5>
              <p>Keep your property in great condition. Our repair pros respond to maintenance requests, coordinate visits, and handle all associate paperwork & invoicing.</p>
          </div>

    </div>
  )
}

export default Services