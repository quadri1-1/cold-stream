import React, { useState } from 'react';
// import LoginForm from './LoginForm';
import OnlineRentalApplication from './OnlineRentalApplication';

const AdminPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogin = () => { 
        setIsLoggedIn(true);
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Form Submission</h2>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Property of Interest</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Street Address</th>
                                <th>Address Line 2</th>
                                <th>City</th>
                                <th>State</th>
                                <th>ZIP Code</th>
                                <th>Phone</th>
                                <th>Email Address</th>
                                <th>Contact Preference</th>
                                <th>Property Type</th>
                                <th>Property Type</th>
                                <th>Number of Bedrooms</th>
                                <th>Number of occupants</th>
                                <th>Landlord Reference</th>
                                <th>Pets</th>
                                <th>Landlord Eviction</th>
                                <th>Smoking Compliance</th>
                                <th>Reason for move</th>
                                <th>Employment length</th>
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
                // <LoginForm onLogin={handleLogin} />>
            )}
        </div>
    )
};

export default AdminPage;