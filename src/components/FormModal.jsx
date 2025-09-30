import React from "react";
import "./FormModal.css";

import { useState } from "react";

const FormModal = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    membership: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Popup message
    alert("Form submitted successfully!");

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      membership: "",
    });

    // Close modal
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{type === "free" ? "Free Trial Form" : "Join Now Form"}</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          {type === "free" && (
            <>
              <label htmlFor="service">Select a Service:</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">-- Select Service --</option>
                <option value="gym-fitness">GYM FITNESS</option>
                <option value="indoor-cycling">INDOOR CYCLING</option>
                <option value="power-yoga">POWER YOGA</option>
                <option value="cardio-fitness">CARDIO FITNESS</option>
                <option value="circuit-training">CIRCUIT TRAINING</option>
                <option value="zumba">ZUMBA</option>
              </select>
            </>
          )}

          {type === "join" && (
            <>
              <label htmlFor="membership">Membership Type:</label>
              <select
                id="membership"
                name="membership"
                value={formData.membership}
                onChange={handleChange}
              >
                <option value="">-- Select Membership --</option>
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
              </select>
              <label htmlFor="service">Select a Service:</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">-- Select Service --</option>
                <option value="gym-fitness">GYM FITNESS</option>
                <option value="indoor-cycling">INDOOR CYCLING</option>
                <option value="power-yoga">POWER YOGA</option>
                <option value="cardio-fitness">CARDIO FITNESS</option>
                <option value="circuit-training">CIRCUIT TRAINING</option>
                <option value="zumba">ZUMBA</option>
              </select>
            
            </>
          )}

          <button type="submit">Submit</button>
        </form>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default FormModal;