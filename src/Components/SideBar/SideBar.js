import { Avatar } from "@mui/material";
import "./SideBar.css"
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { useSelector } from "react-redux";

const SideBar = () => {
    const user = useSelector((state)=> state.user.user)

    const Hashtags = (tags) => {
        return (
            <div className="tags">
                <p className="tags__hash">#</p>
                <p>{tags}</p>
            </div>
        )
    }

    return ( 
        <div className="main__container">
            <div className="sideBar__container">
                <div className="profile__info">
                    <div className="image__avatar">
                        <Avatar className="avatarr" src={user.photoUrl}>{user.displayName[0]}</Avatar>
                    </div>

                    <h4>{user.displayName}</h4>
                    <h3>{user.email}</h3>
                </div>
                <div className="profile__viewCounts">
                    <div className="viewCounts__details">
                        <h4>Who's viewed your profile</h4>
                        <h3>118</h3>
                    </div>
                    <div className="viewCounts__details">
                        <h4>Impressions of your post</h4>
                        <h3>1,157</h3>
                    </div>
                </div>
                <div className="add__container">
                    <h4>Access exclusive tools & insights</h4>
                    <div className="premium__ad">
                        <img src="https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000" alt="premium add box" />
                        <h3>Try premium for free</h3>
                    </div>

                </div>
                <div className="my__items">
                    <TurnedInIcon className="turnedInIcon" />
                    <h4>My items</h4>
                </div>
            </div>

            <div className="hashtags__container">
                <h4>Recent</h4>
                {Hashtags("Programming")}
                {Hashtags("React.js")}
                {Hashtags("Machine Learning")}
                {Hashtags("Artificial Interlligence")}
                {Hashtags("JavaScript")}
                {Hashtags("Coding")}
            </div>
        </div>

     );
}
 
export default SideBar;