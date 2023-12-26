import { Box, Button, Card, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "../../Assets/logo.png";
import { API } from "../../Backend";
import "./Slots.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mobileNo, setMobileNo] = React.useState("");
  const [adminData, setAdminData] = React.useState([]);
  const navigate = useNavigate();

  const handleSubmit = (result) => {
    navigate("/turf_admin_home", { state: { adminDetails: result } });
  };

  const getUser = () => {
    var requestOptions = {
      method: "GET",
    };
    fetch(`${API}auth/turfadminlogin/${mobileNo}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAdminData(result);
        handleSubmit(result);
      })
      .catch((error) => console.log("error", error));
  };
  console.log("adminData", adminData);
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
              label="Mobile No"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              variant="outlined"
            />
          </div>
          <div
            className="btn_section"
            onClick={() => {
              getUser();
            }}
          >
            <Button variant="contained">Login</Button>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default Login;
