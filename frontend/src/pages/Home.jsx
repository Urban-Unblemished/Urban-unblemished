import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function changeHandler(e) {
  console.log(e);

}

function handleSubmit(e){
  e.preventDefault();
  console.log('hello')
}




function BasicModal() {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function callback() {
    console.log("hello");
    fetch("http://127.0.0.1:3000/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        img_url: "test purposes!!!",
        description: "hello description",
        header: "random",
        location: "somewhere",
      }),
    });
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log("Response:", data);
    //   // Handle the response data here
    // })
    // .catch((error) => {
    //   console.error("Error:", error);
    //   // Handle any errors that occurred during the request
    // });
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div>
        <form onSubmit={handleSubmit}>
 
  <label>Enter the description:
    <input type="text" name="description" />
  </label>
  <label>Enter the header:
    <input type="text" name="header" />
  </label>
  <label>Enter the location:
    <input type="text" name="location" />
  </label>
  <label>Upload File:
    <input type="file" name="file" />
  </label>
  <input className="submit" type="submit" value="Send" />
</form>

          
          {/* <form onSubmit={handleSubmit}>
            <label>Enter your name:
              <input type="text" />
            </label>
            <label>Enter your last name:
              <input type="text" />
            </label>
            <label>Upload File:
              <input type="file" name="file" />
            </label>
            <input className="submit" type="submit" value="Send" />
          </form> */}
        </div>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor
            ligula!!!!!!!
          </Typography> */}
          {/* <div>
            <input type="file" name="file" onChange={changeHandler} />
          </div> */}
          <Button variant="contained" onClick={() => callback()}>
            post
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default function HomePage() {
  return <>
  
    <h1>HomeNJJJJ</h1>
    <p>Put something interesting here!</p>
  </>;
}
                       