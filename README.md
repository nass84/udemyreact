# Read Me

# Create React Project

create - npx create-react-app project-name
run in browser - npm start

# File Structure

## node_modules

This is where the packages are stored

## public

This is where the public information such as images are stored

The html file is stored here with the id of root. This is where the react app is injected into

## src

This is where the react content / components go

# Images

Add image to src folder can create an assets folder
then import picture from './picture.png'

<!-- <img src={picture}> -->

Or put pictures in public folder

<!-- <img src='/picture.png'> -->

Site wide images in public folder
One off images in src folder

# Styles

App.css - Component stylesheet
index.css - Global stylesheet

Using component stylesheets means hat the css is less messy

# State

Component DATA that may change over time
By useing the use state hook it causes the information to be revaluated and the data changed

At top

```
import { useState } from "react";
```

Set Inital State

```
  const [state, setState] = useState("inital value");
```

Change value

```
setName("second value");
```

Example

```
function App() {

  const [name, setName] = useState("mario");

  const handleClick = () => {
    setName("luigi");
    console.log(name);
  };

  return (
    <div className="App">
      <h1>My name is {name} </h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default App;
```

# Outputting Lists

Make an object, each with different id that can be used for a unique key

```
 const [events, setEvents] = useState([
    { title: "marios birthday bash", id: 1 },
    { title: "bower's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);
```

To output the list use the map function
index will give you the number in the list, starting at 0

```
 {events.map((event, index) => (
      <div key={event.id}>
        <h2>
          {" "}
          {index} - {event.title}
        </h2>
      </div>
```

To start at 1 you can do

```
{index + 1} - {event.title}
```

# Handling State

If you want to pass an argument such as id into a function. You use an anonomous function so the event isnt fired immediately

```
<button onClick={() => {handleClick(event.id)}}>Delete Event </button>
```

Delete events use filter method to check if ID is the same

```
  const handleClick = (id) => {
    setEvents(events.filter((event)=> {
      return id !== event.id
    }))
 console.log(id)
  };
```

However this is bad practice due to the timing of the event. If state depends on previous state you should use a call back function

```
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

```

# Conditional Templates

To show and hide something you can use the logical && to only show something if it is true

```
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

return (
  <div className="App">
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
```

# Props

To pass data from parent component to a child component
This allows you to reuse the component and pass different data to it. Making components reusable

You make an attribute in the custom component in the parent component

```
     <Title title="Events In Your Area!" />
```

In the child component, it automatically receives a props object and now title has been added it to it.

```
export default function Title (props) {
  return (
    <div>
      <h1 className="title"> {props.title}</h1>
      <br />
     <h2 className="subtitle"> All the latest events in the Mario Kingdom</h2>
    </div>
  )

}
```

## Multiple Props

You can add multiple props including variables

```
 const subtitle = "this is a subtitle";

  return (
    <div className="App">
      <Title title ="Events In Your Area!" subtitle={subtitle} />

```

```
  <h1 className="title"> {props.title}</h1>
      <br />
     <h2 className="subtitle"> {props.subtitle}</h2>

```

## Destructuring

To save having to write props. everytime you can destructure the information by using { name of prop } inside ()

```
export default function Title ({title, subtitle}) {
  return (
    <div>
      <h1 className="title"> {title}</h1>
      <br />
     <h2 className="subtitle"> {subtitle}</h2>
    </div>
  )

}
```

## React Fragments

Your component must have a parent element such as a div. However as these serve no purpose in the html outputted instead of using divs you can you empty <> </>

Can not create an empty fragment if you are using props. You have to use React.Fragment

```
<React.Fragment key={event.id}>
  <h2> {event.title} </h2>
</React.Fragment>
```

## Snippets

\_RFC tab will make a React componet template for you

## Children Props

To make a component even more reusable you can pass the children prop to your component and that way you can change the structure of it.
You have to use opening and closing tags and put the JSX inside them

