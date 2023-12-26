import {
  Card,
  FilledInput,
  FormControl,
  Input,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Booking.css";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { TextField } from "@mui/material";
import { API } from "../../Backend";

const Booking = () => {
  const [value, setValue] = React.useState(new Date());
  const [duration, setDuration] = React.useState(1);
  const [people, setPeople] = React.useState(1);

  const handleChange = (newValue) => {
    setValue(newValue);
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
          <div className="main_logo">
            <img src={logo} sx={{ width: 70, height: 70 }} />
          </div>
          <div className="back_arrow">
            <KeyboardBackspaceIcon fontSize="large" />
          </div>
          <div className="filter_container">
            <div className="quick_booking">
              <Typography variant="h5">Quick Booking</Typography>
              <div className="date">
                <Typography id="date_heading">Date</Typography>
                <TextField
                  id="date"
                  type="date"
                  defaultValue={value}
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>

              <div className="duration">
                <Typography id="duration_heading">Duration</Typography>
                <div className="icons_section">
                  <RemoveCircleIcon onClick={() => setDuration(duration - 1)} />
                  <FormControl
                    variant="standard"
                    sx={{ width: "5ch" }}
                    className="input_field"
                  >
                    <Input
                      id="standard-adornment-weight"
                      value={duration}
                      aria-describedby="standard-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </FormControl>
                  <AddCircleIcon onClick={() => setDuration(duration + 1)} />
                </div>

                <div className="number_people">
                  <div className="icons_section_2">
                    <Typography id="number_people_heading">
                      Number of People
                    </Typography>
                    <div className="icons_main">
                      <RemoveCircleIcon onClick={() => setPeople(people - 1)} />
                      <FormControl
                        variant="standard"
                        sx={{ width: "5ch" }}
                        className="people"
                      >
                        <Input
                          id="standard-adornment-weight"
                          aria-describedby="standard-weight-helper-text"
                          value={people}
                          inputProps={{
                            "aria-label": "weight",
                          }}
                        />
                      </FormControl>
                      <AddCircleIcon onClick={() => setPeople(people + 1)} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="your_sports_booking">
                <Typography id="your_sports" sx={{ mt: 4 }}>
                  Your Sports
                </Typography>

                <div className="sports_logo_bookingr">
                  <div className="name_logo_booking">
                    <SportsBasketballIcon fontSize="large" />
                    <Typography variant="subtitle2">Cricket</Typography>
                  </div>
                  <div className="name_logo_booking">
                    <SportsBasketballIcon fontSize="large" />
                    <Typography variant="subtitle2">Cricket</Typography>
                  </div>
                  <div className="name_logo_booking">
                    <SportsBasketballIcon fontSize="large" />
                    <Typography variant="subtitle2">Cricket</Typography>
                  </div>
                  <div className="name_logo_booking">
                    <SportsBasketballIcon fontSize="large" />
                    <Typography variant="subtitle2">Cricket</Typography>
                  </div>
                  <div className="name_logo_booking">
                    <SportsBasketballIcon fontSize="large" />
                    <Typography variant="subtitle2">Cricket</Typography>
                  </div>
                </div>
              </div>

              <div className="your_sports_booking">
                <Typography id="your_sports" sx={{ mt: 4 }}>
                  Other Sports
                </Typography>

                <div className="sports_logo_bookingr">
                  <div className="name_logo_booking">
                    <SportsBasketballIcon fontSize="large" />
                    <Typography variant="subtitle2">Cricket</Typography>
                  </div>
                  <div className="name_logo_booking">
                    <SportsBasketballIcon fontSize="large" />
                    <Typography variant="subtitle2">Cricket</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default Booking;
