import React,{useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Alert, Button, Snackbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './EnterOTP.css'
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate,useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import {API_HOST,API} from '../../Backend';


const EnterOTP = () => {
    const [OTP, setOTP] = useState("");
    const navigate = useNavigate();
    const { t, i18n } = useTranslation("common");
    const[userDetails,setUserDetails]=useState()
    const location = useLocation();
    const[showError,setShowError]=useState(false)
    const generatedOTP=location.state.val
    const mobileNumber=location.state.mobileNumber
    // const [open, setOpen] = React.useState(false);

    const handleClick = () => {
    };

    const handleSubmit = () => {
        navigate('/userinfo');
    }

    const backMobileButton = () => {
        navigate('/',{state:{mobileNumber:mobileNumber}});
    }



    const userInfoApi=()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "mobile": mobileNumber,
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(`${API}auth/checkuser`, requestOptions)
          .then(response => response.text())
          .then(result =>{ 
            if(JSON.parse(result).message){
                navigate('/home',{state:{mobileNumber:mobileNumber}})
            }
            else{
                navigate('/userinfo',{state:{mobileNumber:mobileNumber}})
            }
        })
          .catch(error => console.log('error', error));
    }

// console.log(userDetails)
// console.log(userDetails[0].mobile)
    const otpValidation=async()=>{
        setShowError(false)
        if(OTP && generatedOTP){
            if(OTP==generatedOTP){
                console.log("equal")
                userInfoApi()
            }
            else{
                setState({ open: true});
                setShowError(true)

                console.log("not equal")
                return false
            }
        }
      }  
      
    const resendOTP=()=>{
        var val = Math.floor(100000 + Math.random() * 900000);
        console.log("OTP is ",val)
        // var intArr = Array.from(String(val));
        
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

        fetch(`${API_HOST}auth/sendmessage`, requestOptions)
        .then(response => response.text())
        .then(result => {console.log(result)
            navigate('/enterotp',{state:{mobileNumber:mobileNumber,val:val}})
        })
        .catch(error => console.log('error', error));
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setState({ ...state, open: false });
        // setOpen(false);
      };

      const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });

      const { vertical, horizontal, open } = state;

  return (
    <>  
    {showError &&   
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}  anchorOrigin={{ vertical:'bottom', horizontal:'right' }}  key={vertical + horizontal}>
            <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                Wrong OTP !!!
            </Alert>
        </Snackbar>
      }
     <Card sx={{ display: 'flex', alignItems: 'center', p: 1 ,boxShadow:"none",mt:1}}>
        <Box sx={{ flexGrow: 1 }}>
            <div className='back_arrow'>
                <KeyboardBackspaceIcon fontSize="large" onClick={()=>backMobileButton()}/>
            </div>

            <div className='cotent_container'>    
                <div className='heading'>
                    <Typography variant='h5'>Welcome to <span style={{color:"#23B26D"}}>Sport</span>O<span style={{color:"#23B26D"}} >mania</span></Typography>
                    <Typography variant='subtitle2' sx={{mt:0.2}}>{t("otp_description")}</Typography>
                </div>
                
                <div className='otp-inputs'>
                    <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} />
                </div>

                <div className='resend_otp'>
                    <Typography variant='subtitle2' sx={{mt:2,textAlign:"center",color:"#23B26D"}} onClick={()=>resendOTP()}>Resend OTP</Typography>
                </div>

                <div className='btn_signup'>
                    <Button variant="contained" color="success" sx={{mt:4}} onClick={()=>otpValidation()}>
                        {t("welcome_signup")}
                    </Button>
                </div>
            </div>
        </Box>
     </Card>
    </>
  )
};

export default EnterOTP;
