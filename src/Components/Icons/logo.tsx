import styles from "./svgStyles.module.css";

//animation

import React from "react";

type Props = {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    color?: string;
}


export const LogoIcon = (props: Props) => {
    return (
        <svg
            className={styles.logo_icon}
            width={props.width ? props.width : "100%"} height={props.height ? props.height : "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="5" width="17" height="14" rx="2" stroke={ props.color ? props.color :  "#222222" } stroke-width="2"/>
            <path d="M7 10L9 12L7 14" stroke={ props.color ? props.color :  "#222222" } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 14H16" stroke={ props.color ? props.color :  "#222222" } stroke-width="2" stroke-linecap="round"/>
        </svg>
    )
}