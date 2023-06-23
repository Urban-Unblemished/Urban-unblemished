import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from "reactstrap";


const EventCard = ({ heading, img,  description, date, time, location }) => {
    return (
      <Card variant="outlined">
        <CardHeader>
          <CardTitle>Brownsville's Dirt Level is High</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText> As I walk through Brownsville, Brooklyn on a weekly basis, I watch the same set of trash be blown in the wind. Lets team up to make our neighborhood green again! </CardText>
          <p>
            <b>Date:</b> {date}
            <br />
            <b>Time:</b> {time}
            <br />
            <b>Location:</b> {location}
          </p>
        </CardBody>
        <Button color="primary">Join This Clean Up</Button>
      </Card>
    );
  };

export default EventCard; 