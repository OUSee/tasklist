import React from "react";


type Props = {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    color?: string;
}


export const AddNoteIcon = (props: Props) => {
    return (
    <svg width={props.width ? props.width : "100%"} height={props.height ? props.height : "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12C20 8.22876 20 6.34315 18.8284 5.17157C17.6569 4 15.7712 4 12 4V4C8.22876 4 6.34315 4 5.17157 5.17157C4 6.34315 4 8.22876 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C15.7712 20 17.6569 20 18.8284 18.8284C20 17.6569 20 15.7712 20 12V12Z" stroke={props.color ? props.color :  "#222222"} />
            <path d="M9 12L15 12" stroke={ props.color ? props.color :  "#222222" } strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 9L12 15" stroke={ props.color ? props.color :  "#222222" } strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}