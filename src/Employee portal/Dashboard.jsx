import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
  const [formData, setFormData] = useState([]);
  const [repairRequests, setRepairRequests] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('rentalApplications'); // New state to manage active section
  const navigate = useNavigate();
  const tableWrapperRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem("formSubmissions")) || [];
    setFormData(storedSubmissions);

    const storedRepairRequests = JSON.parse(localStorage.getItem("repairRequests")) || [];
    setRepairRequests(storedRepairRequests);
  }, []);

  const handleLogout = () => {
    navigate("/employee");
  };

  const handleWheel = (event) => {
    if (tableWrapperRef.current) {
      tableWrapperRef.current.scrollBy({
        top: event.deltaY,
        behavior: 'smooth'
      });
      event.preventDefault();
    }
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleArrowClick = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -100 : 100,
        behavior: 'smooth'
      });
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const clearRentalApplications = () => {
    setFormData([]);
    localStorage.removeItem("formSubmissions");
  };

  const clearRepairRequests = () => {
    setRepairRequests([]);
    localStorage.removeItem("repairRequests");
  };

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${!sidebarOpen ? 'sidebar-hidden' : ''}`}>
        <button className="sidebar-toggle" onClick={handleSidebarToggle}>
          <i className={`fa-solid fa-${sidebarOpen ? 'arrow-left' : 'arrow-right'}`}></i>
        </button>
        <h2 className="sidebar-title">
          <i className="fa fa-dashboard"></i> Dashboard
        </h2>
        <nav className="sidebar-nav">
          <a href="#stats" className="sidebar-link">
            <i className="fa-solid fa-chart-column"></i> Statistics
          </a>
          <button onClick={() => handleSectionChange('rentalApplications')} className="sidebar-link">
            <i className="fa-solid fa-table"></i> Rental Applications
          </button>
          <button onClick={() => handleSectionChange('repairRequests')} className="sidebar-link">
            <i className="fa-solid fa-tools"></i> Repair Requests
          </button>
          <button onClick={handleLogout} className="btn-logout">
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        </nav>
      </div>
      <div className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
        </header>
        <section className="stats">
          <div className="card">
            <h3>Total Submissions</h3>
            <p>{formData.length}</p>
          </div>
          <div className="card">
            <h3>Total Repair Requests</h3>
            <p>{repairRequests.length}</p>
          </div>
        </section>
        {activeSection === 'rentalApplications' && (
          <section id="rentalApplications">
            <h2>Rental Applications</h2>
            <button onClick={clearRentalApplications} className="btn-clear">
            <i class="fa-solid fa-trash"></i> &nbsp;
              Clear Applications
            </button>
            <div className="table-wrapper">
              <button
                className="arrow arrow-left"
                onClick={() => handleArrowClick('left')}
                style={{ display: formData.length > 0 ? 'flex' : 'none' }}
              >
                <i className="fa fa-chevron-left" style={{ fontSize: '24px' }}></i>
              </button>
              <button
                className="arrow arrow-right"
                onClick={() => handleArrowClick('right')}
                style={{ display: formData.length > 0 ? 'flex' : 'none' }}
              >
                <i className="fa fa-chevron-right" style={{ fontSize: '24px' }}></i>
              </button>
              <div
                className="table-scroll"
                ref={scrollContainerRef}
                onWheel={handleWheel}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>Property Interest</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Street Address</th>
                      <th>City</th>
                      <th>State</th>
                      <th>ZIP Code</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Contact Preference</th>
                      <th>Property Type</th>
                      <th>Rental Area</th>
                      <th>Bedrooms</th>
                      <th>Occupants</th>
                      <th>Landlord Reference</th>
                      <th>Pets</th>
                      <th>Landlord Eviction</th>
                      <th>Smoking Compliance</th>
                      <th>Reason for Move</th>
                      <th>Employment Length</th>
                      <th>Monthly Income</th>
                      <th>Background Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.map((data, index) => (
                      <tr key={index}>
                        <td>{data.propertyInterest}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.streetAddress}</td>
                        <td>{data.city}</td>
                        <td>{data.state}</td>
                        <td>{data.zipCode}</td>
                        <td>{data.phone}</td>
                        <td>{data.email}</td>
                        <td>{data.contactPreference}</td>
                        <td>{data.propertyType}</td>
                        <td>{data.rentalArea}</td>
                        <td>{data.bedrooms}</td>
                        <td>{data.occupants}</td>
                        <td>{data.landlordReference}</td>
                        <td>{data.pets}</td>
                        <td>{data.landlordJudgment}</td>
                        <td>{data.smokingCompliance}</td>
                        <td>{data.reasonForMove}</td>
                        <td>{data.employmentLength}</td>
                        <td>{data.monthlyIncome}</td>
                        <td>{data.backgroundInfo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
        {activeSection === 'repairRequests' && (
          <section id="repairRequests">
            <h2>Repair Requests</h2>
            <button onClick={clearRepairRequests} className="btn-clear">
            <i class="fa-solid fa-trash"></i> &nbsp;
              Clear Requests
            </button>
            <div className="table-wrapper">
              <div className="table-scroll" ref={scrollContainerRef} onWheel={handleWheel}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Street Address</th>
                      <th>City</th>
                      <th>State</th>
                      <th>ZIP Code</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Maintenance Access</th>
                      <th>Authorization</th>
                      <th>Pets</th>
                      <th>Problem Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {repairRequests.map((data, index) => (
                      <tr key={index}>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.streetAddress}</td>
                        <td>{data.city}</td>
                        <td>{data.state}</td>
                        <td>{data.zipCode}</td>
                        <td>{data.phone}</td>
                        <td>{data.email}</td>
                        <td>{data.maintenanceAccess}</td>
                        <td>{data.authorization ? "Yes" : "No"}</td>
                        <td>{data.pets}</td>
                        <td>{data.problemDescription}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
