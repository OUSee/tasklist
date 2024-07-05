


import React from "react";

type Props = {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    color?: string;
}


export const CloseIcon = (props: Props) => {
    return (
        <svg width={props.width ? props.width : "100%"} height={props.height ? props.height : "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke={ props.color ? props.color :  "#222222" } stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke={ props.color ? props.color :  "#222222" } stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}