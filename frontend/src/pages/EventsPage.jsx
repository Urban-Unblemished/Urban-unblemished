import React, { useEffect, useState } from "react";
import { createEvent, getAllEvents } from "../adapters/events-adapter";
import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from "reactstrap";

const EventCard = ({ event }) => {
    const { header, description, date, time, location, img_url } = event;

    return (
      <Card variant="outlined">
        <CardHeader>
          <CardTitle>{header}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>{description}</CardText>
          <p>
            <b>Date:</b> {date}
            <br />
            <b>Time:</b> {time}
            <br />
            <b>Location:</b> {location}
          </p>
        </CardBody>
        <Button color="primary">Join This Clean Up</Button>
        <img src={img_url} alt="Event" />
        
      </Card>
    );
  };

function EventsPage() {
  const [events, setEvents] = useState([]); // State to hold the list of events
  const [showForm, setShowForm] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventHeader, setEventHeader] = useState("");
  const [location, setLocation] = useState("");



    useEffect(() => {
        
        const doFetch = async () => {
            const result = await getAllEvents()
            // console.log(result)
            setEvents(result)
        }
        doFetch()

        
    },[])

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      img_url: imgUrl,
      description: eventDescription,
      date: eventDate,
      time: eventTime,
      header: eventHeader,
      location: location,
    };
    console.log(eventData)
    createEvent(eventData)
    // Update the events state with the new event data
    setEvents((prevEvents) => [...prevEvents, eventData]);

    // Reset form values
    setImgUrl("");
    setEventDescription("");
    setEventDate("");
    setEventTime("");
    setEventHeader("");
    setLocation("");
    setShowForm(false);
    
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h1>Event Page</h1>
      <button onClick={toggleFormVisibility}>Make Event</button>
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <label>
            Image URL:
            <input
              type="text"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </label>
          <label>
            Event Description:
            <textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </label>
          <label>
            Time:
            <input
              type="text"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            />
          </label>
          <label>
            Header:
            <input
              type="text"
              value={eventHeader}
              onChange={(e) => setEventHeader(e.target.value)}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}

      <h2>Events:</h2>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <ul>
            {events.map((event, index) => (
  <li key={index}>
    <EventCard event={event} />
  </li>
))}
          {/* {events.map((event, index) => (
            <li key={index}>
              <h3>{event.header}</h3>
              <p>{event.description}</p>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>Location: {event.location}</p>
              <img src={event.img_url} alt="Event" />
            </li>
          ))} */}
        </ul>
      )}
    </div>
  );
}

export default EventsPage;
