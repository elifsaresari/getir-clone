import React from "react";

export interface UserProps{
    color:string
    className:string
}

const User : React.FC<UserProps>= (props:UserProps) =>{
    const{color,className}=props

    return <svg xmlns="http://www.w3.org/2000/svg" x="0px"
                y="0px"
                viewBox="0 0 258.75 258.75" width="1rem" height="1rem" fill={color}>
        <g>
            <circle cx="129.375" cy="60" r="60"/>
            <path d="M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z"/>
        </g>

    </svg>

}

export default User