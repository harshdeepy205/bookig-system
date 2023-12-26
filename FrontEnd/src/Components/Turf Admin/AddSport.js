import { Box, Button, Card, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "../../Assets/logo.png";
import { API } from "../../Backend";
import "./Slots.css";
import { useLocation, useNavigate } from "react-router-dom";

const AddSport = () => {
  const location = useLocation();
  const clubDetails = location.state.adminDetails;
  const id = clubDetails._id;
  const [sportName, setSportName] = React.useState("");
  const [isDataAvailable, setIsDataAvailable] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  // const [id, setId] = React.useState("anme1223");

  const [allSports, setAllSports] = React.useState([]);
  // console.log("clubDetails from login", clubDetails);

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

  const addSport = (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      turfId: id,
      sportName: sportName,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${API}auth/sportDetails`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
    setSportName("");
    setIsDataAvailable(!isDataAvailable);
  };

  useEffect(() => {
    getAllSport();
  }, [isDataAvailable]);

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
            <TextField
              id="outlined-basic"
              label="Sport Name"
              value={sportName}
              onChange={(e) => setSportName(e.target.value)}
              variant="outlined"
            />
          </div>
          <div className="btn_section" onClick={() => addSport()}>
            <Button variant="contained">Submit</Button>
          </div>

          <div className="all_sport">
            <div className="all_sport_title">
              <h2>All Your Sports</h2>
            </div>
            <div className="all_sport_list">
              {allSports.map((sport) => (
                <div className="all_sport_list_item">
                  <h5>{sport.sportName}</h5>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default AddSport;
