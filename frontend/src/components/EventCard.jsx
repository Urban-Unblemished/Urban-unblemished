import * as React from 'react';
import { useEffect, useState } from "react";
import {Card,Button, CardBody, CardFooter,CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import '../events.css';
import { createEvent,getAllEvents } from "../adapters/events-adapter";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EventCard(){
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
            console.log(result)
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
    return <>
  <Container id='container'fluid>
    <Card id='card'>
      <Row id='row' >
        <Col id='col'>
          <CardImg id='card-img'
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)} alt='image of neighborhood'
          />
          <CardImgOverlay>
            <CardTitle id='card-title'
            value={eventDate}
            style={{
              borderStyle:'solid',
              color:'white',
              borderColor:'black',
              borderRadius:'5px',
              width:'fit-content',
              backgroundColor:'black',
              fontSize:'30px',
            }}>{ eventDate }</CardTitle>
          </CardImgOverlay>
        </Col>
        <Col id="right-col" style={{
          backgroundColor: '#6A7152'
        }}>
          <CardBody>
            <CardTitle id='title' ></CardTitle>
            <CardTitle id='title' location={ location }>{ location }</CardTitle>
            <Button color='info' size='lg' outline>RSVP</Button>
          </CardBody>
        </Col>
      </Row>
        <CardFooter id='footer'>16+ People are Going!</CardFooter>
    </Card>
  </Container>
  </>
}