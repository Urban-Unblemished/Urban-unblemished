import React, { useEffect, useState } from "react";
import { createEvent,getAllEvents } from "../adapters/events-adapter";
import {Card,Button, CardBody, CardFooter,CardImg, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventCard from '../components/EventCard';
import EventForm from '../components/EventForm';
import SignUpForm from "../components/SignUpForm";
import '../events.css'

export default function EventPage() {
  const [events, setEvents] = useState([]); // State to hold the list of events
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      const result = await getAllEvents()
      console.log(result)
      setEvents(result)
    }
    doFetch()
  }, [])

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return <>
    <div
      style={{
        backgroundColor: '#6A715',
        // height:'100%',
        // width: '100%'
      }}
    >
      <h1 id="events-header">Events</h1>
      <button onClick={toggleFormVisibility}>Make Event</button>
      {showForm && <EventForm /> }
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col"></div>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <Container>
                <Card>
                  <Row>
                    <Col>
                    <CardImg id='card-img' src={ event.img_url } />
                    <CardImgOverlay>
                      <CardTitle>{event.date}</CardTitle>
                    </CardImgOverlay>
                    </Col>
                    <Col>
                    <CardBody>
                        <CardTitle>{ event.header}</CardTitle>
                        <Button color="info" size="lg">RSVP</Button>
                    </CardBody>
                    </Col>

                  </Row>
                </Card>
              </Container>

            </li>
          ))}
        </ul>
      </div>
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
        </div>
      </div>
    </div>
  </>
}

{/* <div className="row row-cols-1 row-cols-md-3 g-4">
  {events.map((event, index) => (

    <div className="col" key={index}>
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
            }}>{event.date}</CardTitle>
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
    </div>
  ))}
</div>  */}