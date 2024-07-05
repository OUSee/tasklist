
import React from "react";

type Props = {
    children: React.ReactNode;
    width: string | null;
    height: string | null;
    color: string | null;
}


export const AddNoteAlterIcon = (props: Props) => {
    return (
        <svg width={props.width ? props.width : "100%"} height={props.height ? props.height : "100%"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 11C3.5 9.10025 3.50106 7.72573 3.64199 6.67754C3.78098 5.64373 4.04772 5.00253 4.52513 4.52513C5.00253 4.04772 5.64373 3.78098 6.67754 3.64199C7.72573 3.50106 9.10025 3.5 11 3.5H13C14.8998 3.5 16.2743 3.50106 17.3225 3.64199C18.3563 3.78098 18.9975 4.04772 19.4749 4.52513C19.9523 5.00253 20.219 5.64373 20.358 6.67754C20.4989 7.72573 20.5 9.10025 20.5 11V13C20.5 14.8998 20.4989 16.2743 20.358 17.3225C20.219 18.3563 19.9523 18.9975 19.4749 19.4749C18.9975 19.9523 18.3563 20.219 17.3225 20.358C16.2743 20.4989 14.8998 20.5 13 20.5H11C9.10025 20.5 7.72573 20.4989 6.67754 20.358C5.64373 20.219 5.00253 19.9523 4.52513 19.4749C4.04772 18.9975 3.78098 18.3563 3.64199 17.3225C3.50106 16.2743 3.5 14.8998 3.5 13V11Z" stroke={ props.color ? props.color :  "#222222" }/>
            <path d="M12 8L12 16" stroke={ props.color ? props.color :  "#222222" } stroke-linejoin="round"/>
            <path d="M16 12L8 12" stroke={ props.color ? props.color :  "#222222" } stroke-linejoin="round"/>
        </svg>
    )
}