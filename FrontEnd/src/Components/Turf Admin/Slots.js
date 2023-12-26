import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "../../Assets/logo.png";
import { DatePicker, TimePicker } from "@mui/lab";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { API_HOST, API, CLOUDNAIRY_API } from "../../Backend";
import { useLocation, useNavigate } from "react-router-dom";
import "./Slots.css";

const Slots = () => {
  const [sport, setSport] = React.useState("");
  const [date, setDate] = React.useState();
  const [startTime, setStartTime] = React.useState(
    new Date("2014-08-18T09:11:54")
  );
  const [endTime, setEndTime] = React.useState(new Date("2014-08-18T21:11:54"));
  const [price, setPrice] = React.useState("");

  const [allSports, setAllSports] = React.useState([]);

  const location = useLocation();
  const clubDetails = location.state.adminDetails;
  const id = clubDetails._id;

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };
  const handleStartTimeChange = (newValue) => {
    setStartTime(newValue);
  };
  const handleEndTimeChange = (newValue) => {
    setEndTime(newValue);
  };
  const handleChange = (event) => {
    setSport(event.target.value);
  };

  const addingSlot = (e) => {
    const noSlot = endTime.getHours() - startTime.getHours();
    var fullDate =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

    for (let i = 0; i < noSlot; i++) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        user_id_admin: id,
        slot_date: fullDate,
        slot_price: price,
        slot_count: 1,
        slot_start_time: startTime.getHours() + i,
        slot_end_time: startTime.getHours() + i + 1,
        slot_status: "available",
        slot_booked_by: clubDetails.name,
        sport_name: sport,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(`${API}auth/slots`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    }
  };

  // <<<<< Get Sport List for Drop Down Start
  const getAllSport = () => {
    var requestOptions = {
      method: "GET",
    };
    fetch(`${API}auth/getSportDetails/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllSports(result);
      })
      .catch((error) => console.log("error", error));
  };
  // Get Sport List for Drop Down End>>>>>>>>>>>

  useEffect(() => {
    getAllSport();
  }, []);

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

          <div className="basic_details">
            {/* <TextField
              id="outlined-basic"
              label="Sport Name"
              value={sportName}
              onChange={(e) => setSportName(e.target.value)}
              variant="outlined"
            /> */}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Sport
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sport}
                  label="Sport"
                  onChange={handleChange}
                >
                  {allSports &&
                    allSports.map((sport, index) => {
                      return (
                        <MenuItem key={index} value={sport.sportName}>
                          {sport.sportName}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={date}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} sx={{mt:1.5}}/>}
                minDate={new Date()}
              />
              <TimePicker
                label="Start Time"
                value={startTime}
                onChange={handleStartTimeChange}
                renderInput={(params) => <TextField {...params} sx={{mt:1.5}}/>}
                
              />
              <TimePicker
                label="End Time"
                value={endTime}
                onChange={handleEndTimeChange}
                renderInput={(params) => <TextField {...params} sx={{mt:1.5}} />}
                minTime={startTime}
                
              />
            </LocalizationProvider>
            <TextField
              id="outlined-basic"
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              variant="outlined"
              sx={{mt:1.5}}
            />
          </div>
          <div className="btn_section">
            <Button variant="contained" onClick={addingSlot}>
              Submit
            </Button>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default Slots;
