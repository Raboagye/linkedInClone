import { Avatar } from "@mui/material";
import "./Posts.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import SharePosts from "./SharePosts";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";


const Posts = () => {

    const user = useSelector((state)=> state.user.user)


    const [posts, setPosts] = useState([])
    const [input, setInput] = useState("")

    useEffect(()=> {
        db.collection("posts").orderBy("timeStamp", "desc").onSnapshot((snapshot) => {
            return (
                setPosts(snapshot.docs.map((doc) => {
                    return ({
                        id:  doc.id,
                        data: doc.data()
                    })
                }))
            )
        })
    }, [])

    const captureInput = (e) => {
        return (
            setInput(e.target.value)
        )
        
    }

    const sendPost = (e) => {
        e.preventDefault()
        db.collection("posts").add({
            name: user.displayName,
            email: user.email,
            message: input,
            photoUrl: user.photoUrl,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
    }

    const PostOptions = (Icon, title, color) => {
        return (
            <div className="post__parameters">
                {<Icon style={{color: color}}/>}
                <h4>{title}</h4>
            </div>
        )
    }
    return ( 
        <div className="posts">
            <div className="share__posts">
                <div className="post__input">
                    <Avatar className="posts__avatar" src={user.photoUrl}>{user.displayName[0]}</Avatar>
                    <form className="post__input__content">
                        <input value={input} type="text" placeholder="Start a post" name="name" onChange={captureInput}/>
                        <button onClick={sendPost} type="submit">submit</button>
                    </form>
                </div>
                <div className="postOptions">
                    {PostOptions(InsertPhotoIcon, "Photo", "#3480cd")}
                    {PostOptions(YouTubeIcon, "Video", "#5f9b41")}
                    {PostOptions(DateRangeIcon, "Event", "#c9892c")}
                    {PostOptions(FormatIndentIncreaseIcon, "Write article", "#e16745")}
                </div>
            </div>
            <div className="share__myPosts">
                {posts.map((item) => {
                    return (
                        <SharePosts key={item.id} name={item.data.name} email={item.data.email} description={item.data.message} photoUrl={item.data.photoUrl}/>
                    )
                })}
            </div>

            
            
        </div>
     );
}
 
export default Posts;