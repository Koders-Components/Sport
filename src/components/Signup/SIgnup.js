import React, { useState } from 'react';

const Form = () => {
  // this is initial state empty for all the text box when i put some data using text box at that time it will become with puted data 
  // and that thing happen throw the handalchange
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pinCode: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    pinCode: '',
  });

  // Form Validation Logic
  const validate = () => {
    const newErrors = {};

    // Validate First Name, Middle Name, Last Name
    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = 'First Name should only contain letters.';
    }
    if (!/^[A-Za-z]+$/.test(formData.middleName)) {
      newErrors.middleName = 'Middle Name should only contain letters.';
    }
    if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Last Name should only contain letters.';
    }

    // Validate Email
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Validate Phone Number (only numbers)
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone Number should only contain 10 digits.';
    }

    // Validate Pin Code (only numbers)
    if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = 'Pin Code should only contain 6 digits.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // If validation passes, create the payload for the API
      const payload = {
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        pinCode: formData.pinCode,
      };
      console.log('Payload:', payload);
      // Submit the payload to API here
    } else {
      console.log('Form validation failed.');
    }
  };

  return (
    <div className="container">
      <h2>Form with Validation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
        </div>

        <div className="form-group">
          <label>Middle Name:</label>
          <input
            type="text"
            className="form-control"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            required
          />
          {errors.middleName && <small className="text-danger">{errors.middleName}</small>}
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <small className="text-danger">{errors.phone}</small>}
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            className="form-control"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            className="form-control"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Pin Code:</label>
          <input
            type="text"
            className="form-control"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            required
          />
          {errors.pinCode && <small className="text-danger">{errors.pinCode}</small>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;