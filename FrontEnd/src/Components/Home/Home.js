import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React,{useState,useEffect} from "react";
import { styled } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import club1 from "../../Assets/club1.jpg";
import "./Home.css";
import SportsRugbyIcon from "@mui/icons-material/SportsRugby";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import {
  CircleNotifications,
  NotificationAddOutlined,
  Notifications,
} from "@mui/icons-material";
import {useNavigate,useLocation} from 'react-router-dom';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next";
import {API_HOST} from '../../Backend';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Home = () => {
  const [value, setValue] = React.useState(0);
  const { t, i18n } = useTranslation("common");
  const navigate = useNavigate();
  const location = useLocation();
  const[clubsInfo,setClubsInfo]=useState()
  const[isClubInfo,setIsClubInfo]=useState(false)
  const[userData,setUserData]=useState()
  const[isUserData,setIsUserData]=useState(false)
  const[getNumber,setGetNumber]=useState()
  const mobileNumber=location.state.mobileNumber
  const[currentUserDetails,setCurrentUserDetails]=useState()
  const userDetail=location.state.userDetails
  
  console.log(mobileNumber,"homenumber")

  // console.log(mobileNumber ? mobileNumber:"-","mobileNumber")
  const notification=()=>{
    navigate('/notification');
  }

  const handleProfile=()=>{
    navigate('/user_profile',{state:{userDetails:userData[0]._id,mobileNumber:getNumber,value:2}})
  }

  const handleClubLists=()=>{
    navigate('/allvenues',{state:{mobileNumber:getNumber}})
  }
 
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

React.useEffect(()=>{
  getClubsInfoDetails()
  mobileNumber ? setGetNumber(mobileNumber) : setGetNumber("-")
},[])

// console.log(getNumber,"number")

  const getClubsInfoDetails=()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${API_HOST}auth/getclubsinfo`, requestOptions)
      .then(response => response.text())
      .then(result => {console.log(JSON.parse(result))
        setClubsInfo(JSON.parse(result))
        setIsClubInfo(!isClubInfo)
      })
      .catch(error => console.log('error', error));
  }


  const clubsInfoDetails=(clubDetails)=>{
    navigate('/club-info',{state:{details:clubDetails,mobileNumber:getNumber,userDetails:userData}})
  }

  const myBooking=()=>{
    // setValue(1)
    navigate('/allvenues',{state:{userDetails:userData[0]._id,mobileNumber:getNumber,value:1}})

  }

const userDetails=()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`http://localhost:5000/auth/userinfo/${mobileNumber}`, requestOptions)
    .then(response => response.text())
    .then(result =>{ 
      setUserData(JSON.parse(result))
      // checkUser()
      setIsUserData(!isUserData)
    })
    .catch(error => console.log('error', error));
}

const checkUser=()=>{
  if(userData){
    userData.map((user,index)=>{
      if(user.mobile===getNumber){
        setCurrentUserDetails(user)
      }
    })
  }
}

useEffect(()=>{
  userDetails()
},[])

