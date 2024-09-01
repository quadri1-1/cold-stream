import React, { useState } from "react";
import LoginForm from "./LoginForm"; // Adjust the import path if necessary

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dummy data for illustration purposes
  const formData = [
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
    // Additional form data entries can be added here
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("Login successful, updating state to isLoggedIn: true");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Form Submission Dashboard</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Property of Interest</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
                <th>ZIP Code</th>
                <th>Phone</th>
                <th>Email Address</th>
                <th>Contact Preference</th>
                <th>Property Type</th>
                <th>Rental Area</th>
                <th>Number of Bedrooms</th>
                <th>Number of Occupants</th>
                <th>Landlord Reference</th>
                <th>Pets</th>
                <th>Landlord Eviction</th>
                <th>Smoking Compliance</th>
                <th>Reason for Move</th>
                <th>Employment Length</th>
                <th>Total Household Monthly Income</th>
                <th>Background Information</th>
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
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default AdminPage;
