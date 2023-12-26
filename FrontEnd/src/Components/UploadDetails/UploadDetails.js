import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import download from "./download.png";
import logo from "../../Assets/logo.png";
import "./UserDetails.css";
import { useTheme } from "@mui/material/styles";
import { API_HOST, API, CLOUDNAIRY_API } from "../../Backend";
import NativeSelect from "@mui/material/NativeSelect";
import { useEffect } from "react";
import { DatePicker, TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Cricket", "Badminton", "Game Parlour", "Football", "Tennis"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const UploadDetails = () => {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const [data, setData] = useState({
    file: null,
    base64URL: "",
  });
  const [imagesList, setImagesList] = useState([
    {
      file: "",
      base64URL: "",
    },
    {
      file: "",
      base64URL: "",
    },
    {
      file: "",
      base64URL: "",
    },
    // {
    //   file: '',
    //   base64URL: ""
    // ,},{
    //   file: '',
    //   base64URL: ""
    // }
  ]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [sportCounts, setSportCounts] = React.useState(0);
  const [date, setDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(
    new Date()
  );
  const [endTime, setEndTime] = React.useState(new Date());
  const [formFields, setFormFields] = useState([{ name: "", age: "" }]);

  const [bannerImage1, setBannerImage1] = useState("");
  const [url, setUrl] = useState([]);
  const [clubImgaeLogo, setClubImageLogo] = useState("");
  const [clubUrl, setClubUrl] = useState("");
  const [sport, setSport] = useState({
    sportsname: "",
    price: "",
  });

  const [allSports, setAllSports] = useState([
    {
      sportsname: "",
      price: "",
    },
    {
      sportsname: "",
      price: "",
    },
    {
      sportsname: "",
      price: "",
    },
    {
      sportsname: "",
      price: "",
    },
    {
      sportsname: "",
      price: "",
    },
  ]);

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        // console.log("Called", reader);
        baseURL = reader.result;
        resolve(baseURL);
      };
      // console.log(fileInfo);
    });
  };

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const addFields = () => {
    let object = {
      name: "",
      age: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  // const handleImageUpload = e => {
  //     const file = e.target.files;
  //     console.log("file", file[0]);
  //     for(let i=0;i<file.length;i++){
  //     if (file) {
  //         const reader = new FileReader();

  //         const { current } = uploadedImage;
  //         current.file = file[i];

  //         reader.onload = e => {
  //             current.src = e.target.result;
  //         };
  //         reader.readAsDataURL(file[i]);
  //       }
  //     }

  //     console.log(e.target.files[0]);
  //     let baseFile = data['file'];
  //     baseFile = e.target.files[0];
  //     getBase64(baseFile)
  //         .then(result => {
  //             file["base64"] = result;
  //             // console.log("File Is", result);
  //             setData({ ...data, base64URL: result });
  //         })
  //         .catch(err => {
  //             console.log(err);
  //         });
  //     setData({ ...data, file: e.target.files[0] });
  // };

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;

      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    console.log(e.target.files[0]);
    let baseFile = data["file"];
    baseFile = e.target.files[0];
    getBase64(baseFile)
      .then((result) => {
        file["base64"] = result;
        // console.log("File Is", result);
        setData({ ...data, base64URL: result });
      })
      .catch((err) => {
        console.log(err);
      });
    setData({ ...data, file: e.target.files[0] });
  };

  const handlebanners = (item, index) => (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;

      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    let baseFile = data["file"];
    baseFile = e.target.files[0];
    getBase64(baseFile)
      .then((result) => {
        file["base64"] = result;
        let newAllBanners = [...imagesList];
        newAllBanners[index]["base64URL"] = result;
        setImagesList(newAllBanners);
        // setData({ ...data, base64URL: result });
      })
      .catch((err) => {
        console.log(err);
      });
    let newAllBanners = [...imagesList];
    newAllBanners[index]["file"] = e.target.files[0];
    setImagesList(newAllBanners);
    // setData({ ...data, file: e.target.files[0] });
  };

  const uploadDetails = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: name,
      // image: data["base64URL"],
      image: clubUrl,
      address: address,
      mobileNo: number,
      banners: url,
      start_time: startTime,
      end_time: endTime,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    setDate(new Date());
    var id;
    await fetch(`${API}auth/clubdetails`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setName("");
        setNumber("");
        setAddress("");
        setData("");
        id = result.details._id;
        console.log("reid", result.details._id);
      })
      .catch((error) => console.log("error", error));

    console.log("idddd: ", id);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    for (let j = 0; j < formFields.length; j++) {
      var raw = JSON.stringify({
        turfId: id,
        sportName: formFields[j].name,
        sportPrice: formFields[j].age,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(`${API}auth/sportDetails`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    }

    //for loop for next 30 days
    // let tempdate = new Date();
    // for (let i = 0; i < 30; i++) {
    //   tempdate.setDate(tempdate.getDate() + 1);
    //   console.log("date", tempdate.getDate() + i);
    //   const noSlot = endTime.getHours() - startTime.getHours();
    //   var fullDate =
    //     tempdate.getDate() +
    //     "-" +
    //     (tempdate.getMonth() + 1) +
    //     "-" +
    //     tempdate.getFullYear();

    //   for (let i = 0; i < noSlot; i++) {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     console.log("fullDate", fullDate);

    //     var raw = JSON.stringify({
    //       user_id_admin: id,
    //       slot_date: fullDate,
    //       slot_price: 1500,
    //       slot_count: 1,
    //       slot_start_time: startTime.getHours() + i,
    //       slot_end_time: startTime.getHours() + i + 1,
    //       slot_status: "available",
    //       slot_booked_by: "temp",
    //       sport_name: "Hockey",
    //     });

    //     var requestOptions = {
    //       method: "POST",
    //       headers: myHeaders,
    //       body: raw,
    //       redirect: "follow",
    //     };
    //     fetch(`${API}auth/slots`, requestOptions)
    //       .then((response) => response.text())
    //       .then((result) => {
    //         console.log(result);
    //       })
    //       .catch((error) => console.log("error", error));
    //   }
    // }
  };

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  const handleStartTimeChange = (newValue) => {
    setStartTime(newValue);
  };
  const handleEndTimeChange = (newValue) => {
    setEndTime(newValue);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  console.log(personName, "valuesss");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const updateFieldChanged = (index, item) => (e) => {
    let newAllSports = [...allSports];
    newAllSports[index][item] = e.target.value;
    setAllSports(newAllSports);
  };

  const sportsData = () => {
    return (
      <>
        {allSports.length > 0 &&
          allSports.map((item, index) => {
            return (
              <>
                <TextField
                  id="outlined-basic"
                  label={`Name ${index + 1} Sports `}
                  onChange={updateFieldChanged(index, Object.keys(item)[0])}
                  value={item.sportsname}
                  variant="outlined"
                  sx={{ mt: 1 }}
                />

                <TextField
                  id="outlined-basic"
                  label={`Price of ${index + 1} Sport`}
                  onChange={updateFieldChanged(index, Object.keys(item)[1])}
                  value={item.price}
                  variant="outlined"
                  sx={{ mt: 1 }}
                />
              </>
            );
          })}
      </>
    );
  };

  const rmBanner = (index) => {
    let newAllBanners = [...imagesList];
    newAllBanners[index]["base64URL"] = "";
    newAllBanners[index]["file"] = "";
    setImagesList(newAllBanners);
  };
  const bannersImages = () => {
    return (
      <>
        <h5>Upload all below Banners *</h5>
        {imagesList.length > 0 &&
          imagesList.map((item, index) => {
            return (
              <>
                <div className="">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlebanners(item, index)}
                    ref={imageUploader}
                  />
                </div>
                <button onClick={() => rmBanner(index)}>rm</button>
              </>
            );
          })}
      </>
    );
  };

  const handleSlot = (e) => {
    const noSlot = endTime.getHours() - startTime.getHours();
    console.log(noSlot);

    for (let i = 0; i < noSlot; i++) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        user_id_admin: "000",
        slot_date: date,
        slot_price: "price",
        slot_count: 1,
        slot_start_time: startTime.getHours() + i,
        slot_end_time: startTime.getHours() + i + 1,
        slot_status: "available",
        slot_booked_by: "club",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(`${API}auth/slots`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    }
  };

  const postDetails = () => {
    const data = new FormData();
    data.append("file", bannerImage1);
    data.append("upload_preset", "sportomania");
    data.append("cloud_name", "harsh205");
    fetch("https://api.cloudinary.com/v1_1/harsh205/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUrl((oldArray) => [...oldArray, data.url]);
      })
      .catch((err) => console.log(err));
  };

  const clubLogoDetails = () => {
    const data = new FormData();
    data.append("file", clubImgaeLogo);
    data.append("upload_preset", "sportomania");
    data.append("cloud_name", "harsh205");
    fetch("https://api.cloudinary.com/v1_1/harsh205/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClubUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
  // console.log(url,"urlll")

  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          p: 3,
          boxShadow: "none",
          mt: 1,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <div className="mybooking_logo">
            <img src={logo} sx={{ width: 80, height: 80 }} />
          </div>
          <div className="profile">
            <div
              className="profileImages"
              onClick={() => imageUploader.current.click()}
            >
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={download}
                ref={uploadedImage}
              />
              {/* <img
                        className="profileImages"
                        src={download}
                        ref={uploadedImage}/> */}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setClubImageLogo(e.target.files[0])}
              // onChange={handleImageUpload}
              ref={imageUploader}
            />
            <Button
              variant="outlined"
              sx={{ mt: 1 }}
              onClick={() => clubLogoDetails()}
            >
              {" "}
              Submit
            </Button>
          </div>

          <div className="basic_details">
            <TextField
              id="outlined-basic"
              label="Club Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Contact Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              variant="outlined"
              sx={{ mt: 1 }}
            />
            <TextField
              id="outlined-basic"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              variant="outlined"
              sx={{ mt: 1 }}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              {/* <DatePicker
                label="Date"
                value={date}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ mt: 1.5 }} />
                )}
                minDate={new Date()}
              /> */}
              <TimePicker
                label="Start Time"
                value={startTime}
                onChange={handleStartTimeChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ mt: 1.5 }} />
                )}
              />
              <TimePicker
                label="End Time"
                value={endTime}
                onChange={handleEndTimeChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ mt: 1.5 }} />
                )}
                minTime={startTime}
              />
            </LocalizationProvider>
            {/* {sportsData()} */}

            <div>
              {formFields.map((form, index) => {
                return (
                  <div key={index}>
                    <TextField
                      id="outlined-basic"
                      label="Sports Name"
                      name="name"
                      placeholder="Name"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.name}
                      variant="outlined"
                      sx={{ mt: 1 }}
                    />
                    {/* <input
                      name='name'
                      placeholder='Name'
                      onChange={event => handleFormChange(event, index)}
                      value={form.name}
                    /> */}
                    <TextField
                      id="outlined-basic"
                      label="Price"
                      name="age"
                      placeholder="Price"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.age}
                      variant="outlined"
                      sx={{ mt: 1 }}
                    />

                    {/* <input
                name='age'
                placeholder='Age'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              /> */}
                    <Button
                      variant="outlined"
                      sx={{ ml: 2 }}
                      onClick={() => removeFields(index)}
                    >
                      Remove
                    </Button>
                  </div>
                );
              })}

              <Button variant="outlined" sx={{ mt: 2 }} onClick={addFields}>
                Add More..
              </Button>
              <br />
            </div>

            <div>
              <h5>Manual</h5>
              <input
                type="file"
                onChange={(e) => setBannerImage1(e.target.files[0])}
              />
              <button onClick={() => postDetails()}> submit</button>
            </div>

            <div>
              <h5>Manual</h5>
              <input
                type="file"
                onChange={(e) => setBannerImage1(e.target.files[0])}
              />
              <button onClick={() => postDetails()}> submit</button>
            </div>

            <div>
              <h5>Manual</h5>
              <input
                type="file"
                onChange={(e) => setBannerImage1(e.target.files[0])}
              />
              <button onClick={() => postDetails()}> submit</button>
            </div>

            {/* <TextField id="outlined-basic"  value={price} onChange={(e)=>setSports({...sports, [price]:e.target.value})} variant="outlined" sx={{mt:1}}/>          */}
            {/* <div>
                <FormControl sx={{ width: 325 ,mt:1}}>
                    <InputLabel id="demo-multiple-chip-label">Sports</InputLabel>
                    <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </div> */}
          </div>

          {/* <div className="profile">
                <div
                    className="profileImages"
                    onClick={() => imageUploader.current.click()}> 
                    <CardMedia
                        component="img"
                        sx={{ width: 100 }}
                        image={download}
                        ref={uploadedImage}
                    />
                </div>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={imageUploader}/> 
            </div> */}

          <div className="btn_section">
            <Button variant="contained" onClick={() => uploadDetails()}>
              Submit
            </Button>
          </div>

          {/* <p>{data['base64URL']}</p> */}
        </Box>
      </Card>
    </>
  );
};

export default UploadDetails;
