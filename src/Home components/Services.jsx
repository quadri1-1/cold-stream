import React from "react";
import sms from "../assets/sms.png";
import "../styles/services.css";

const Services = () => {
  return (
    <div className="">
      <div className="app container">
          <h1>Our Services</h1>
      <div className="serv">
        
        <div id="serv">
          <img src="https://th.bing.com/th/id/R.c00b4eb067baae9802eb7861b257ed7d?rik=JV4WEBPuMX9p2w&riu=http%3a%2f%2fwww.rc-4.com%2fpreview2%2fimages%2fbubblesicon.png&ehk=5bR9U8%2baB8%2f%2fQwOJYWCpld0ipuRFdM4M46nITEB0tms%3d&risl=&pid=ImgRaw&r=0" alt="" />
          <h5>Tenant Screening</h5>
          <p>
            Every application we receive goes through numerous screening steps.
            We only place highly qualified tenants that meet our strict approval
            criteria.
          </p>
        </div>
        <div id="serv">
          <img src="https://www.supportingstrategies.com/wp-content/uploads/2022/03/Revenue.png" alt="icon" />
          <h5>Rent Collection </h5>
          <p>
            Get your rent payments in on time with our team managing your tenant
            accounts. We send out monthly statements, collect funds, and deposit
            your funds.
          </p>
        </div>
        <div id="serv">
          <img src="https://pepperspoolandspa.com/wp-content/uploads/2021/02/one-stop-shop-icon.png" alt="menta" />
          <h5>Maintenance</h5>
          <p>
            Keep your property in great condition. Our repair pros respond to
            maintenance requests, coordinate visits, and handle all associate
            paperwork & invoicing.
          </p>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Services;
