import { Avatar } from "@mui/material";
import "./SharePosts.css"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from "react-redux";

const SharePosts = ({name, email, description, photoUrl}) => {

    const user = useSelector((state)=> state.user.user)


    const ShareOptions = (Icon, title) => {
        return (
            <div className="Post__parameters">
                {<Icon className="postParameters__icon"/>}
                <h4>{title}</h4>
            </div>
        )
    }

    const display = user?.displayName && user?.displayName[0]

    return ( 
        <div className="share">
            <div className="share__details">
                <Avatar className="share__avatar" src={photoUrl}>{display}</Avatar>
                <div className="share__name__email">
                    <h4>{name}</h4>
                    <p>{email}</p>
                </div>
            </div>
            <div className="share__description">
                <h4>{description}</h4>
            </div>
            <div className="share__postOptions">
                {ShareOptions(ThumbUpOffAltIcon, "Like")}
                {ShareOptions(TextsmsIcon, "Comment")}
                {ShareOptions(ShareIcon, "Repost")}
                {ShareOptions(SendIcon, "Send")}
            </div>


        </div>
     );
}
 
export default SharePosts;