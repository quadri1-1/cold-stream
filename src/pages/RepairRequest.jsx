import React, { useState } from 'react';
import "../styles/repairrequest.css";

const RepairRequest = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        streetAddress: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        email: '',
        maintenanceAccess: '',
        authorization: false,
        pets: '',
        problemDescription: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.firstName) tempErrors.firstName = "First name is required.";
        if (!formData.lastName) tempErrors.lastName = "Last name is required.";
        if (!formData.streetAddress) tempErrors.streetAddress = "Street address is required.";
        if (!formData.city) tempErrors.city = "City is required.";
        if (!formData.zipCode) tempErrors.zipCode = "ZIP Code is required.";
        if (!formData.phone) tempErrors.phone = "Phone number is required.";
        if (!formData.email) tempErrors.email = "Email is required.";
        // if (!formData.maintenanceAccess) tempErrors.maintenanceAccess = "You must select a maintenance access option.";
        if (!formData.authorization) tempErrors.authorization = "You must agree to the terms.";
        if (!formData.problemDescription) tempErrors.problemDescription = "Problem description is required.";
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted'); // Debugging
        if (validate()) {
            const storedRepairRequests = JSON.parse(localStorage.getItem('repairRequests')) || [];
            localStorage.setItem('repairRequests', JSON.stringify([...storedRepairRequests, formData]));
            console.log('Form data saved:', formData); // Debugging
            setFormData({
                firstName: '',
                lastName: '',
                streetAddress: '',
                addressLine2: '',
                city: '',
                state: '',
                zipCode: '',
                phone: '',
                email: '',
                // maintenanceAccess: '',
                authorization: false,
                pets: '',
                problemDescription: '',
            });
        } else {
            console.log('Validation failed'); // Debugging
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className="name-fields">
                    <label htmlFor="firstName">First Name*</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange}
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}

                    <label htmlFor="lastName">Last Name*</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange}
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>

                <div className="address-fields">
                    <label htmlFor="streetAddress">Street Address*</label>
                    <input 
                        type="text" 
                        id="streetAddress" 
                        name="streetAddress" 
                        value={formData.streetAddress} 
                        onChange={handleChange}
                    />
                    {errors.streetAddress && <span className="error">{errors.streetAddress}</span>}

                    <label htmlFor="addressLine2">Address Line 2</label>
                    <input 
                        type="text" 
                        id="addressLine2" 
                        name="addressLine2" 
                        value={formData.addressLine2} 
                        onChange={handleChange}
                    />

                    <label htmlFor="city">City*</label>
                    <input 
                        type="text" 
                        id="city" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange}
                    />
                    {errors.city && <span className="error">{errors.city}</span>}

                    <label htmlFor="state">State*</label>
                    <select 
                        id="state" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleChange}
                    >
                        <option value="PA">Pennsylvania</option>
                    </select>

                    <label htmlFor="zipCode">ZIP Code*</label>
                    <input 
                        type="text" 
                        id="zipCode" 
                        name="zipCode" 
                        value={formData.zipCode} 
                        onChange={handleChange}
                    />
                    {errors.zipCode && <span className="error">{errors.zipCode}</span>}
                </div>

                <div className="contact-fields">
                    <label htmlFor="phone">Phone*</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}

                    <label htmlFor="email">Email*</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="maintenance-access">
                    
                    <div>
                        <input 
                            type="radio" 
                            id="present" 
                            name="maintenanceAccess" 
                            value="present" 
                            checked={formData.maintenanceAccess === "present"}
                            onChange={handleChange}
                        />
                        <label htmlFor="present">
                            
                        </label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="enter" 
                            name="maintenanceAccess" 
                            value="enter" 
                            checked={formData.maintenanceAccess === "enter"}
                            onChange={handleChange}
                        />
                        <label htmlFor="enter">
                           
                        </label>
                    </div>
                    {errors.maintenanceAccess && <span className="error">{errors.maintenanceAccess}</span>}
                </div>

                <div className="authorization">
                    <legend><strong>Maintenance Access  *</strong></legend>
                    <label htmlFor="authorization">
                    I want to be present for the appointment; I understand that appointments will be 8:00am-4:00pm Mon-Fri, and will make arrangements to be present for the appointment. I understand that if I do not cancel the appointment at least 24 hours prior to the appointment or am not present for the appointment I will be billed a $75.00 missed appointment fee.
                        <br />
                        Maintenance has my permission to enter the home if I cannot be present to complete the authorized repairs.
                        <div className="auth-label">
                            <input 
                                type="checkbox" 
                                id="authorization" 
                                name="authorization" 
                                checked={formData.authorization} 
                                onChange={handleChange}
                            />
                            <strong>By checking this box you agree to the above terms. *</strong><br />
                        </div>
                        I am authorized to make the maintenance request.
                    </label>
                    {errors.authorization && <span className="error">{errors.authorization}</span>}
                </div>

                <div className="pets">
                    <label htmlFor="pets">Do you have any pets - if so, what type? (All pets must be contained when maintenance arrives)</label>
                    <select 
                        id="pets" 
                        name="pets" 
                        value={formData.pets} 
                        onChange={handleChange}
                    >
                        <option value="">Select an option</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="dogsAndCats">Dogs and Cats</option>
                    </select>
                </div>

                <div className="problem-description">
                    <label htmlFor="problemDescription"> <strong>Description of Problem: Be sure to include as many details as possible: the "who, what, where when, why, how" of the problem. This insures an accurate description of the problem in order to determine the quickest, cost effective, quality resolution.  *</strong></label>
                    <textarea 
                        id="problemDescription" 
                        name="problemDescription" 
                        value={formData.problemDescription} 
                        onChange={handleChange}
                    />
                    {errors.problemDescription && <span className="error">{errors.problemDescription}</span>}
                </div>

                {/* CAPTCHA placeholder
                <div className="captcha">
                    <label>CAPTCHA *</label>
                    <p>CAPTCHA verification will go here</p>
                </div> */}

                <button type="submit">Submit Repair Request</button>
            </form>
        </div>
    );
};

export default RepairRequest;
