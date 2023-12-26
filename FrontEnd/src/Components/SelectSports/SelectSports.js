import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import './SelectSport.css'
import Checkbox from '@mui/material/Checkbox';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      marginTop:"1rem",
      // vertical padding + font size from searchIcon
      border:"1px solid grey",
    //   borderRadius:"2%",
      paddingLeft: `calc(1em + ${theme.spacing(8)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    //   [theme.breakpoints.up('md')]: {
    //     width: '20ch',
    //   },
    },
  }));
  
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SelectSports = () => {
  return (
      <>
     <Card sx={{ display: 'flex', alignItems: 'center', p: 2.5 ,boxShadow:"none",mt:1}}>
        <Box sx={{ flexGrow: 1 }}>
            <div className='back_arrow'>
                <KeyboardBackspaceIcon fontSize="large"/>
            </div>
        <div className='cotent_container_select'>    
            <div className='heading2'>
                <Typography variant='h5' sx={{color:"#23B26D"}}>Select Your Sport</Typography>
            </div>
            <div className='search_bar'>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
               id="outlined-basic"
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            </Search>
            </div>

            <div className='popular sports'>
                <div className='sub_heading_1'>
                <Typography variant="subtitle2">Popular Sports</Typography>
                <Checkbox {...label} />
                </div>

                <div className='sports_logo'>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                       
                </div>
            </div>

            <div className='popular sports'>
                <div className='sub_heading_1'>
                <Typography variant="subtitle2">Recreational Sports</Typography>
                <Checkbox {...label} />
                </div>

                <div className='sports_logo'>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                       
                </div>
            </div>

            <div className='popular sports'>
                <div className='sub_heading_1'>
                <Typography variant="subtitle2">Ball Sports</Typography>
                <Checkbox {...label} />
                </div>

                <div className='sports_logo'>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                        <div className='name_logo'>
                        <SportsBasketballIcon fontSize='large'/>
                        <Typography variant='subtitle2'>Cricket</Typography>
                        </div>
                       
                </div>
            </div>
        </div>
        </Box>
     </Card>
      </>
  );
};

export default SelectSports;
