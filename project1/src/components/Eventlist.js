import React from "react";
// take events and function from app as props and map through them

export default function Eventlist({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>
            {" "}
            {index + 1} - {event.title}
          </h2>
          <p>
            {event.location} - {event.date}
          </p>

          <button
            onClick={() => {
              handleClick(event.id);
            }}
          >
            Delete Event{" "}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
