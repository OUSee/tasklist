

import React, { MouseEventHandler } from "react";

type Props = {
    children: React.ReactNode;
    width: string | null;
    height: string | null;
    color: string | null;
    changeColorActive: MouseEventHandler<SVGSVGElement>;
    changeColorInActive: MouseEventHandler<SVGSVGElement>
}


export const QusetionIcon = (props: Props) => {
    return (
        <svg
            onMouseEnter={props.changeColorActive}
            onMouseLeave={props.changeColorInActive}
            width={props.width ? props.width : "100%"}
            height={props.height ? props.height : "100%"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke={ props.color ? props.color :  "#222222" }/>
            <circle cx="12" cy="18" r="0.5" fill={ props.color ? props.color :  "#222222" }/>
            <path d="M12 16V15.1432C12 14.429 12.357 13.762 12.9512 13.3659L13.5497 12.9669C14.4558 12.3628 15 11.3459 15 10.2569V10C15 8.34315 13.6569 7 12 7V7C10.3431 7 9 8.34315 9 10V10" stroke={ props.color ? props.color :  "#222222" }/>
        </svg>
    )
}