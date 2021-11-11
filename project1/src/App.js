import "./App.css";
import { useState } from "react";
import Title from "./components/Title";

function App() {
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: "marios birthday bash", id: 1 },
    { title: "bower's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const subtitle = "this is a subtitle";

  return (
    <div className="App">
      <Title title ="Events In Your Area!" subtitle={subtitle} />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents &&
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {" "}
              {index + 1} - {event.title}
            </h2>
            <button
              onClick={() => {
                handleClick(event.id);
              }}
            >
              Delete Event{" "}
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
