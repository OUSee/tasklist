import { FC } from "react";
import { AddNoteIcon } from "../Icons/addnote";
import styles from "./styles.module.css";


type Props = {
  AddNewTask: () => void;
};


export const AddTask: FC<Props> = ({ AddNewTask }) => {
  return (
    <div className={`${styles.task_container} ${styles.add_task_container}`}>
      <button className={styles.add_task_button} onClick={AddNewTask}>
        <AddNoteIcon width="2em" height="2em" />
      </button>
    </div>
  );
};
