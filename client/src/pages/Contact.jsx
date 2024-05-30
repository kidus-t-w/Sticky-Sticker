import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import FormInput from '../components/common/FormInput';
import Button from '../components/common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to the API
    console.log(formData);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <form className="mt-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            ></textarea>
          </div>
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
