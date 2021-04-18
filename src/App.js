import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext } from 'react';
import Home from './Components/Home/Home/Home';
import Login from './Components/Home/Login/Login';
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NoMatch from './Components/Home/NoMatch/NoMatch';
import Admin from './Components/Admin/Admin/Admin';
import Review from './Components/Home/Review/Review';
import PrivateRoute from "./Components/Home/PrivateRoute/PrivateRoute"
import Booking from './Components/Home/Booking/Booking';
import BookingList from './Components/Home/BookingList/BookingList';
import BookingInfo from './Components/Admin/BookingInfo/BookingInfo';
import ManageServices from './Components/Admin/ManageServices/ManageServices';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import AddService from './Components/Admin/AddService/AddService';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoneBookingStatus from './Components/Admin/UpdateBookingStatus/DoneBookingStatus';
import OnGoingBookingStatus from './Components/Admin/UpdateBookingStatus/OnGoingBookingStatus';
import Navbar from './Components/Admin/Navbar/Navbar';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
            <Navbar></Navbar>
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>

          <PrivateRoute path="/service/:id">
            <Booking></Booking>
          </PrivateRoute>

          <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>

          <Route path="/BookingInfo">
            <BookingInfo></BookingInfo>
          </Route>

          <PrivateRoute path="/manageService">
            <ManageServices></ManageServices>
          </PrivateRoute>

          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

          <PrivateRoute path="/ongoing/:id">
            <OnGoingBookingStatus></OnGoingBookingStatus>
          </PrivateRoute>

          <PrivateRoute path="/done/:id">
            <DoneBookingStatus></DoneBookingStatus>
          </PrivateRoute>
         
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
          <NoMatch></NoMatch>
        </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
