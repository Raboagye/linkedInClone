import { useSelector } from "react-redux";
import "./Options.css"


const Options = ({Icon, name, Avatar, onclick}) => {
    const user = useSelector((state)=> state.user.user)

    const display = user?.displayName && user?.displayName[0]

    return ( 
        <div onClick={onclick} className="options__container">
            {Icon && <Icon className="options__icons"/>}
            {Avatar && <Avatar className="avatar" src={user.photoUrl}>{display}</Avatar> }
            <h4>{name}</h4>
        </div>
     );
}
 
export default Options;