import { Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../Assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './MyBookig.css'
import club1 from '../../Assets/club1.jpg'


const MyBooking = () => {
  return (
      <>
       <Card sx={{ display: 'flex', alignItems: 'center', p: 1 ,boxShadow:"none"}}>
        <Box sx={{ flexGrow: 1 }}>
            <div className='mybooking_logo'>
                <img src={logo} sx={{ width: 80, height: 80 }} />
            </div>
          <div className='mybooking_container'>
            <div className='booking_icons_section'>
                <KeyboardBackspaceIcon fontSize="large"/>
                <SearchIcon fontSize="large"/>     
            </div>

            <div className='myBookin_heading'>
                <Typography variant='h5'>My Bookings</Typography>
            </div>
            
            <div className='upcomingList'>
                <Typography id="upcoming_subheading">Upcoming</Typography>
                <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
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
                                    <p id="distance">Order ID:123456797</p>
                                </div>

                                <Grid container sx={{alignItems:"center"}}>
                                    <Grid xs={7}>
                                        <p id="distance">19 hours ago</p>  
                                    </Grid>

                                    <Grid xs={4} className='cancel_btn'>
                                        <Button variant='contained' size='small' color='error'>Cancel</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Box>
                </Card>
               </div>

               <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
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
                                    <p id="distance">Order ID:123456797</p>
                                </div>

                                <Grid container sx={{alignItems:"center"}}>
                                    <Grid xs={7}>
                                        <p id="distance">19 hours ago</p>  
                                    </Grid>

                                    <Grid xs={4} className='cancel_btn'>
                                        <Button variant='contained' size='small' color='error'>Cancel</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Box>
                </Card>
               </div>

            </div>


            <div className='upcomingList'>
                <Typography id="upcoming_subheading">Completed</Typography>
                <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
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
                                    <p id="distance">Order ID:123456797</p>
                                </div>

                                <Grid container sx={{alignItems:"center"}}>
                                    <Grid xs={7}>
                                        <p id="distance">19 hours ago</p>  
                                    </Grid>

                                    <Grid xs={4} className='cancel_btn'>
                                        <Button variant='contained' size='small' color='success'>Book</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Box>
                </Card>
               </div>

               <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
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
                                    <p id="distance">Order ID:123456797</p>
                                </div>

                                <Grid container sx={{alignItems:"center"}}>
                                    <Grid xs={7}>
                                        <p id="distance">19 hours ago</p>  
                                    </Grid>

                                    <Grid xs={4} className='cancel_btn'>
                                        <Button variant='contained' size='small' color='success'>Book</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Box>
                </Card>
               </div>
               
               <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
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
                                    <p id="distance">Order ID:123456797</p>
                                </div>

                                <Grid container sx={{alignItems:"center"}}>
                                    <Grid xs={7}>
                                        <p id="distance">19 hours ago</p>  
                                    </Grid>

                                    <Grid xs={4} className='cancel_btn'>
                                        <Button variant='contained' size='small' color='success'>Book</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Box>
                </Card>
               </div>
            </div>
          </div>
          
        </Box>
     
     </Card>
      </>
  )
};

export default MyBooking;
