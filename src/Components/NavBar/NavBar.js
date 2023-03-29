import "./NavBar.css"
import SearchIcon from '@mui/icons-material/Search';
import Options from "../Options/Options";
import HouseIcon from '@mui/icons-material/House';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { auth } from "../../firebase";

const NavBar = () => {
    const signingOut = () => {
        auth.signOut()
    }
    return ( 
        <div className="navBar__container">
            <div className="navBar__left">
                <img src="https://www.nicepng.com/png/full/919-9192440_facebook-twitter-google-plus-linkedin-linkedin-logo-transparent.png" alt="LinkedIn__logo" />
                <div className="navBarLeft__input">
                    <SearchIcon />
                    <input placeholder="Search" />
                    {/* <button type="submit">post</button> */}
                </div>
            </div>

            <div className="navBar__right">
                <div className="immediate__right">
                    <Options Icon={HouseIcon} name="Home" />
                    <Options Icon={SupervisorAccountIcon} name="My Network" />
                    <Options Icon={BusinessCenterIcon} name="Jobs" />
                    <Options Icon={SmsIcon} name="Messaging" />
                    <Options Icon={NotificationsIcon} name="Notifications" />
                    <Options onclick={()=> signingOut() } Avatar={Avatar} name="Me" />
                </div>
                <div className="far__right"> 
                    <Options Icon={AppsIcon} name="Work" />
                    <Options Icon={PostAddIcon} name="Work" />
                </div>
                

            </div>
        </div>
     );
}
 
export default NavBar;