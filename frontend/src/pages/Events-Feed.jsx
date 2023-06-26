import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventCard from '../components/EventCard';
import EventForm from '../components/EventForm';
import '../events.css'
import { Button } from "reactstrap";

export default function EventPage() {
return <>
  <div
  style={{
    backgroundColor:'#6A715',
    // height:'100%',
    // width: '100%'
  }}
  >
    <h1 id="events-header">Events</h1>
    <Button>Create an Event</Button>
    {/* <EventForm /> */}
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <EventCard />
      </div>
      <div className="col">
        <EventCard />
      </div>
      <div className="col">
        <EventCard />
      </div>
      <div className="col">
        <EventCard />
      </div>
      <div className="col">
        <EventCard />
      </div>
      <div className="col">
        <EventCard />
      </div>
    </div>
  </div>
</>
}

