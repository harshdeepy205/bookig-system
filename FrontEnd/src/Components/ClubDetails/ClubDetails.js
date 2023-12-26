import {
  Box,
  Button,
  Card,
  MobileStepper,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./CubDetails.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BookingNormal from "../Booking/BookingNormal";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import { API } from "../../Backend";
import logo from "../../Assets/logo.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const ClubDetails = () => {
  const [date, setDate] = React.useState(new Date());
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const { t, i18n } = useTranslation("common");
  const location = useLocation();
  const [clubsInfoDetails, setClubsInfoDetails] = useState();
  let slotsTimeArray = [];
  const [availableSlot, setAvailableSlot] = useState([]);
  const [allSports, setAllSports] = React.useState([]);
  const [sport, setSport] = React.useState("");
  const [getSlotId, setGetSlotId] = React.useState([]);
  const [getSlotDate, setGetSlotDate] = React.useState("");
  let currentHour;

  let tempdate1 = new Date();
  var fullDate =
    tempdate1.getDate() +
    "-" +
    (tempdate1.getMonth() + 1) +
    "-" +
    tempdate1.getFullYear();
  const currentDate = fullDate;

  const clubDetaisData = location.state.details;
  const mobileNumber = location.state.mobileNumber;
  const userInfo = location.state.userDetails;
  const id = clubDetaisData._id;

  const [startTime, setStartTime] = React.useState(
    new Date(clubDetaisData.start_time)
  );
  const [endTime, setEndTime] = React.useState(
    new Date(clubDetaisData.end_time)
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleDateChange = (newValue) => {
    setDate(newValue);

    var slotDateNew =
      newValue.getDate() +
      "-" +
      (newValue.getMonth() + 1) +
      "-" +
      newValue.getFullYear();
    setGetSlotDate(slotDateNew);
  };

  const handleBack = () => {
    navigate("/home", { state: { mobileNumber: mobileNumber,userDetails: userInfo} });
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleBooking = () => {
    navigate("/booking", {
      state: {
        clubDetaisData: clubsInfoDetails,
        mobileNumber: mobileNumber,
        userInfo: userInfo,
      },
    });
  };

  const setDetails = (details) => {
    setClubsInfoDetails(details);
  };

  useEffect(() => {
    setDetails(location.state.details);
  }, []);

  const [slotData, setSlotData] = useState();

  const slotBooking = (slot) => {
    setSlotData(slot);
  };

  React.useEffect(() => {
    getAvailableSlots();
  }, [date]);

  React.useEffect(() => {
    getAllSport();

    setStartTime(new Date(clubDetaisData.start_time));
    setEndTime(new Date(clubDetaisData.end_time));

    let tempdate = new Date();

    const noSlot = endTime.getHours() - startTime.getHours();
    var fullDate =
      tempdate.getDate() +
      "-" +
      (tempdate.getMonth() + 1) +
      "-" +
      tempdate.getFullYear();

   

    let hour = tempdate.getHours();
    if (hour / 10 == 1) {
      currentHour = hour % 10;
    } else {
      currentHour = (hour % 10) + 10;
    }
    for (let i = 0; i < noSlot; i++) {
      var raw = {
        slot_date: getSlotDate,
        slot_id: i + 1,
        slot_start_time: startTime.getHours() + i,
        slot_count: 1,
        slot_end_time: startTime.getHours() + i + 1,
        clubId: id,
      };
      slotsTimeArray.push(raw);
    }

    setAvailableSlot(slotsTimeArray);

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
        setGetSlotId(result);
      })
      .catch((error) => console.log("error", error));
  };

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

  const handleChange = (event) => {
    setSport(event.target.value);
  };

  const handleConfirmBooking = () => {
    navigate("/confim-booking", {
      state: {
        slot: slotData,
        userData: userInfo,
        clubDetails: clubDetaisData,
        sport: sport,
        mobileNumber: mobileNumber,
      },
    });
  };

// console.log(slotData,"slotdetails",sport,"sports")

  const booking = () => {
    return (
      <>
        <Card
          sx={{
            display: "flex",
            p: 1.2,
            boxShadow: "none",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              minWidth: 120,
              mt: 1.5,
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Sports
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sport}
                label="Select Sport"
                onChange={handleChange}
              >
                {allSports &&
                  allSports.map((sport, index) => {
                    return (
                      <MenuItem key={index} value={sport}>
                        {sport.sportName}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <div className="filter_container">
              <div className="quick_booking">
                <div className="date">
                  <Typography id="date_heading">
                    {t("quick-booking_date")}
                  </Typography>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={date}
                      onChange={handleDateChange}
                      renderInput={(params) => <TextField {...params} />}
                      minDate={new Date()}
                    />
                  </LocalizationProvider>
                </div>

                <div className="availabel_slots">
                  <Typography id="your_sports" sx={{ mt: 4 }}>
                    {t("booking_available")}
                  </Typography>

                  <div className="slots_section">
                    {availableSlot.map((slot, index) => {
                      return (
                        <>
                          { !((date.getDate() == new Date().getDate() &&
                          new Date().getHours() >= slot.slot_start_time)|| getSlotId.some(slotData => slotData.slotId == slot.slot_id ))? (
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
              </div>
            </div>
          </Box>
        </Card>
      </>
    );
  };

  return (
    <>
      <Card sx={{ display: "flex", boxShadow: "none" }}>
        <Box sx={{ flexGrow: 1 }}>
          <div className="mybooking_logo" style={{ marginTop: "1rem" }}>
            <img src={logo} sx={{ width: 80, height: 80 }} />
          </div>
          <div className="back_arrow_info">
            <KeyboardBackspaceIcon
              fontSize="large"
              onClick={() => handleBack()}
            />
          </div>

          <div className="clubs_images">
            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: 230,
                          display: "block",
                          maxWidth: 400,
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                variant="dots"
                steps={6}
                position="static"
                activeStep={activeStep}
                sx={{ maxWidth: 400, flexGrow: 1, justifyContent: "center" }}
              />
            </Box>
          </div>

          <div className="club_details">
            <Card sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} id="info_heading">
                  <Grid item xs={8}>
                    <div className="club_names">
                      <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
                        {clubsInfoDetails ? clubsInfoDetails.name : "-"}
                      </Typography>
                      <p id="distance">
                        {clubDetaisData ? clubDetaisData.address : "-"}
                      </p>
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={4}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <FavoriteBorderIcon />
                    <ShareIcon sx={{ ml: 1.5 }} />
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </div>

          {booking()}

          <div className="sport_rate_list">
            <Card sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ flexGrow: 1, p: 1 }}>
                <Typography variant="subtitle2" id="sport_rate">
                  Available Sports
                </Typography>
                <Grid container spacing={2} id="grid_container">
                  <Grid item xs={6}>
                    <div className="club_rate_list">
                      <Typography variant="subtitle2">
                        {sport ? sport.sportName : ""}
                      </Typography>
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="club_price">
                      <Typography variant="subtitle2">
                        {sport ? sport.sportPrice : ""}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </div>

          <div className="map_container"></div>

          <div className="button_container">
            <Button variant="outlined" id="btn_1">
              {t("venue_call")}
            </Button>

            { slotData!=undefined && sport !=''?
            
            <Button
              variant="contained"
              id="btn_2"
              onClick={() => handleConfirmBooking()}
            >
              {t("venue_book")}
            </Button>
            :
            <Button
            variant="disabled"
            onClick={() => handleConfirmBooking()}
          >
            {t("venue_book")}
          </Button>
}
          </div>
        </Box>
      </Card>
    </>
  );
};

export default ClubDetails;
