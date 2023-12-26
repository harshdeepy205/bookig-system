import logo from "./logo.svg";
import "./App.css";
import EnterOTP from "./Components/Auth/EnterOTP";
import SelectSports from "./Components/SelectSports/SelectSports";
import UserDetails from "./Components/Auth/UserDetails";
import Home from "./Components/Home/Home";
import EnterMobile from "./Components/Auth/EnterMobile";
import Filter from "./Components/Filter/Filter";
import Booking from "./Components/Booking/Booking";
import MyBooking from "./Components/Booking/MyBooking";
import Notification from "./Components/Notification/Notification";
import AllVenues from "./Components/Venues/AllVenues";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import BookingNormal from "./Components/Booking/BookingNormal";
import ClubDetails from "./Components/ClubDetails/ClubDetails";
import ConfirmBooking from "./Components/Booking/ConfirmBooking";
import UploadDetails from "./Components/UploadDetails/UploadDetails";
import Slots from "./Components/Turf Admin/Slots";
import TurfAdminHome from "./Components/Turf Admin/TurfAdminHome";
import AddSport from "./Components/Turf Admin/AddSport";
import Login from "./Components/Turf Admin/Login";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<EnterMobile />} />
        </Routes>

        <Routes>
          <Route path="/enterotp" element={<EnterOTP />} />
        </Routes>

        <Routes>
          <Route path="/userinfo" element={<UserDetails />} />
        </Routes>

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/allvenues" element={<AllVenues />} />
        </Routes>

        <Routes>
          <Route path="/filter" element={<Filter />} />
        </Routes>

        <Routes>
          <Route path="/quickbooking" element={<Booking />} />
        </Routes>

        <Routes>
          <Route path="/booking" element={<BookingNormal />} />
        </Routes>

        <Routes>
          <Route path="/notification" element={<Notification />} />
        </Routes>

        <Routes>
          <Route path="/club-info" element={<ClubDetails />} />
        </Routes>

        <Routes>
          <Route path="/mybooking" element={<MyBooking />} />
        </Routes>

        <Routes>
          <Route path="/confim-booking" element={<ConfirmBooking />} />
        </Routes>

        <Routes>
          <Route path="/upload" element={<UploadDetails />} />
        </Routes>

        <Routes>
          <Route path="/slots" element={<Slots />} />
        </Routes>

        <Routes>
          <Route path="/turf_admin_home" element={<TurfAdminHome />} />
        </Routes>

        <Routes>
          <Route path="/add_sport" element={<AddSport />} />
        </Routes>

        <Routes>
          <Route path="/turf_admin" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/user_profile" element={<Profile />} />
        </Routes>
      </Router>
      {/* <EnterOTP/> */}
      {/* <SelectSports/> */}
      {/* <UserDetails/> */}
      {/* <Home /> */}
      {/* <EnterMobile/> */}
      {/* <Filter/> */}
      {/* <Booking/> */}
      {/* <Notification/> */}
      {/* <AllVenues/> */}
    </>
  );
}

export default App;