```
  <Modal>
    <h2> 10% Off Coupon Code!!</h2>
    <a href="https://www.google.com">click here to get your coupon</a>
  </Modal>

    <Modal>
    <h1> Another Example </h1>
    <p>This will look different but keep same styles</p>
  </Modal>

```

Then in the child component destructure children or write props.children

```
export default function Modal({ children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>
  );
}

```

## Custom CSS

You can make a CSS file for your component by adding .css after the file name and then importing it

```
import "./Modal.css";
```

## Passing Functions as Props

Set State at the top

```
  const [showModal, setShowModal] = useState(true);
```

Make function

```
  const handleClose = () => {
    setShowModal(false);
  };
```

Pass function name in as prop

```
 {showModal && (
        <Modal handleClose={handleClose}>
          <h2> 10% Off Coupon Code!!</h2>
          <a href="https://www.google.com">click here to get your coupon</a>
        </Modal>
      )}

```

In component destructure name of function and add to component

```
export default function Modal({ children, handleClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <br></br>
        <button className="modal-close" onClick={handleClose}>
          close
        </button>
      </div>
    </div>
  );
}
```

# Create Form

To create a basic form you can use

```
import "./NewEventForm.css";

export default function NewEventForm() {
  return (
    <form className="new-event-form">
      <label>
        <span>Event Title</span>
        <input type="text" />
      </label>
      <label>
        <span>Event Date</span>
        <input type="date" />
      </label>
      <button>Submit</button>
    </form>
  );
}
```

## Tracking changes - onChange event 

You can use the onChange event

To log changes to the console you can use

```
const handleChange = (e) => {
  console.log(e.target.value);
};
```

```
<input type="text" onChange={handleChange} />

To store the value you can set state to empty value and use a handleChange function

```
     <input type="text" onChange={handleChange} />

```

```

const handleChange = (e) => {
setTitle(e.target.value);
};

```

or do an inline function

```

        <input type="date" onChange={(e) => setDate(e.target.value)} />

```

```
# Reset the Form 

You can set the state to "" by using a onClick function however the value will remain unless you set the value to the name of the state
```
value={date}
```

```
import "./NewEventForm.css";
import React, { useState } from "react";

export default function NewEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const resetForm = () => {
  setTitle("");
  setDate("");
  }
  return (
    <form className="new-event-form">
      <label>
        <span>Event Title</span>
        <input type="text" 
        onChange={handleChange} 
        value={title}
        />
      </label>
      <label>
        <span>Event Date</span>
        <input 
        type="date" 
        onChange={(e) => setDate(e.target.value)}
        value={date}
        />
      </label>
      <button>Submit</button>
      <p> Title - {title}, date - {date} </p>
      <p onClick={resetForm}>Reset</p> 
    </form>
  );
}
```

# Submit the data 

Add a onSubmit event to the form 

```
  <form className="new-event-form" onSubmit={handleSubmit}>
```

Then make a function that 

- Prevent the default behaviour of submitting the form
- Create a new event object with random id to use as the key
- Log to console 
- Reset the form

```
 const handleSubmit = (e) => {
   e.preventDefault();
    
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 100000),
    };
    console.log(event);
    resetForm();
  };
```
# Update state in App to show new events

- Delete hardcoded events in App 
- set state to empty object
- take in the event, spread over the previous events and add new event
- close the Modal by setting show to false

```
const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
    return [...prevEvents, event]
    })
    setShowModal(false);
  }
```

- pass function in as a prop

```
  <NewEventForm addEvent={addEvent}/>
```
- add prop to component
```
export default function NewEventForm({addEvent})
```
and add to submit function 
```
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 100000),
    };
    console.log(event);
    addEvent(event);
    resetForm();
  };
```

# useRef

Refs are a way to get a reference to a raw dom element like  query selector in vanilla JS

Use a react hook called useRef

Typically you would use state way of controlled inputs but this is an alternative

```
import "./NewEventForm.css";
import React, {  useRef } from "react";

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
```


