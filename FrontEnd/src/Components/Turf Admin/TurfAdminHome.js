import { Button, Card, TextField } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddSport from "./AddSport";
import logo from "../../Assets/logo.png";
import { Box } from "@mui/system";

const TurfAdminHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const clubDetails = location.state.adminDetails;
  console.log("clubDetails", clubDetails);

  const handleAddSportSubmit = () => {
    navigate("/add_sport", { state: { adminDetails: clubDetails } });
  };
  const handleAddSlotSubmit = () => {
    navigate("/slots", { state: { adminDetails: clubDetails } });
  };

  return (
    <>
    
    <Card
        sx={{
          display: "flex",
          alignItems: "center",
          p: 3,
          boxShadow: "none",
          mt: 1,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <div className="mybooking_logo">
            <img src={logo} sx={{ width: 80, height: 80 }} />
          </div>

          <TextField
          id="outlined-read-only-input"
          label="Name"
          defaultValue={clubDetails ? clubDetails.name :"Loading..."} 
          InputProps={{
            readOnly: true,
          }}
          sx={{mt:1.5}}
        />

        <TextField
          id="outlined-read-only-input"
          label="Address"
          defaultValue={clubDetails ? clubDetails.address :"Loading..."}
          InputProps={{
            readOnly: true,
          }}
          sx={{mt:1.5}}
        />

        <TextField
          id="outlined-read-only-input"
          label="Mobile Number"
          defaultValue={clubDetails ? clubDetails.mobileNo :"Loading..."}
          InputProps={{
            readOnly: true,
          }}
          sx={{mt:1.5}}
        />

        <div style={{marginTop:"1.5rem" ,display:"flex",justifyContent:"space-between"}}>
            <Button variant="outlined" sucess onClick={() => handleAddSportSubmit()}>
                Add Sport
            </Button>
            <Button variant="outlined" sucess onClick={() => handleAddSlotSubmit()}>
                Add Slot
            </Button>
        </div>

        </Box>
    </Card>
     
    </>
  );
};

export default TurfAdminHome;
