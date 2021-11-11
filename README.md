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



