import {
  Button,
  Card,
  FilledInput,
  FormControl,
  Input,
  MenuItem,
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
import { useNavigate, useLocation } from "react-router-dom";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
// import DateAdapter from '@mui/lab/AdapterDateFns'
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useTranslation } from "react-i18next";
import { API } from "../../Backend";

const BookingNormal = () => {
  const [date, setDate] = React.useState(new Date());
  const [id, setId] = React.useState("123testadmin");
  const [duration, setDuration] = React.useState(1);
  const [people, setPeople] = React.useState(1);
  const [availableSlot, setAvailableSlot] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const clubsInfo = location.state.clubDetaisData;
  const mobileNumber = location.state.mobileNumber;
  const userDetailsData=location.state.userInfo;
  // console.log(clubsInfo);
  const { t, i18n } = useTranslation("common");
  console.log(userDetailsData,"userDetailsData")


  if(userDetailsData){
    console.log(userDetailsData,"userDetailsData")
  }


  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  const handelBack = () => {
    navigate("/club-info", {
      state: { details: clubsInfo, mobileNumber: mobileNumber },
    });
  };

  const handleBooking = () => {
    navigate("/confim-booking", { state: { slot: slotData ,bookingDate:date,userData:userDetailsData,clubDetails:clubsInfo} });
  };

  React.useEffect(() => {
    getAvailableSlots();
  }, [date]);

  const getAvailableSlots = () => {
    var requestOptions = {
      method: "GET",
    };
    var fullDate =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    fetch(`${API}auth/getavailableslots/${id}/${fullDate}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAvailableSlot(result);
      })
      .catch((error) => console.log("error", error));
  };
  
  const [slotData, setSlotData] = useState();
  const slotBooking = (slot) => {
    console.log("slot", slot);
    setSlotData(slot);
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1.2,
          boxShadow: "none",
         
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {/* <div className="main_logo">
            <img src={logo} sx={{ width: 70, height: 70 }} />
          </div>
          <div className="back_arrow">
            <KeyboardBackspaceIcon
              fontSize="large"
              onClick={() => handelBack()}
            />
          </div> */}
          <div className="filter_container">
            <div className="quick_booking">
              {/* <Typography variant="h5">{t("bookings_title")}</Typography> */}
              <div className="date">
                <Typography id="date_heading">
                  {t("quick-booking_date")}
                </Typography>
              
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    // label="Date"
                    value={date}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                    minDate={new Date()}
                  />
                </LocalizationProvider>
              </div>

              {/* <div className="duration">
                <Typography id="duration_heading">
                  {t("quick-booking_duration")}
                </Typography>
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
              </div> */}

              <div className="availabel_slots">
                <Typography id="your_sports" sx={{ mt: 4 }}>
                  {t("booking_available")}
                </Typography>

                <div className="slots_section">
                  {availableSlot.map((slot, index) => {
                    return (
                      <>
                        {slot.slot_count > 0 ? (
                          <Button
                            variant="outlined"
                            color="success"
                            onClick={() => slotBooking(slot)}
                          >
                            {`${slot.slot_start_time} - ${slot.slot_end_time}`}
                          </Button>
                        ) : (
                          <Button variant="outlined" disabled>
                            {`${slot.slot_start_time} - ${slot.slot_end_time}`}
                          </Button>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>

              {/* <div className='number_people'>
                        <div className='icons_section_2'>
                        <Typography id="number_people_heading">Number of People</Typography>
                           <div className='icons_main'>
                            <RemoveCircleIcon onClick={()=>setPeople(people-1)}/>
                            <FormControl variant="standard" sx={{ width: '5ch' }} className="people">
                            <Input
                            id="standard-adornment-weight"
                            aria-describedby="standard-weight-helper-text"
                            value={people}
                            inputProps={{
                            'aria-label': 'weight',
                            }}
                        />
                            </FormControl>
                            <AddCircleIcon onClick={()=>setPeople(people+1)}/>
                            </div>
                        </div>
                    </div> */}
            </div>
          </div>

          <div className="btn_signup_start">
            {/* <Button
              variant="contained"
              color="success"
              sx={{ mt: 5 }}
              onClick={() => handleBooking()}
            >
              Proceed
            </Button> */}
          </div>
        </Box>
      </Card>
    </>
  );
};

export default BookingNormal;
