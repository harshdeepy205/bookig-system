import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../Assets/logo.png";
import FilterListIcon from "@mui/icons-material/FilterList";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import club1 from "../../Assets/club1.jpg";
import "./AllVenues.css";
import { useNavigate, useLocation } from "react-router-dom";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { API, API_HOST } from "../../Backend";
import SportsRugbyIcon from "@mui/icons-material/SportsRugby";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

const AllVenues = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation("common");
  const [clubsInfo, setClubsInfo] = useState();
  const [isClubInfo, setIsClubInfo] = useState(false);
  const [text, setText] = useState("");
  const mobileNumber = location.state.mobileNumber;
  const userID=location.state.userDetails;
  const navigateActive=location.state.value

console.log(navigateActive)
  // console.log(userID,"userID")
  const [searchInputArray, setSearchInputArray] = useState([]);

  const [bookingDetails, setBookingDetails] = useState([]);
  const getBookingHistory = () => {
    var requestOptions = {
      method: "GET",
    };
    let id = userID
    fetch(`${API}auth/getUserBooking/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("Heloooo", result);
        setBookingDetails(result);
      })
      .catch((error) => console.log("error", error));
  };

  const handleFilter = () => {
    navigate("/filter");
  };

  const handleHome = () => {
    navigate("/home", { state: { mobileNumber: mobileNumber } });
  };

  const handleInfo = () => {
    navigate("/club-info");
  };

  const handleProfile=()=>{
    navigate('/user_profile',{state:{userDetails:userID,mobileNumber:mobileNumber,value:2}})
  }

  // useEffect(() => {
  //     if (text.length == 0) {
  //         setSearchInputArray(clubsInfo)
  //     }
  //     else {
  //         setSearchInputArray(clubsInfo.filter(eachCard => eachCard.name.includes(text)))
  //     }
  // }, [text])

  React.useEffect(() => {
    getClubsInfoDetails();
    getBookingHistory();
  }, []);
  console.log("Booking Detailssss", bookingDetails);
  const getClubsInfoDetails = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${API_HOST}auth/getclubsinfo`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        setClubsInfo(JSON.parse(result));
        setIsClubInfo(!isClubInfo);
      })
      .catch((error) => console.log("error", error));
  };

  const clubsInfoDetails = (clubDetails) => {
    navigate("/club-info", { state: { details: clubDetails } });
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          boxShadow: "none",
          mt: 1,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <div className="mybooking_logo">
            <img src={logo} sx={{ width: 80, height: 80 }} />
          </div>
          <div className="venues_container">
            {/* <Paper
              component="form"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <ArrowBackIcon fontSize="medium" onClick={() => handleHome()} />
              </IconButton>
              <InputBase
                type="search"
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Clubs Name"
                inputProps={{ "aria-label": "search club name" }}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper> */}
            {/* <div className="venu_heading">
              <Typography variant="h6">{t("booking_title")}</Typography>
              <Button
                variant="contained"
                endIcon={<FilterListIcon />}
                onClick={() => handleFilter()}
              >
                {t("booking_filter")}
              </Button>
            </div> */}

            <div className="venu_lists" style={{ minWidth: "90vw" }}>
              <div className="venu_heading">
                <Typography variant="h6">Booking History</Typography>
              </div>
            { 
              bookingDetails.map((e, i) => {
                    return (
                      <div className="clubs_cards">
                        <Card
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                          // onClick={() => clubsInfoDetails(e)}
                        >
                          <CardActionArea>
                            <Box sx={{ flexGrow: 1 }}>
                              <Grid container spacing={2}>
                                <Grid
                                  item
                                  xs={4}
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  {/* <CardMedia
                            component="img"
                            sx={{ width: 100,height:100 }}
                            image={e.image}
                          /> */}
                                  <img src={e.clubImage} width={50} height={50} />
                                </Grid>
                                <Grid item xs={8}>
                                  <div className="club_names">
                                    <Typography variant="subtitle2">
                                      {e.clubName}
                                    </Typography>
                                    <p id="distance">{e.time}</p>
                                    <p id="distance">{e.date}</p>
                                    <p id="distance">{e.price}</p>
                                  </div>
                                </Grid>
                              </Grid>
                            </Box>
                          </CardActionArea>
                        </Card>
                      </div>
                    );
                  })}

              <div style={{ height: "60px" }}></div>

              {/* <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
                    <CardActionArea onClick={()=>handleInfo()}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sx={{display:"flex",justifyContent:"center"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100 }}
                                    image={club1}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <div className='club_names'>
                                <Typography variant='subtitle2'>Dada Saheb Palke Memorial Statium</Typography>
                                    <p id="distance">Sigra(~4KM)</p>
                                </div>
                               
                            </Grid>
                        </Grid>
                    </Box>
                    </CardActionArea>
                </Card>
               </div>

               <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
                    <CardActionArea onClick={()=>handleInfo()}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sx={{display:"flex",justifyContent:"center"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100 }}
                                    image={club1}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <div className='club_names'>
                                <Typography variant='subtitle2'>Dada Saheb Palke Memorial Statium</Typography>
                                    <p id="distance">Sigra(~4KM)</p>
                                </div>  
                            </Grid>
                        </Grid>
                    </Box>
                    </CardActionArea>
                </Card>
               </div>

               <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
                    <CardActionArea onClick={()=>handleInfo()}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sx={{display:"flex",justifyContent:"center"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100 }}
                                    image={club1}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <div className='club_names'>
                                <Typography variant='subtitle2'>Dada Saheb Palke Memorial Statium</Typography>
                                    <p id="distance">Sigra(~4KM)</p>
                                </div>
                               
                            </Grid>
                        </Grid>
                    </Box>
                    </CardActionArea>
                </Card>
               </div>



               <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
                    <CardActionArea onClick={()=>handleInfo()}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sx={{display:"flex",justifyContent:"center"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100 }}
                                    image={club1}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <div className='club_names'>
                                <Typography variant='subtitle2'>Dada Saheb Palke Memorial Statium</Typography>
                                    <p id="distance">Sigra(~4KM)</p>
                                </div>
                               
                            </Grid>
                        </Grid>
                    </Box>
                    </CardActionArea>
                </Card>
               </div>



               <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
                    <CardActionArea onClick={()=>handleInfo()}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sx={{display:"flex",justifyContent:"center"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100 }}
                                    image={club1}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <div className='club_names'>
                                <Typography variant='subtitle2'>Dada Saheb Palke Memorial Statium</Typography>
                                    <p id="distance">Sigra(~4KM)</p>
                                </div>
                               
                            </Grid>
                        </Grid>
                    </Box>
                    </CardActionArea>
                </Card>
               </div>



               <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
                    <CardActionArea onClick={()=>handleInfo()}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sx={{display:"flex",justifyContent:"center"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100 }}
                                    image={club1}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <div className='club_names'>
                                <Typography variant='subtitle2'>Dada Saheb Palke Memorial Statium</Typography>
                                    <p id="distance">Sigra(~4KM)</p>
                                </div>
                               
                            </Grid>
                        </Grid>
                    </Box>
                    </CardActionArea>
                </Card>
               </div>

               <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
                    <CardActionArea onClick={()=>handleInfo()}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sx={{display:"flex",justifyContent:"center"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100 }}
                                    image={club1}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <div className='club_names'>
                                <Typography variant='subtitle2'>Dada Saheb Palke Memorial Statium</Typography>
                                    <p id="distance">Sigra(~4KM)</p>
                                </div>
                               
                            </Grid>
                        </Grid>
                    </Box>
                    </CardActionArea>
                </Card>
               </div>

               <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
                    <CardActionArea onClick={()=>handleInfo()}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sx={{display:"flex",justifyContent:"center"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100 }}
                                    image={club1}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <div className='club_names'>
                                <Typography variant='subtitle2'>Dada Saheb Palke Memorial Statium</Typography>
                                    <p id="distance">Sigra(~4KM)</p>
                                </div>
                               
                            </Grid>
                        </Grid>
                    </Box>
                    </CardActionArea>
                </Card>
               </div>



               <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
                    <CardActionArea onClick={()=>handleInfo()}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sx={{display:"flex",justifyContent:"center"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100 }}
                                    image={club1}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <div className='club_names'>
                                <Typography variant='subtitle2'>Dada Saheb Palke Memorial Statium</Typography>
                                    <p id="distance">Sigra(~4KM)</p>
                                </div>
                               
                            </Grid>
                        </Grid>
                    </Box>
                    </CardActionArea>
                </Card>
               </div> */}
            </div>
          </div>
        </Box>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={navigateActive}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon onClick={() => handleHome()} />}
            />
            <BottomNavigationAction
              label="My Booking"
              icon={<ConfirmationNumberIcon />}
            />
            <BottomNavigationAction label="Profile" icon={<PersonIcon  onClick={()=>handleProfile()}/>} />
          </BottomNavigation>
        </Paper>
      </Card>
    </>
  );
};

export default AllVenues;
