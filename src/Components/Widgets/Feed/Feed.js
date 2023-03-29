import "./Feed.css"
import { Avatar } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const Feed = ({name, description, url}) => {
    return ( 
        <div className="feed">
            <div className="feed__content">
                <Avatar className="feed__avatar" src={url} />
                <div className="feed__content__details">
                    <h4>{name}</h4>
                    <h6>{description}</h6>
                    <div className="feed__content__details__button">
                        <button> <AddIcon className="addIcon" /> Follow</button>
                    </div>
                    
                </div>
            </div>

        </div>
     );
}
 
export default Feed;