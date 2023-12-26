import { Box, Button, Card, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { useNavigate } from 'react-router-dom';
import './Filter.css'


const Filter = () => {

const navigate = useNavigate();

const handelBack=()=>{
    navigate('/allvenues')
}
  return (
      <>
    <Card sx={{ display: 'flex', alignItems: 'center', p: 4 ,boxShadow:"none",mt:1}}>
        <Box sx={{ flexGrow: 1 }}>
            <div className='back_arrow_filter'>
                <KeyboardBackspaceIcon fontSize="large" onClick={()=>handelBack()}/>
                <Typography variant='h5' sx={{ml:2}}>Filter</Typography>
            </div>
            <div className='filter_container'>
                <div className='sortby_section'>
                <Typography variant='subtitle1' sx={{ml:2}}>Sort By</Typography>
                    <div className='checkbox_section'>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked  size="small" sx={{ '&.Mui-checked': {color:"#23B26D", },}}/>} label="Popularity" />
                        <FormControlLabel control={<Checkbox size="small"  sx={{ '&.Mui-checked': {color:"#23B26D", },}}/>} label="Distance" />
                    </FormGroup>
                    </div>
                </div>

                <div className='location'>
                    <Typography variant='subtitle1' sx={{ml:2}}>Location</Typography>
                    <div className='location_dropdown'>

                    </div>
                </div>

                <div className='sports'>
                    <Typography variant='subtitle1' sx={{ml:2}}>Sports</Typography>
                        <div className='your_sports'>
                            <Typography  sx={{ml:2,fontSize:"12px",fontWeight:"500",mt:1}}>Your Sports</Typography>

                        <div className='sports_logo_filter'>
                            <div className='name_logo_filter'>
                            <SportsBasketballIcon fontSize='large'/>
                            <Typography variant='subtitle2'>Cricket</Typography>
                            </div>
                            <div className='name_logo_filter'>
                            <SportsBasketballIcon fontSize='large'/>
                            <Typography variant='subtitle2'>Cricket</Typography>
                            </div>
                            <div className='name_logo_filter'>
                            <SportsBasketballIcon fontSize='large'/>
                            <Typography variant='subtitle2'>Cricket</Typography>
                            </div>
                            <div className='name_logo_filter'>
                            <SportsBasketballIcon fontSize='large'/>
                            <Typography variant='subtitle2'>Cricket</Typography>
                            </div>
                            <div className='name_logo_filter'>
                            <SportsBasketballIcon fontSize='large'/>
                            <Typography variant='subtitle2'>Cricket</Typography>
                            </div>
                        </div>
                        </div>

                        <div className='your_sports'>
                            <Typography  sx={{ml:2,fontSize:"12px",fontWeight:"500",mt:1}}>Other Sports</Typography>

                        <div className='sports_logo_filter'>
                            <div className='name_logo_filter'>
                            <SportsBasketballIcon fontSize='large'/>
                            <Typography variant='subtitle2'>Cricket</Typography>
                            </div>
                            <div className='name_logo_filter'>
                            <SportsBasketballIcon fontSize='large'/>
                            <Typography variant='subtitle2'>Cricket</Typography>
                            </div>
                            <div className='name_logo_filter'>
                            <SportsBasketballIcon fontSize='large'/>
                            <Typography variant='subtitle2'>Cricket</Typography>
                            </div>
                            <div className='name_logo_filter'>
                            <SportsBasketballIcon fontSize='large'/>
                            <Typography variant='subtitle2'>Cricket</Typography>
                            </div>
                            <div className='name_logo_filter'>
                            <SportsBasketballIcon fontSize='large'/>
                            <Typography variant='subtitle2'>Cricket</Typography>
                            </div>
                        </div>
                        </div>
                </div>


                <div className='apply_button'>
                    <Button variant="contained" color="success" sx={{mt:5}} onClick={()=>handelBack()}>
                        Apply Filter
                    </Button>
                </div>
            </div>
        </Box>
     </Card>
      </>
  );
};

export default Filter;
