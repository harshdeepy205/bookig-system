import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import logo from '../../Assets/logo.png'
import './Notification.css'
import club1 from '../../Assets/club1.jpg'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Notification = () => {
    const navigate = useNavigate();
    
    const handleBack=()=>{
        navigate('/home');
      }
    
  return (
      <>
       <Card sx={{ display: 'flex', alignItems: 'center', p: 4 ,boxShadow:"none",mt:1}}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid xs={3} md={2}>
            {/* <div className='notification_logo' > */}
                <ArrowBackIcon fontSize="medium" onClick={()=>handleBack()}/>
            {/* </div> */}
                </Grid>
                <Grid xs={8} md={8}>
                    <img src={logo} sx={{ width: 70, height: 70 }} />
                </Grid>
            </Grid>
            <div className='notification_container'>
                <Typography variant='h5'>Notifications</Typography>
            
                <div className='cards_lists'>
            <Typography id="days">Today</Typography>

                <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
                    <CardActionArea>
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
                    <CardActionArea>
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
                    <CardActionArea>
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


                </div>

                <div className='cards_lists'>
            <Typography id="days">11 Jan 2022</Typography>

                <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
                    <CardActionArea>
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
                    <CardActionArea>
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
                    <CardActionArea>
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


                </div>

                <div className='cards_lists'>
            <Typography id="days">12 Jan 2022</Typography>

                <div className='clubs_cards'>   
                <Card sx={{ display: 'flex', alignItems: 'center',flexDirection:"column"}}> 
                    <CardActionArea>
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
                    <CardActionArea>
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
                    <CardActionArea>
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


                </div>
            </div>
          
        </Box>
     </Card>
      </>
  );
};

export default Notification;
