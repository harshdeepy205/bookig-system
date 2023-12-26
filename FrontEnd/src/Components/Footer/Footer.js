import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
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
      <BottomNavigationAction label="My Booking" icon={<ConfirmationNumberIcon/>} />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  </Paper>
  )
}

export default Footer