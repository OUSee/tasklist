import { useEffect, useState } from "react";
import { EditSaveIcon } from "../Icons/edit"
import styles from "./styles.module.css"
import { localhostinterFace } from "../LocalHostInterFace/localHostInterFace"

enum Options {
    dowload,
    update
}

type Task = {
    id: string;
    title: string;
    description: string;
    doneState: boolean;
}

type Props = {
    popupState: string,
    tasksData: Task[],
    currentTask: Task,
    setPopupState: React.Dispatch<React.SetStateAction<string>>,
    setCurrentTask: React.Dispatch<React.SetStateAction<Task>>,
    setTasksData: React.Dispatch<React.SetStateAction<Task[]>>
}



export const Popup = (props: Props) => {

    const [popupvisibility, setVisible] = useState(props.popupState)

    useEffect(() => {
        console.log("popup_mounted")
    }, [])

    useEffect(() => { console.log("popupState changed")}, [popupvisibility])

    const SaveChanges = () => {
        props.setPopupState("p_hidden")
        setVisible("p_hidden")
        const TilteElement = document.getElementById("popup_title")
        const DescriptionElement = document.getElementById("popup_description")

        if (TilteElement !== null && DescriptionElement !== null) {
            const NewTask: Task = {
                id: props.currentTask.id,
                title: TilteElement?.innerText,
                description: DescriptionElement?.innerText,
                doneState: false
            }
            localhostinterFace(props.tasksData, NewTask, "tasks", Options.update, props.setTasksData, props.currentTask)
            console.log(`save func executed`)

        }
        else {
            console.log("error no changes done")
            props.setPopupState("p_hidden")
            setVisible("p_hidden")
        }
    }

    return (
        <div className={styles.popup + " "+ popupvisibility}>
            <label htmlFor="Tile">Title</label>
            <input name="Title" placeholder={props.currentTask.title} id="popup_title" className={``} type="text" />
            <label htmlFor="Desc">Description</label>
            <input name="Desc" placeholder={props.currentTask.description} id="popup_description" className="input popup_description" type="text"/>
            <button onClick={()=>SaveChanges()}>
                <EditSaveIcon width="2em" height="2em" changeEditState={false} />
            </button>
        </div>
    )
}