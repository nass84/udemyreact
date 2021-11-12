import "./App.css";
import React, { useState} from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import Eventlist from "./components/Eventlist";
import NewEventForm from "./components/NewEventForm";

function App() {
  // make modal show only when button is clicked
  const [showModal, setShowModal] = useState(false);

  const [showEvents, setShowEvents] = useState(true);

  // send events to eventlist

  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
    return [...prevEvents, event]
    })
    setShowModal(false);
  }

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
      <Title title="Events In Your Area!" subtitle={subtitle} />

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

      {showEvents && <Eventlist events={events} handleClick={handleClick} />}

      <button onClick={() => setShowModal(true)}>Add new event</button>

      {showModal && (
        <Modal>
          <NewEventForm addEvent={addEvent}/>
        </Modal>
      )}
    </div>
  );
}

export default App;
