// import React from "react";
// import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from "reactstrap";

// const PostCard = ({ post }) => {
//   const { img_url, description, header, location } = post;

//   return (
//     <Card variant="outlined">
//       <CardHeader>
//         <h2><CardTitle>{header}</CardTitle></h2>
//       </CardHeader>
//       <CardBody>
//         <CardText>{description}</CardText>
//         <p>
//           <b>Location:</b> {location}
//         </p>
//       </CardBody>
//       <Button color="primary">Join This Clean Up</Button>
//       <img src={img_url} alt="Post" />
//     </Card>
//   );
// };

// export default PostCard;

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const PostCard = ({ post }) => {
  const { img_url, description, header, location, comments } = post;

  return (
    // <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          width: "300px",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* <img src={img_url} style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px" }} /> */}
          {/* <span>{header}</span> */}
        </div>
        <img src={img_url} style={{ width: "100%", marginBottom: "10px" }} />
        <h3 style={{ fontWeight: "bold" }}>{header}</h3>
        <p>{description}</p>
        {/* <p style={{ fontWeight: "bold" }}>Location: {location}</p> */}
        <Button color="primary">Comment</Button>
        <Button color="primary">Like</Button>
      </div>
      <div
        style={{
          width: "300px",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {comments ? <div>{comments}</div> : <></>}
      </div>
    </div>
  );
};

export default PostCard;
