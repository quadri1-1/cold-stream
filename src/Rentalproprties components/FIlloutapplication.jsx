import React, { useState } from "react";
import "../styles/onlineregform.css";

const Filloutapplication = () => {
  const [formData, setFormData] = useState({
    propertyInterest: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    contactPreference: "",
    propertyType: "",
    rentalArea: "",
    bedrooms: "",
    occupants: "",
    landlordReference: "",
    pets: "",
    landlordJudgment: "",
    smokingCompliance: "",
    reasonForMove: "",
    employmentLength: "",
    monthlyIncome: "",
    backgroundIssues: "",
    backgroundInfo: "",
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
    if (!formData.streetAddress)
      formErrors.streetAddress = "Street Address is required";
    if (!formData.city) formErrors.city = "City is required";
    if (!formData.state) formErrors.state = "State is required";
    if (!formData.zipCode) formErrors.zipCode = "ZIP Code is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.propertyInterest)
      formErrors.propertyInterest = "Property Interest is required";
    if (!formData.contactPreference)
      formErrors.contactPreference = "Contact Preference is required";

    // Add more validations as necessary
    if (!formData.reasonForMove)
      formErrors.reasonForMove = "Reason for moving is required";

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
    <div className="rentalForm">
      <p>
        Please fill out the form below and we will review your application and
        reach out to you after we have completed our initial review.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="propertyInterest">
          Property I am interested in
          <select
            required
            name="propertyInterest"
            id="propertyInterest"
            value={formData.propertyInterest}
            onChange={handleChange}
          >
            <option value="">Any property</option>
            
            <option value="122-market-st-Bangor">
              122 Market st. Bangor, Pennsylvania 18013
            </option>
            <option value="1801-e-cedar-st-allentown">
              1801 E Cedar st. Allentown, Pennsylvania 18109
            </option>
          </select>
          {errors.propertyInterest && (
            <span className="error">{errors.propertyInterest}</span>
          )}
        </label>

        <div className="name-section">
          <figcaption>Personal</figcaption>
          <legend>
            <label htmlFor="firstName">
              <input
                required
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              First Name
            </label>
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
            <label htmlFor="lastName">
              <input
                required
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              Last Name
            </label>
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </legend>
        </div>

        <div className="address-section">
          <figcaption>Current Address</figcaption>
          <label htmlFor="streetAddress">
            <input
              required
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
            />
            Street Address
          </label>
          {errors.streetAddress && (
            <span className="error">{errors.streetAddress}</span>
          )}
          <label htmlFor="addressLine2">
            <input
              required
              type="text"
              id="addressLine2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
            />
            Address Line 2
          </label>
          <div className="add-flex">
            <label htmlFor="city">
              <input
                required
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
                required
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
          <label htmlFor="zipCode">
            ZIP Code
            <input
              required
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
              required
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
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            Email
          </label>
          {errors.email && <span className="error">{errors.email}</span>}
          <label htmlFor="contactPreference" id="contactPreference">
            Best Option to Contact you?
            <div className="contact-flex">
              <label htmlFor="phone">
                <input
                  required
                  type="radio"
                  id="phone"
                  name="contactPreference"
                  value="phone"
                  onChange={handleChange}
                />
                Phone
              </label>
              <label htmlFor="email">
                <input
                  required
                  type="radio"
                  id="email"
                  name="contactPreference"
                  value="email"
                  onChange={handleChange}
                />
                Email
              </label>
            </div>
          </label>
          {errors.contactPreference && (
            <span className="error">{errors.contactPreference}</span>
          )}
        </div>

        <div className="property-section">
          <label htmlFor="propertyType">
            What type of property are you looking for?
            <select
              required
              name="propertyType"
              id="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
            >
              <option value="">Select One</option>
              <option value="House Rental">House Rental</option>
              <option value="Apartment">Apartment</option>
            </select>
          </label>
          <label htmlFor="rentalArea">
            What area are you looking to rent?
            <select
              required
              name="rentalArea"
              id="rentalArea"
              value={formData.rentalArea}
              onChange={handleChange}
            >
              <option value="">Select One</option>
              <option value="Allentown">Allentown</option>
              <option value="Bethlehem">Bethlehem</option>
              <option value="Easton">Easton</option>
              <option value="Walnutport">Walnutport</option>
            </select>
          </label>
          <label htmlFor="bedrooms">
            How many bedrooms are you looking for? *
            <input
              required
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="occupants">
            How many occupants will be living in the property? *
            <input
              required
              type="number"
              id="occupants"
              name="occupants"
              value={formData.occupants}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="questions-section">
          <label htmlFor="landlordReference">
            Do you have a non-relative landlord reference?
            <select
              required
              name="landlordReference"
              id="landlordReference"
              value={formData.landlordReference}
              onChange={handleChange}
            >
              <option value="none">Select One</option>
              <option value="yes">Yes</option>
              <option selected value="">
                No
              </option>
            </select>
          </label>
          <label htmlFor="pets">
            Do you have any pets? (We have a no-pet policy.)
            <select
              required
              name="pets"
              id="pets"
              value={formData.pets}
              onChange={handleChange}
            >
              <option value="none">Select One</option>
              <option value="yes">Yes</option>
              <option selected value="">
                No
              </option>
            </select>
          </label>
          <label htmlFor="landlordJudgment">
            Have you ever had a landlord judgement against you or been evicted
            before?
            <select
              required
              name="landlordJudgment"
              id="landlordJudgment"
              value={formData.landlordJudgment}
              onChange={handleChange}
            >
              <option value="none">Select One</option>
              <option value="yes">Yes</option>
              <option selected value="">
                No
              </option>
            </select>
          </label>
          <label htmlFor="smokingCompliance">
            Our properties are non-smoking. Are you able to comply?
            <select
              required
              name="smokingCompliance"
              id="smokingCompliance"
              value={formData.smokingCompliance}
              onChange={handleChange}
            >
              <option value="none">Select One</option>
              <option value="yes">Yes</option>
              <option selected value="">
                No
              </option>
            </select>
          </label>
          <label htmlFor="reasonForMove">
            Why are you looking to move?
            <input
              type="text"
              id="reasonForMove"
              name="reasonForMove"
              value={formData.reasonForMove}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="employmentLength">
            Length of Employment at current job
            <input
              type="text"
              id="employmentLength"
              name="employmentLength"
              value={formData.employmentLength}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="monthlyIncome">
            Total Household Monthly Income
            <input
              type="number"
              id="monthlyIncome"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="backgroundInfo">
            <figcaption>
              Any issues we should know about before running a background check?
            </figcaption>
            If you are approved to the next phase of our application process, a
            background check will be required on all adults in the household.
            Please provide any information you feel would be helpful in the
            event something does come up in the background check.
            <textarea
              id="backgroundInfo"
              name="backgroundInfo"
              value={formData.backgroundInfo}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Submit  Request</button>
      </form>
    </div>
  );
};

export default Filloutapplication;
