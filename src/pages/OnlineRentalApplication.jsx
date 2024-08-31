

import React, { useState } from 'react';
import '../styles/onlineregform.css';

const OnlineRentalApplication = () => {
    const [formData, setFormData] = useState({
        propertyInterest: '',
        firstName: '',
        lastName: '',
        streetAddress: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        email: '',
        contactPreference: '',
        propertyType: '',
        rentalArea: '',
        bedrooms: '',
        occupants: '',
        landlordReference: '',
        pets: '',
        landlordJudgment: '',
        smokingCompliance: '',
        reasonForMove: '',
        employmentLength: '',
        monthlyIncome: '',
        backgroundIssues: '',
        backgroundInfo: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};

        // Check required fields
        if (!formData.firstName) formErrors.firstName = "First Name is required";
        if (!formData.lastName) formErrors.lastName = "Last Name is required";
        if (!formData.streetAddress) formErrors.streetAddress = "Street Address is required";
        if (!formData.city) formErrors.city = "City is required";
        if (!formData.state) formErrors.state = "State is required";
        if (!formData.zipCode) formErrors.zipCode = "ZIP Code is required";
        if (!formData.phone) formErrors.phone = "Phone number is required";
        if (!formData.email) formErrors.email = "Email is required";
        if (!formData.propertyInterest) formErrors.propertyInterest = "Property Interest is required";
        if (!formData.contactPreference) formErrors.contactPreference = "Contact Preference is required";

        // Add more validations as necessary
        if (!formData.reasonForMove) formErrors.reasonForMove = "Reason for moving is required";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // If validation passes, submit the form data
            console.log(formData);
        } else {
            // If validation fails, log or display errors
            console.log("Form validation failed. Fix the errors and try again.");
        }
    };

    return (
        <div className='rentalForm'>
            <p>Please fill out the form below and we will review your application and reach out to you after we have completed our initial review.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="propertyInterest">Property I am interested in
                    <select 
                        name="propertyInterest" 
                        id="propertyInterest"
                        value={formData.propertyInterest}
                        onChange={handleChange}
                    >
                        <option value="">Any property</option>
                        <option value="offices-1242-hamilton">Offices Available for rent 1242-1244 W Hamilton St, Allentown, Pennsylvania 18102, US</option>
    <option value="2149-w-allen">2149 W Allen St. Allentown, Allentown, Pennsylvania 18104, US</option>
    <option value="122-market-bangor">122 Market St., Bangor, Pennsylvania 18013, US</option>
    <option value="1801-e-cedar">1801 E Cedar St., Allentown, Pennsylvania 18109, US</option>
    <option value="502-n-8th-apt1f">502 N 8th St Apt 1F, Allentown, Pennsylvania 18102, US</option>
    <option value="garages-allentown">Garages available for rent Allentown, Allentown, Pennsylvania 18102, US</option>
    <option value="834-w-chestnut-apt2">834 W Chestnut St. Apt 2, Allentown, Pennsylvania 18102, US</option>
    <option value="1508-brookstone-hellertown">1508 Brookstone Place, Hellertown, Pennsylvania 18055, US</option>
    <option value="533-pine-bethlehem">533 Pine St, Bethlehem, Pennsylvania 18018, US</option>
    <option value="1402-w-liberty-apt503">1402 W Liberty St. Apt 503, Allentown, Pennsylvania 18102, US</option>
    <option value="2155-main-northampton-aptb">2155 Main St Apt B, Northampton, Pennsylvania 18067, US</option>
    <option value="160-pine-allentown">160 Pine St, Allentown, Pennsylvania 18102, US</option>
    <option value="213-e-bertch-apt2-lansford">213 E Bertch St Apt 2, Lansford, Pennsylvania 18232, US</option>
                    </select>
                    {errors.propertyInterest && <span className="error">{errors.propertyInterest}</span>}
                </label>

                <div className="name-section">
                    <figcaption>Personal</figcaption>
                    <legend>
                        <label htmlFor="firstName">
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstName" 
                                value={formData.firstName} 
                                onChange={handleChange}
                            />
                            First Name
                        </label>
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                        <label htmlFor="lastName">
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                value={formData.lastName} 
                                onChange={handleChange}
                            />
                            Last Name
                        </label>
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </legend>
                </div>

                <div className="address-section">
                    <figcaption>Current Address</figcaption>
                    <label htmlFor="streetAddress">
                        <input 
                            type="text" 
                            id="streetAddress" 
                            name="streetAddress" 
                            value={formData.streetAddress} 
                            onChange={handleChange}
                        />
                        Street Address
                    </label>
                    {errors.streetAddress && <span className="error">{errors.streetAddress}</span>}
                    <label htmlFor="addressLine2">
                        <input 
                            type="text" 
                            id="addressLine2" 
                            name="addressLine2" 
                            value={formData.addressLine2} 
                            onChange={handleChange}
                        />
                        Address Line 2
                    </label>
                    <div className='add-flex'>
                        <label htmlFor="city">
                            <input 
                                type="text" 
                                id="city" 
                                name="city" 
                                value={formData.city} 
                                onChange={handleChange}
                            />
                            City
                        </label>
                        {errors.city && <span className="error">{errors.city}</span>}
                        <label htmlFor="state">
                            <select 
                                name="state" 
                                id="state" 
                                value={formData.state} 
                                onChange={handleChange}
                            >
                                <option value=""></option>
                                <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
    <option value="CA">California</option>
    <option value="CO">Colorado</option>
    <option value="CT">Connecticut</option>
    <option value="DE">Delaware</option>
    <option value="FL">Florida</option>
    <option value="GA">Georgia</option>
    <option value="HI">Hawaii</option>
    <option value="ID">Idaho</option>
    <option value="IL">Illinois</option>
    <option value="IN">Indiana</option>
    <option value="IA">Iowa</option>
    <option value="KS">Kansas</option>
    <option value="KY">Kentucky</option>
    <option value="LA">Louisiana</option>
    <option value="ME">Maine</option>
    <option value="MD">Maryland</option>
    <option value="MA">Massachusetts</option>
    <option value="MI">Michigan</option>
    <option value="MN">Minnesota</option>
    <option value="MS">Mississippi</option>
    <option value="MO">Missouri</option>
    <option value="MT">Montana</option>
    <option value="NE">Nebraska</option>
    <option value="NV">Nevada</option>
    <option value="NH">New Hampshire</option>
    <option value="NJ">New Jersey</option>
    <option value="NM">New Mexico</option>
    <option value="NY">New York</option>
    <option value="NC">North Carolina</option>
    <option value="ND">North Dakota</option>
    <option value="OH">Ohio</option>
    <option value="OK">Oklahoma</option>
    <option value="OR">Oregon</option>
    <option value="PA">Pennsylvania</option>
    <option value="RI">Rhode Island</option>
    <option value="SC">South Carolina</option>
    <option value="SD">South Dakota</option>
    <option value="TN">Tennessee</option>
    <option value="TX">Texas</option>
    <option value="UT">Utah</option>
    <option value="VT">Vermont</option>
    <option value="VA">Virginia</option>
    <option value="WA">Washington</option>
    <option value="WV">West Virginia</option>
    <option value="WI">Wisconsin</option>
    <option value="WY">Wyoming</option>
                            </select>
                            State
                        </label>
                        {errors.state && <span className="error">{errors.state}</span>}
                    </div>
                    <label htmlFor="zipCode">ZIP Code
                        <input 
                            type="text" 
                            id="zipCode" 
                            name="zipCode" 
                            value={formData.zipCode} 
                            onChange={handleChange}
                        />
                    </label>
                    {errors.zipCode && <span className="error">{errors.zipCode}</span>}
                </div>
            
                <div className="contact-section">
                    <label htmlFor="phone">
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange}
                        />
                        Phone
                    </label>
                    {errors.phone && <span className="error">{errors.phone}</span>}
                    <label htmlFor="email">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange}
                        />
                        Email
                    </label>
                    {errors.email && <span className="error">{errors.email}</span>}
                    <label htmlFor="contactPreference" id="contactPreference">Best Option to Contact you?
                        <div className='contact-flex'>
                            <label htmlFor="phone">Phone
                                <input 
                                    type="radio" 
                                    id="phone" 
                                    name="contactPreference" 
                                    value="phone" 
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="email">Email
                                <input 
                                    type="radio" 
                                    id="email" 
                                    name="contactPreference" 
                                    value="email" 
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </label>
                    {errors.contactPreference && <span className="error">{errors.contactPreference}</span>}
                </div>

                <div className="property-section">
                    <label htmlFor="propertyType">What type of property are you looking for?
                        <select 
                            name="propertyType" 
                            id="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                        >
                            <option value="">Select One</option>
                            <option value="">House Rental</option>
                            <option value="">Apartment</option>
                        </select>
                    </label>
                    <label htmlFor="rentalArea">What area are you looking to rent?
                        <select 
                            name="rentalArea" 
                            id="rentalArea"
                            value={formData.rentalArea}
                            onChange={handleChange}
                        >
                            <option value="">Select One</option>
                            <option value="">Allentown</option>
                            <option value="">Bethlehem</option>
                            <option value="">Easton</option>
                            <option value="">Walnutport</option>
                        </select>
                    </label>
                    <label htmlFor="bedrooms">How many bedrooms are you looking for? *
                        <input 
                            type="number" 
                            id="bedrooms" 
                            name="bedrooms" 
                            value={formData.bedrooms} 
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="occupants">How many occupants will be living in the property? *
                        <input 
                            type="number" 
                            id="occupants" 
                            name="occupants" 
                            value={formData.occupants} 
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="questions-section">
                    <label htmlFor="landlordReference">Do you have a non-relative landlord reference?
                        <select 
                            name="landlordReference" 
                            id="landlordReference"
                            value={formData.landlordReference}
                            onChange={handleChange}
                        >
                            <option value="">Select One</option>
                            <option value="yes">Yes</option>
                            <option selected value="no">No</option>
                        </select>
                    </label>
                    <label htmlFor="pets">Do you have any pets? (We have a no-pet policy.)
                        <select 
                            name="pets" 
                            id="pets"
                            value={formData.pets}
                            onChange={handleChange}
                        >
                            <option value="">Select One</option>
                            <option value="yes">Yes</option>
                            <option selected value="no">No</option>
                        </select>
                    </label>
                    <label htmlFor="landlordJudgment">Have you ever had a landlord judgement against you or been evicted before?
                        <select 
                            name="landlordJudgment" 
                            id="landlordJudgment"
                            value={formData.landlordJudgment}
                            onChange={handleChange}
                        >
                            <option value="">Select One</option>
                            <option value="yes">Yes</option>
                            <option selected value="no">No</option>
                        </select>
                    </label>
                    <label htmlFor="smokingCompliance">Our properties are non-smoking. Are you able to comply?
                        <select 
                            name="smokingCompliance" 
                            id="smokingCompliance"
                            value={formData.smokingCompliance}
                            onChange={handleChange}
                        >
                            <option value="">Select One</option>
                            <option value="yes">Yes</option>
                            <option selected value="no">No</option>
                        </select>
                    </label>
                    <label htmlFor="reasonForMove">Why are you looking to move?
                        <textarea 
                            id="reasonForMove" 
                            name="reasonForMove" 
                            value={formData.reasonForMove} 
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="employmentLength">Length of Employment at current job
                        <input 
                            type="text" 
                            id="employmentLength" 
                            name="employmentLength" 
                            value={formData.employmentLength} 
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="monthlyIncome">Total Household Monthly Income
                        <input 
                            type="number" 
                            id="monthlyIncome" 
                            name="monthlyIncome" 
                            value={formData.monthlyIncome} 
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="backgroundIssues">Any issues we should know about before running a background check?
                        <textarea 
                            id="backgroundIssues" 
                            name="backgroundIssues" 
                            value={formData.backgroundIssues} 
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="backgroundInfo">If you are approved to the next phase of our application process, a background check will be required on all adults in the household. Please provide any information you feel would be helpful in the event something does come up in the background check.
                        <textarea 
                            id="backgroundInfo" 
                            name="backgroundInfo" 
                            value={formData.backgroundInfo} 
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default OnlineRentalApplication;
