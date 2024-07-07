import { hover } from "@testing-library/user-event/dist/hover";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Popup } from "../Popup/popup";
import { Task } from "../../types";
import { AddTask } from "../AddTask";
import { TaskItem } from "../TaskItem";
import { DoneTasks } from "../DoneTasks";


const DATA = localStorage.getItem("tasks");
let DATAAR: Task[] = [];
if (DATA !== null) {
  DATAAR = JSON.parse(DATA);
}



export const BodySection = () => {
  const [tasksData, setTasksData] = useState<Task[]>(DATAAR);
  const [editItem, setEditItem] = useState<null | Task>(null);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);
  const [doneItem, setDoneItem] = useState<null | Task>(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksData));
  }, [tasksData]);

  useEffect(() => {
    if (doneItem) {
      setDoneTasks([...doneTasks, doneItem]);
      const newTasksData = tasksData.filter((task) => task.id !== doneItem.id);
      setTasksData([...newTasksData]);
    }
  }, [doneItem]);

  const AddNewTask = () => {
    //из-за того, что id элемента строилось на длине массива, после удаления и добавления задач id могли повторятся
    //как одно из решений, можно найти последний наибольший id и новому присвоить на 1 больше
    const lastId = tasksData.reduce(
      (max, task) => (+task.id > max ? +task.id : max),
      0
    );

    const newTask: Task = {
      id: `${lastId + 1}`,
      title: "T",
      description: "D",
      doneState: false,
    };

    setEditItem(newTask)
    setTasksData([...tasksData, newTask])
    console.log(`new task is ${newTask} and tasks is ${tasksData}`)
    //обновили состояние со всеми задачами
    //
  };

  return (
    <section id="Body_section" className={styles.body_section}>
      <h4 className={styles.title}>Tasks</h4>
      {tasksData.map((task: Task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            setEditItem={setEditItem}
            setDoneItem={setDoneItem}
          />
        );
      })}
      {/*  */}
      <AddTask AddNewTask={AddNewTask} />
      {/*  */}
      {editItem && (
        <Popup
          editItem={editItem}
          tasksData={tasksData}
          setTasksData={setTasksData}
          setEditItem={setEditItem}
        />
      )}
      {doneTasks.length !== 0 && <DoneTasks doneTasks={doneTasks} />}
    </section>
  );
};
