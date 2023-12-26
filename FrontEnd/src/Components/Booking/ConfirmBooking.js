import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import logo from "../../Assets/logo.png";
import club1 from "../../Assets/club1.jpg";
// import { useNavigate } from "react-router-dom";
import "./ConfirmBooking.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { API, API_HOST } from "../../Backend";
import { useNavigate, useLocation } from "react-router-dom";
import "./ConfirmBooking.css";

const ConfirmBooking = () => {
  const location = useLocation();
  const slotDetails = location.state.slot;
  const clubDetails = location.state.clubDetails;
  const userDetails = location.state.userData;
  const sportDetails = location.state.sport;
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("common");
  const mobileNumber=location.state.mobileNumber

  const handleBack = () => {
    navigate("/club-info",{state:{userDetails:userDetails,details:clubDetails, mobileNumber: mobileNumber}});
  };



  console.log(
    slotDetails,
    "slotDetails",
    clubDetails,
    "clubDetails",
    userDetails,
    "userDetails"
  );

  const [getUserData, setUserData] = useState("");
  const [dataPresent, setDataPresent] = useState(false);
  console.log(userDetails, "userDetails");

  // async function getData() {
  //   let response = await fetch("https://randomuser.me/api");
  //   let data = await response.json();
  //   setUserData(data.results);
  //   setDataPresent(true);
  //   return data;
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  // console.log(getUserData);

  const booking = (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      fname: userDetails[0].fname,
      lname: userDetails[0].lname,
      email: userDetails[0].email,
      userId: userDetails[0]._id,
      date: slotDetails.slot_date,
      price: sportDetails.sportPrice,
      time: `${slotDetails.slot_start_time}-${slotDetails.slot_end_time}`,
      clubId: clubDetails._id,
      clubName: clubDetails.name,
      isPaymentDone: false,
      paymentMode: "online",
      clubImage: clubDetails.image,
      sportName: sportDetails.sportName,
      slotId: slotDetails.slot_id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${API}auth/userBooking`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const bookingOnline = (paymentId) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      fname: userDetails[0].fname,
      lname: userDetails[0].lname,
      email: userDetails[0].email,
      userId: userDetails[0]._id,
      date: slotDetails.slot_date,
      price: sportDetails.sportPrice,
      time: `${slotDetails.slot_start_time}-${slotDetails.slot_end_time}`,
      clubId: clubDetails._id,
      clubName: clubDetails.name,
      isPaymentDone: true,
      paymentMode: "online",
      clubImage: clubDetails.image,
      sportName: sportDetails.sportName,
      razorpaySignature: paymentId,
      slotId: slotDetails.slot_id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${API}auth/userBooking`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  // console.log(getUserData);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay(price) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post(`${API_HOST}payment/orders`, {
      amount: price,
    });
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    console.log(result, "result data");

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_chMdzVi1BnMpHt",
      amount: amount.toString(),
      currency: "INR",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        console.log(data, "data");
        if (data.razorpaySignature) {
          bookingOnline(data.razorpaySignature);
        }

        const result = await axios.post(`${API_HOST}payment/success`, data);
        if(result){
          navigate('/home',{state:{mobileNumber:mobileNumber}})
          alert(result.data.msg);

        }
      },
      notes: {
        address: "Example Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <>
      <Card
        sx={{ display: "flex", alignItems: "center", p: 1, boxShadow: "none" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <div className="mybooking_logo">
            <img src={logo} sx={{ width: 80, height: 80 }} />
          </div>
          <div className="mybooking_container">
            <div className="booking_icons_section">
              <KeyboardBackspaceIcon
                fontSize="large"
                onClick={() => handleBack()}
              />
            </div>

            <div className="myBookin_heading">
              <Typography variant="h5">{t("confirm_title")}</Typography>
            </div>

            <div className="booking_club_info">
              <Typography id="selected_heading">{t("confirm_desc")}</Typography>

              <div className="clubs_cards">
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <div className="club_info">
                          <Typography variant="subtitle2">
                            <h3>Club Name : {clubDetails.name}</h3>
                          </Typography>
                          <div className="book_date">
                            <p id="distance">Date - {slotDetails.slot_date}</p>
                            <p id="distance">
                              Time -{" "}
                              {`${slotDetails.slot_start_time} - ${slotDetails.slot_end_time}`}
                            </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        sx={{ display: "flex", justifyContent: "center" }}
                      ></Grid>
                    </Grid>
                  </Box>
                </Card>
              </div>

              <div className="sport_select">
                <Typography id="selected_heading">
                  {t("confirm_selection")}
                </Typography>
                <div className="display_final_rate">
                  <Typography variant="subtitle2" id="rate">
                    Sport Name - {sportDetails ? sportDetails.sportName : ""}
                  </Typography>
                </div>
                <div className="display_final_rate">
                  <Typography variant="subtitle2" id="rate">
                    Slot Price - {sportDetails ? sportDetails.sportPrice : ""}
                  </Typography>
                </div>
              </div>

              <div className="sport_select">
                <Typography id="selected_heading">
                  {t("confirm_price")}
                </Typography>
                <div className="display_final_rate">
                  <Grid container spacing={2} id="grid_container">
                    <Grid item xs={6}>
                      <div className="total_amount">
                        <Typography variant="subtitle2">
                          {t("confirm_venue")}
                        </Typography>
                        <Typography variant="subtitle2">
                          {t("confirm_gst")}
                        </Typography>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <div className="total_price">
                        <Typography variant="subtitle2">
                          Rs.{sportDetails ? sportDetails.sportPrice : ""}
                        </Typography>
                        <Typography variant="subtitle2">
                          Rs.
                          {parseInt(
                            sportDetails ? sportDetails.sportPrice : ""
                          ) * 0.18}
                        </Typography>
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div className="final_amount_label">
                        <Typography variant="subtitle2">
                          {t("confirm_total")}
                        </Typography>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <div className="final_price">
                        <Typography variant="subtitle2">
                          Rs.
                          {parseInt(
                            sportDetails ? sportDetails.sportPrice : ""
                          ) +
                            parseInt(
                              sportDetails ? sportDetails.sportPrice : ""
                            ) *
                              0.18}
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>

            <div className="btn_container">
              {/* <Button variant="contained" id="btn2" onClick={() => booking()}>
                Confirm
              </Button> */}
              <Button variant="outlined" id="btn1">
                {t("confirm_pay-venue")}
              </Button>
              <Button
                variant="contained"
                id="btn2"
                // onClick={() => displayRazorpay(1500)}
                onClick={() =>
                  displayRazorpay(
                    parseInt(sportDetails ? sportDetails.sportPrice : "") +
                      parseInt(sportDetails ? sportDetails.sportPrice : "") *
                        0.18
                  )
                }
              >
                {t("confirm_pay")}
              </Button>
            </div>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default ConfirmBooking;
