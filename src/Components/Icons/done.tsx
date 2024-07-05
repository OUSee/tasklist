


import React from "react";

type Props = {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    color?: string ;
}


export const DoneIcon = (props: Props) => {
    return (
        <svg width={props.width ? props.width : "100%"} height={props.height ? props.height : "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke={ props.color ? props.color :  "#222222" }/>
            <path d="M8 12L11 15L16 9" stroke={ props.color ? props.color :  "#222222" }/>
        </svg>
    )
}