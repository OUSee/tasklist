import { Dispatch, FC, useEffect, useState } from "react";
import { Task } from "../../types";
import { DoneIcon } from "../Icons/done";
import { EditSaveIcon } from "../Icons/edit";
import { UndoneIcon } from "../Icons/undone";
import styles from "./styles.module.css";
import { TrashIcon } from "../Icons/trash";

type Props = {
  task: Task;
  setEditItem: Dispatch<React.SetStateAction<Task | null>>;
  setDoneItem: Dispatch<React.SetStateAction<Task | null>>;
  setDeleteItem: Dispatch<React.SetStateAction<Task | null>>;
};

export const TaskItem: FC<Props> = ({ task, setEditItem, setDoneItem, setDeleteItem }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDone, setIsDone] = useState(task.doneState);

  useEffect(() => {
    console.log(`state ${isDone} changed`);
  }, [isDone])
  
  const handleDeleteItem = () => {
    setDeleteItem(task);
  } 

  const HandleDoneIConClick = (task: Task) => {
    setIsDone(true);
    setDoneItem(task);
  };

  const DoneIconChanger = () => {
    if(!isDone) {
      return(<DoneIcon width="2em" height="2em"/>)
    }
  }

  const EditTask = (task: Task) => {
    setEditItem(task);
  };

  return (
    <div
      className={styles.task_conatiner}
      onMouseEnter={() => {
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsVisible(false);
      }}
      style={isDone ? { outline: "1px solid green" } : { outline: "2px solid white" }}
    >
      <div className={styles.infoContainer}>
        <h3 className={styles.task_title}>{task.title}</h3>
        <p className={`${styles.tooltip} ${isVisible ? "t_visible" : ""}`}>
          {task.description}
        </p>
      </div>
      <div className={styles.navContainer}>
        <button
          className={styles.done_button}
          onClick={() => {HandleDoneIConClick(task)
          }}
        >
          {DoneIconChanger()}
        </button>
        <button
          className={styles.edit_button}
          onClick={() => {
            EditTask(task);
          }}
        >
          <EditSaveIcon width="2em" height="2em" changeEditState={true} />
        </button>
        <button className={styles.trash} onClick={handleDeleteItem}>
          <TrashIcon width="2em" height="2em" />
        </button>
      </div>
    </div>
  );
};