// console.log(clubsInfo,"detaisl")

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {/* <Accordion sx={{ width: "20%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            first
          </AccordionSummary>
          <AccordionDetails>hi</AccordionDetails>
        </Accordion> */}
         <Box sx={{ minWidth: 80 }}>
          <FormControl>
            {/* <InputLabel id="demo-simple-select-label" sx={{fontSize:"14px"}}>Location</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              sx={{height:50,fontSize:"14px",border:"none"}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div>
          <Notifications onClick={()=>notification()}/>
        </div>
      </div>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          boxShadow: "none",
          mt: 1,
          flexDirection: "column",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <div className="cotent_container_home">


          {
            userData ? userData.map((user,index)=>{
              return(
                <>
                  {user.mobile===getNumber ? 
                  <>
                  {/* {console.log(user,"detailsss")} */}
                  <div className="user_info">
              <Card sx={{ display: "flex", alignItems: "center" }}>
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
                                    sx={{ width: 100 }}
                                    image={club1}
                                /> */}
                        <Avatar sx={{ bgcolor: deepPurple[500] , width: 56, height: 56}}>{user.fname.charAt(0).toUpperCase()}{user.lname.charAt(0).toUpperCase()}</Avatar>
                        {/* <Avatar src={club1}  sx={{ width: 56, height: 56 }}/> */}
                      </Grid>
                      <Grid item xs={8}>
                        <div
                          className="club_names"
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                          }}
                        >
                          <Typography variant="subtitle1">
                            {user.fname}{' '}{user.lname}
                          </Typography>
                        </div>
                        <div className="sports_icons">
                          <SportsRugbyIcon fontSize="small" sx={{color:"#23B26D"}}/>
                          <SportsTennisIcon fontSize="small" sx={{ ml: 1, color:"#23B26D" }} />
                          <SportsBasketballIcon
                            fontSize="small"
                            sx={{ ml: 1.2 ,color:"#23B26D"}}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </Box>
                </CardActionArea>
              </Card>
            </div>
                  </> 
                  :""}
                </>
              )
            }) :""
            }


            <div className="clubs_list" style={{minWidth:"90vw"}}>
              <div className="club_heading">
                <Typography variant="h6" sx={{mt:1}}>{t("home_title")}</Typography>
              </div>
{/* 
            {
              isClubInfo && clubsInfo.map((e,i)=>{
                return(
              <div className="clubs_cards">
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={4}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image={e.image}
                          />
                        </Grid>
                        <Grid item xs={8}>
                          <div className="club_names">
                            <Typography variant="subtitle2">
                              {e.name}
                            </Typography>
                            <p id="distance">{e.address}</p>
                          </div>
                          <div className="sports_icons">
                            <SportsRugbyIcon fontSize="small" />
                            <SportsTennisIcon fontSize="small" sx={{ ml: 1 }} />
                            <SportsBasketballIcon
                              fontSize="small"
                              sx={{ ml: 1.2 }}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardActionArea>
                </Card>
              </div>
                )
              })
            } */}

            {
              isClubInfo ? clubsInfo.map((e,i)=>{
                return(
                <div className="clubs_cards">
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                  onClick={()=>clubsInfoDetails(e)}
                >
                  <CardActionArea>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={4}
                          sx={{ display: "flex", justifyContent: "center" ,alignItems:"center"}}
                        >
                          
                          {/* <CardMedia
                            component="img"
                            sx={{ width: 100,height:100 }}
                            image={e.image}
                          /> */}

                          <img
                            src={e.image}
                            width={50}
                            height={50}
                          />
                        </Grid>
                        <Grid item xs={8}>
                          <div className="club_names">
                            <Typography variant="subtitle2">
                            {e.name}
                            </Typography>
                            <p id="distance">{e.address}</p>
                          </div>
                          <div className="sports_icons">
                            <SportsRugbyIcon fontSize="small" sx={{color:"#23B26D"}}/>
                            <SportsTennisIcon fontSize="small" sx={{ ml: 1,color:"#23B26D" }} />
                            <SportsBasketballIcon
                              fontSize="small"
                              sx={{ ml: 1.2 ,color:"#23B26D"}}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardActionArea>
                </Card>
                </div>
               
              )
              })
              : 
              <Box sx={{ display: 'flex',justifyContent:"center",marginTop:"1.5rem" }}>
                <CircularProgress color="success"/>
              </Box>
            }

            <div style={{height:"60px"}}></div>
            </div>
          </div>
        </Box>

        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="My Booking" icon={<ConfirmationNumberIcon onClick={()=>myBooking()}/>} />
            <BottomNavigationAction label="Profile" icon={<PersonIcon onClick={()=>handleProfile()}/>} />
          </BottomNavigation>
        </Paper>
      </Card>
    </>
  );
};

export default Home;
