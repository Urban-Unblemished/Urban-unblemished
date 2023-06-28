import React, { useEffect, useState } from "react";
import { createEvent,getAllEvents } from "../adapters/events-adapter";
import { Form, Button, Col, Row, FormGroup, Label, Input } from "reactstrap";


const EventForm = () => {
  const [events, setEvents] = useState([]); // State to hold the list of events
  const [showForm, setShowForm] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventHeader, setEventHeader] = useState("");
  const [location, setLocation] = useState("");

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

  useEffect(() => {
    const doFetch = async () => {
        const result = await getAllEvents()
        console.log(result)
        setEvents(result)
    }
    doFetch()

    
},[])


    return <>
      <div id="event-form">
        <Form onSubmit={handleFormSubmit}>
            <h1 id="events-form-header">Make an Event</h1>
            <FormGroup>
              <Label >Heading</Label>
              <Input
              type="text"
              bsSize="lg"
              id="heading-input"
              name="heading-input"
              placeholder="Heading"
              className="mb-3"
              value={eventHeader}
              onChange={(e) => setEventHeader(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">
                Upload a Pic
                </Label>
                <Input
                id="exampleFile"
                name="file"
                type="text"
                value={ imgUrl }
                onChange={(e) => setImgUrl(e.target.value)}
                /> 
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">
                Description
                </Label>
                <Input
                id="exampleText"
                name="text"
                type="textarea"
                value={ eventDescription }
                onChange={(e) => setEventDescription(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDate">
                Date
                </Label>
                <Input
                id="exampleDate"
                name="date"
                placeholder="date placeholder"
                type="text"
                value={ eventDate }
                onChange={(e) => setEventDate(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleTime">
                Time
                </Label>
                <Input
                id="exampleTime"
                name="time"
                placeholder="time placeholder"
                type="time"
                value={ eventTime }
                onChange={(e) => setEventTime(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
    <Label for="exampleAddress">
      Location
    </Label>
    <Input
      id="exampleAddress"
      name="address"
      placeholder="1234 Main St"
      type="text"
      value={ location }
      onChange={(e) => setLocation(e.target.value)}
    />
  </FormGroup>
        <Button color="success">
            Create Event
        </Button>
        </Form>
      </div>
    </>
  } 



export default EventForm;
