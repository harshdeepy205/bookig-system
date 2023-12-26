import React,{useState} from 'react';
import Card from '@mui/material/Card';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button, Checkbox, OutlinedInput, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FilledInput from '@mui/material/FilledInput';
import "./UserDetails.css"
import { useNavigate,useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import {API_HOST,API} from '../../Backend';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const UserDetails = () => {
    const navigate = useNavigate();
    const[fname,setFName]=useState("")
    const[lname,setLName]=useState("")
    const[email,setEmail]=useState("")
    const location = useLocation();
    const phoneNumber=location.state.mobileNumber
    const { t, i18n } = useTranslation("common");
    
    const handleSubmit = () => {
        navigate('/home');
    }

    const submitHandler = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "fname": fname,
        "lname": lname,
        "email": email,
        "mobile":phoneNumber    
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${API}auth/userentry`, requestOptions)
        .then(response => response.text())
        .then(result => {console.log(result)
            navigate('/home',{state:{mobileNumber:phoneNumber}})
            sentMessage()
        })
        .catch(error => console.log('error', error));    
    }

    const sentMessage=()=>{
        console.log("called")
        
        var val = Math.floor(100000 + Math.random() * 900000);
        var intArr = Array.from(String(val));
        
        // console.log(mobileNumber,otpGenerate)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
        "number": phoneNumber,
        "message": "You won Rs.50 discount coupon"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${API_HOST}auth/sendmessage`, requestOptions)
        .then(response => response.text())
        .then(result => {console.log(result)
        })
        .catch(error => console.log('error', error));
    }

  return (
      <>
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2.5 ,boxShadow:"none",mt:1}}>
        <Box sx={{ flexGrow: 1 }}>
            <div className='back_arrow'>
                <KeyboardBackspaceIcon fontSize="large"/>
            </div>
        <div className='cotent_container_userdetails'>    
            <div className='heading'>
            <Typography variant='h5'>Welcome to <span style={{color:"#23B26D"}}>Sport</span>O<span style={{color:"#23B26D"}} >mania</span></Typography>
            <Typography variant='subtitle2' sx={{mt:0.2}}>{t("signup_description")}</Typography>
            </div>
            <div className='user_input'>
                <OutlinedInput
                fullWidth
                id="filled-adornment-weight"
                placeholder="First Name"
                value={fname}
                onChange={(e)=>setFName(e.target.value)}
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                'aria-label': 'weight',
                }}
                sx={{mt:1}}
          />

            <OutlinedInput
                fullWidth
                id="filled-adornment-weight"
                placeholder="Last Name"
                value={lname}
                onChange={(e)=>setLName(e.target.value)}
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                'aria-label': 'weight',
                }}
                sx={{mt:1}}
          />

            <OutlinedInput
                fullWidth
                id="filled-adornment-weight"
                placeholder='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                'aria-label': 'weight',
                }}
                sx={{mt:1}}
            />
            </div>

            <div className='checkbox_tnc'>
                <Checkbox {...label}/>
                <Typography variant='subtitle2'>{t("signup_agree")} <a href="#"> {t("signup_term")}</a> {t("signup_and")} <a href="#">{t("signup_privacy")}</a></Typography>

            </div>
            <div className='btn_signup'>
            <Button variant="contained" color="success" sx={{mt:5}} onClick={()=>submitHandler()}>
            {t("welcome_signup")}
            </Button>
            </div>
        </div>
        </Box>
     </Card>
      </>
  );
};

export default UserDetails;
