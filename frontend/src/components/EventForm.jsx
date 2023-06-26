import { Form, Button, Col, Row, FormGroup, Label, Input } from "reactstrap";


const EventForm = ({heading, img, desc, date, time, address, city, state, zip}) => {
    return <>
      <div id="event-form">
        <Form>
            <h1 id="events-form-header">Make an Event</h1>
            <FormGroup>
              <Label >Heading</Label>
              <Input
              bsSize="lg"
              id="heading-input"
              name="heading-input"
              placeholder="Heading"
              className="mb-3"
              /> { heading }
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">
                Upload a Pic
                </Label>
                <Input
                id="exampleFile"
                name="file"
                type="file"
                /> { img }
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">
                Description
                </Label>
                <Input
                id="exampleText"
                name="text"
                type="textarea"
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
                type="date"
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
                />
            </FormGroup>
            <FormGroup>
    <Label for="exampleAddress">
      Address
    </Label>
    <Input
      id="exampleAddress"
      name="address"
      placeholder="1234 Main St"
    />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleCity">
          City
        </Label>
        <Input
          id="exampleCity"
          name="city"
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleState">
          State
        </Label>
        <Input
          id="exampleState"
          name="state"
        />
      </FormGroup>
    </Col>
    <Col md={2}>
      <FormGroup>
        <Label for="exampleZip">
          Zip
        </Label>
        <Input
          id="exampleZip"
          name="zip"
        />
      </FormGroup>
    </Col>
</Row>
        <Button color="success">
            Create Event
        </Button>
        </Form>
      </div>
    </>
  } 



export default EventForm;
