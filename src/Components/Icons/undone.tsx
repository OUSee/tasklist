import styles from "./svgStyles.module.css"
import React from "react";

//animation

type Props = {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    color?: string;
}


export const UndoneIcon = (props: Props) => {
    return (
        <svg className={styles.undone_icon} width={props.width ? props.width : "100%"} height={props.height ? props.height : "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6L12 3" stroke={ props.color ? props.color :  "#222222" } stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 21L12 19" stroke={ props.color ? props.color :  "#222222" } stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 12L21 12" stroke={ props.color ? props.color :  "#222222" } stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 12L6 12" stroke={ props.color ? props.color :  "#222222" } stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.6569 6.34314L18.364 5.63603" stroke={ props.color ? props.color :  "#222222" } stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.63605 18.364L7.05026 16.9497" stroke={ props.color ? props.color :  "#222222" } stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.9498 16.9498L18.364 18.364" stroke={ props.color ? props.color :  "#222222" } stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.63605 5.63605L7.75737 7.75737" stroke={ props.color ? props.color :  "#222222" } stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}