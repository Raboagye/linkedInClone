import React from 'react'
import { useSelector } from "react-redux";
import  "./NavBottom.css"


const NavBottom = ({Icon, name, Avatar, onclick}) => {
    const user = useSelector((state)=> state.user.user)

    const display = user?.displayName && user?.displayName[0]

    return ( 
        <div onClick={onclick} className="optionss__container">
            {Icon && <Icon className="optionss__icons"/>}
            {Avatar && <Avatar className="avatar" src={user.photoUrl}>{display}</Avatar> }
            <h4>{name}</h4>
        </div>
     );
}

export default NavBottom