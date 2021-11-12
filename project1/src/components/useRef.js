import "./NewEventForm.css";
import React, { useRef } from "react";

export default function NewEventForm({ addEvent }) {
  const title = useRef();
  const date = useRef();

  const resetForm = () => {
    title.current.value = "";
    date.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, title);

    const event = {
      title: title.current.value,
      date: date.current.value,
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
        <input type="text" ref={title} />
      </label>
      <label>
        <span>Event Date</span>
        <input type="date" ref={date} />
      </label>
      <button>Submit</button>
    </form>
  );
}
