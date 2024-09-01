import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const [formData] = useState([
    {
      propertyInterest: "House",
      firstName: "John",
      lastName: "Doe",
      streetAddress: "123 Main St",
      city: "Somewhere",
      state: "CA",
      zipCode: "90210",
      phone: "123-456-7890",
      email: "johndoe@example.com",
      contactPreference: "Email",
      propertyType: "Residential",
      rentalArea: "Urban",
      bedrooms: 3,
      occupants: 4,
      landlordReference: "Good",
      pets: "Yes",
      landlordJudgment: "No",
      smokingCompliance: "Yes",
      reasonForMove: "Job relocation",
      employmentLength: "5 years",
      monthlyIncome: "$5000",
      backgroundInfo: "No criminal record",
    },
    // Add more data as needed
  ]);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login"); // Navigate back to login page
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="title">
          <i className="fas fa-tachometer-alt"></i> Dashboard
        </h2>
        <button onClick={handleLogout} className="logout-button">
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>
      <div className="content">
        <h2 className="heading">Form Submissions</h2>
        <table className="data-table">
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
  );
};

export default Dashboard;
