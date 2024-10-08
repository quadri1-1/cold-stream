import React from "react";
import pen from "../assets/pen.png";
import { Link } from "react-router-dom";
import "../styles/download.css"
const APPLICATION_URL = "/Application-1.pdf"
const REQUIREMENTS_URL = "/Requirements-To-Rent.pdf"

const Download = () => {
  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <div className="dic">
      <div className="down">
        <img src={pen} alt="" />
        <div className="download">
          <h5>Welcome to Keystone Property Management</h5>
          <p>
            If you are looking for a new home, we have a constantly changing
            list of available properties for rent. We suggest you try our
            website <Link id="land">www.coldstreamfarmpropertymanagement.com</Link> for a listing of
            ready-to-move-in properties. You can also contact our relocation
            specialist Eli at <a className="number" href="tel:+1-443-364-0723">443-364-0723</a> (Call or Text). Attached to 
            this letter is our requirements and qualifications to rent, please carefully 
            read over our qualifications page to ensure you meet them. We look forward to
            serving your housing needs.
          </p>
          <p>Regards,</p>
          <p>The CSFPM Team</p>
        </div>
        <div className="download">
          <h5>Welcome to Keystone Property Management</h5>
          <p>
            Si está buscando un nuevo hogar, tenemos una lista en constante
            cambio de propiedades disponibles para alquilar. Le sugerimos que
            pruebe nuestro sitio web <Link id="land">www.coldstreamfarmpropertymanagement.com</Link> para
            obtener una lista de propiedades listas para mudarse. También puede
            comunicarse con nuestro especialista en reubicación Eli al{" "}
            <a className="number" href="tel:+1-443-364-0723">443-364-0723</a>(llame o envíe un mensaje de texto).
            Adjunto a esta carta se encuentran nuestros requisitos y
            calificaciones para alquilar, lea atentamente nuestra página de
            calificaciones para asegurarse de cumplirlos. Esperamos poder
            atender sus necesidades de vivienda.
          </p>
          <p>Saludos,</p>
          <p>El equipo de CSFPM</p>
        </div>
        <hr />
        <div className="download">
          <p>
            Follow the link below to print a Rental Application.Applications can
            be via mail, email or dropped off at our office 24 hours a day, 7
            days a week. During non-business hours, slide application in the
            mail slot in the front door; it leads to a secure lockbox on the
            inside.
          </p>
          <p id="lamp">
            Office Address: 
             <span>
              CSFPM - Ellicott Division 329 N 13th Street Allentown, PA 18102
            </span>
          </p>
          <p>
            Email: <Link id="land">coldfarm.stream@gmail.com</Link>
          </p>
        </div>
        <div className="download">
          <Link id="land">
            <button onClick={()=>{downloadFileAtURL(REQUIREMENTS_URL)}}>Download Application Requirement</button>
          </Link>
          <Link id="land">
            <button onClick={()=>{downloadFileAtURL(APPLICATION_URL)}}>Download Adobe PDF Version Of Application</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Download;
