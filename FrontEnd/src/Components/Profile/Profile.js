import { Avatar, BottomNavigation, BottomNavigationAction, Box, Card, CardActionArea, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import React, { useEffect,useState } from 'react'
import SportsRugbyIcon from "@mui/icons-material/SportsRugby";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { styled } from "@mui/material/styles";
import { deepOrange, deepPurple } from '@mui/material/colors';
import logo from "../../Assets/logo.png";
import './Profile.css'
import HistoryIcon from '@mui/icons-material/History';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import Footer from '../Footer/Footer';
import { useNavigate,useLocation } from 'react-router-dom';

const Profile = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const location=useLocation()
  const userId=location.state.userDetails
  const mobileNumber=location.state.mobileNumber
  const navigateValue=location.state.value
  const[userData,setUserData]=useState()

  
  const userDetails=()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://localhost:5000/auth/userinfo/${mobileNumber}`, requestOptions)
      .then(response => response.text())
      .then(result =>{ 
        setUserData(JSON.parse(result))
      })
      .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    userDetails()
  },[])

  const handleHome=()=>{
    navigate('/home',{state:{mobileNumber:mobileNumber}})
  }

  const myBooking=()=>{
    // setValue(1)
    navigate('/allvenues',{state:{userDetails:userId,mobileNumber:mobileNumber,value:1}})

  }

  return (
    <>
        <div className="cotent_container_home">
          <div className="app_logo">
            <img src={logo} sx={{ width: 80, height: 80 }} />
          </div>
      {
        userData ? userData.map((item,index)=>{
          return(
            <div className="user_info">
            <Card sx={{ display: "flex", alignItems: "center",boxShadow:"none",mt:2 }}>
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
                        <Avatar sx={{ bgcolor: deepPurple[500] , width: 56, height: 56}}>{item.fname.charAt(0).toUpperCase()}{item.lname.charAt(0).toUpperCase()}</Avatar>
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
                          {item.fname}{' '}{item.lname}
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
          )
         
        })
          
          : "Loading"
      }
          <div className="details_section">
            <Card sx={{ display: "flex", alignItems: "center" ,borderRadius:"5%",boxShadow:2,p:1}}>
                <Box sx={{ flexGrow: 1 }}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <HistoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="History" />
                      </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <ContactSupportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Help and Support" />
                      </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <LockIcon />
                        </ListItemIcon>
                        <ListItemText primary="Privacy Policy" />
                      </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>

                <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                elevation={3}
              >
                <BottomNavigation
                  showLabels
                  value={navigateValue}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction label="Home" icon={<HomeIcon onClick={()=>handleHome()}/>} />
                  <BottomNavigationAction label="My Booking" icon={<ConfirmationNumberIcon onClick={()=>myBooking()}/>} />
                  <BottomNavigationAction label="Profile" icon={<PersonIcon/>} />
                </BottomNavigation>
              </Paper>
            </Card>
          </div>

          
        </div>
    </>
  )
}

export default Profile