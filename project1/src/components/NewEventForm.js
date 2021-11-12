
import "./NewEventForm.css";
import React, { useState } from "react";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Birmingham");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("manchester");
  };

  console.log("event")
  
  const handleSubmit = (e) => {
    // Default behaviour is to submit the form
    // We don't want that to happen
    // Prevent the default behaviour

    e.preventDefault();
    // Create a new event object
    // Log to console
    // Reset the form
    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 100000),
    };
    console.log(event);
    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title</span>
        <input type="text" onChange={handleChange} value={title} />
      </label>
      <label>
        <span>Event Date</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event Location</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="birmingham">Birmingham</option>
          <option value="london">London</option>
          <option value="cardif">Cardiff</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
