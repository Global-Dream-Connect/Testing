'use client'
import React, { useState } from "react";

export default function Page(){
    return(
        <div className="w-full h-max text-black pb-12">
            <div className="mt-16 py-4 flex flex-col items-center"> 
            <h2 className="text-xl font-bold">Join Us</h2>
            <span className="italic"> Start your journey here...</span>
            </div>
           <div className="w-full h-fit flex px-4 md:px-10">
            <div className="w-full max-w-max m-auto h-fit border bg-white rounded-md overflow-hidden shadow-md">
                <Form/>
            </div>

           </div>
        </div>
    )
}

function Form(){
    const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    age: '',
    applyingAs: 'student',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form className="max-w-lg mx-auto p-4 bg-white shadow rounded" onSubmit={handleSubmit}>
      {/* Full Name */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="fullName">Full Name</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          id="fullName"
          name="fullName"
          placeholder="name here"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* Email */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          id="email"
          name="email"
          placeholder="email here"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* Phone */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="phone">Phone</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="tel"
          id="phone"
          name="phone"
          placeholder="phone here"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* Country & City */}
      <div className="mb-4 flex space-x-4">
        <div className="w-1/2">
          <label className="block mb-1 font-semibold" htmlFor="country">Country</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            id="country"
            name="country"
          placeholder="country here"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block mb-1 font-semibold" htmlFor="city">City</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            id="city"
            name="city"
          placeholder="city here"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      {/* Age */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold" htmlFor="age">Age</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="number"
          id="age"
          name="age"
          min="0"
          placeholder="age here"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* Applying as - Radio Buttons */}
      <div className="mb-4">
        <span className="block mb-1 font-semibold">Applying As</span>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              className="form-radio"
              name="applyingAs"
              value="student"
              checked={formData.applyingAs === 'student'}
              onChange={handleChange}
            />
            <span>Student</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              className="form-radio"
              name="applyingAs"
              value="mentor"
              checked={formData.applyingAs === 'mentor'}
              onChange={handleChange}
            />
            <span>Mentor</span>
          </label>
        </div>
      </div>
      
      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  )
}