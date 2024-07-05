import { hover } from "@testing-library/user-event/dist/hover";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import { DoneIcon } from "../Icons/done";
import { UndoneIcon } from "../Icons/undone";
import { EditSaveIcon } from "../Icons/edit";
import { Popup } from "../Popup/popup";
import { AddNoteIcon } from "../Icons/addnote";
import { title } from "process";
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
const templateTask: Task = {
    id: "0",
    title: "template",
    description: "...",
    doneState: false
}

const DATA = localStorage.getItem("tasks");
let DATAAR: Task[] = [];
if (DATA !== null) {
    DATAAR = JSON.parse(DATA)
}
            


export const BodySection = () => {

    const [tasksData, setTasksData] = useState<Task[]>(DATAAR)
    const [currentTaskState, setCurrentTask] = useState<Task>(templateTask)
    const [popupState, setPopupState] = useState(styles.p_hidden)


    useEffect(() => {
        localhostinterFace(tasksData, currentTaskState, "tasks", Options.dowload, setTasksData)
    }, [])

    useEffect(() => { console.log(`updated popup state: ${popupState}`)},[popupState])

    
    const DoneIconVisualze = (task: Task) => {
        if (task.doneState) {
            return (<DoneIcon width="2em" height="2em"/>)
        }
        else {
            return (<UndoneIcon width="2em" height="2em"/>)
        }
    }


    const HandleDoneIConClick = (task: Task) => {
        const newTask: Task = {
            id: task.id,
            title: task.title,
            description: task.description,
            doneState: !task.doneState
        }
        localhostinterFace(tasksData, newTask, "tasks", Options.update, setTasksData, task)
    }


    const AskTitle = () => {
        const title = prompt("Title: ", "NewTask")
        if (title !== null && title !== undefined) {
            return title
        }
        else {
           return ("ERR: null or undef title")
        }
    }
    const AskDescription = () => {
        const desc = prompt("Description: ", "some description for the task")
        if (desc !== null && desc !== undefined) {
            return desc
        }
        else {
            return ("ERR: null or undef desc")
        }
    }


    const HoverTooltip = (task: Task) => {
        const tooltip = document.getElementById(`${task.id}+.tooltip`);
        tooltip?.classList.add("t_visible")
    }
    const LeaveTooltip = (task: Task) => { 
        const tooltip = document.getElementById(`${task.id}+.tooltip`);
        tooltip?.classList.remove("t_visible")
    }


    const AddNewTask = () => {
        const title = AskTitle();
        const desc = AskDescription();
        const newTask: Task = {
            id: `${tasksData.length + 1}`,
            title: title,
            description: desc,
            doneState: false
        };
        setCurrentTask(newTask);
        localhostinterFace(tasksData, newTask, "tasks", Options.update, setTasksData, newTask);
    }


    const EditTask = (task: Task) => {
        setPopupState("p_visible");
        setCurrentTask(task);

    }



    return (
        <section id="Body_section" className={styles.body_section}>       
            { tasksData.map( (task: Task ) => {
                    return (
                        <div
                            key={task.id}
                            className={styles.task_conatiner}
                            onMouseEnter={() => { HoverTooltip(task) }}
                            onMouseLeave={() => { LeaveTooltip(task) }}
                        >
                        <h3 className={styles.task_title}>
                            {task.title}
                        </h3>
                        <p id={`${task.id}+.tooltip`} className={styles.tooltip}>
                            {task.description}
                        </p>
                        <button className={styles.done_button} onClick={()=>{HandleDoneIConClick(task)}}>
                            { DoneIconVisualze(task)}       
                        </button>  
                        <button className={ styles.edit_button} onClick={()=>{EditTask(task)}}>
                            <EditSaveIcon width="2em" height="2em" changeEditState={true} />    
                        </button>  
                    </div>
                    )
    	    }) }
            <div className={`${styles.task_container} ${styles.add_task_container}`}>
                <button className={ styles.add_task_button} onClick={() => { AddNewTask() }}>
                    <AddNoteIcon width="2em"  height="2em"/>
                </button>
            </div>
            <div className={`${styles.popupContainer} ${popupState}`}>
                <Popup
                popupState={popupState}
                tasksData={tasksData}
                currentTask={currentTaskState}
                setPopupState={setPopupState}
                setCurrentTask={setCurrentTask}
                setTasksData={setTasksData}
            />
            </div>
        </section>
    )
}