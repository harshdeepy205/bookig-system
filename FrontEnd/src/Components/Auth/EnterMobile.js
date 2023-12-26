import { Button, Card, OutlinedInput, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React,{useEffect,useState} from 'react';
import logo from '../../Assets/logo.png'
import './EnterMobile.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import {API,API_HOST} from '../../Backend';

const EnterMobile = () => {
    const navigate = useNavigate();
    const[mobileNumber,setMobileNumber]=useState('')

    const handleSubmit = () => {
        navigate('/enterotp',{state:{mobileNumber:mobileNumber}});
    }

    const { t, i18n } = useTranslation("common");
    
    useEffect(() => {
        i18n.changeLanguage("en");
    }, []);

    const sentOtp=()=>{
        console.log("called")
        if(mobileNumber.length==10){
        var val = Math.floor(100000 + Math.random() * 900000);
        console.log("OTP is ",val)
        var intArr = Array.from(String(val));
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
        "number": mobileNumber,
        "message": val
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`${API}auth/sendmessage`, requestOptions)
        .then(response => response.text())
        .then(result => {console.log(result)
            navigate('/enterotp',{state:{mobileNumber:mobileNumber,val:val}})
        })
        .catch(error => console.log('error', error));
        }
    }

  return (
      <>
    <Card sx={{ display: 'flex', alignItems: 'center', p: 1 ,boxShadow:"none",mt:1,height:"70vh"}}>
        <Box sx={{ flexGrow: 0.7 }}>
        <div className='logoHeading'>
            <Typography variant='h5'>Sport<span style={{color:"#23B26D"}}>O</span>mania</Typography>
        </div>
        <div className='cotent_container_home'>    
            <Card sx={{ display:"flex",flexDirection:"column",p: 2,mt:2}}> 
                <div className='text_content'>
                    <Typography variant='subtitle2'>{t("welcome_greeting")}</Typography>
                    {/* <img src={logo} sx={{ width: 70, height: 70 }} /> */}
                    <Typography variant='subtitle2' className='para_two'>{t("welcome_description")}</Typography>
                 
                </div>
                <div className='user_input'>
                        <OutlinedInput
                        fullWidth
                        id="filled-adornment-weight"
                        placeholder='Mobile'
                        value={mobileNumber}
                        onChange={(e)=>setMobileNumber(e.target.value)}
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                        'aria-label': 'weight',
                        }}
                        sx={{mt:2}}
                        />
                    </div>
                <div className='btn_signup_start'>
                    <Button variant="contained" color="success" sx={{mt:5}} onClick={()=>sentOtp()}>
                        {t("welcome_signup")}
                    </Button>
                    </div>
            </Card>
        </div>
        </Box>
    </Card>
      </>
  );
};

export default EnterMobile;
