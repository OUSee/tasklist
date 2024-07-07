import { FC } from "react";
import { Task } from "../../types";
import styles from "./styles.module.css";


type Props = {
  doneTasks: Task[];
};

export const DoneTasks: FC<Props> = ({ doneTasks }) => {
  return (
    <div>
      <h4 className={styles.title}>Done tasks</h4>
      {doneTasks.map((task) => (
        <div className={styles.task} key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};
