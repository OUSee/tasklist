import { hover } from "@testing-library/user-event/dist/hover";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Popup } from "../Popup/popup";
import { Task } from "../../types";
import { AddTask } from "../AddTask";
import { TaskItem } from "../TaskItem";
import { DoneTasks } from "../DoneTasks";


const RESOURCE_URL = `https://2584f01ed614f181.mokky.dev/tasks`;

let DATAAR: Task[] = [];




export const BodySection = () => {
  const [tasksData, setTasksData] = useState(DATAAR);
  const [editItem, setEditItem] = useState<null | Task>(null);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);
  const [doneItem, setDoneItem] = useState<null | Task>(null);
  const [deleteItem, setDeleteitem] = useState<null | Task>(null);

  useEffect(() => {
    fetchData()
  },[])

  useEffect(() => {
    postData();
  }, [tasksData]);

  useEffect(() => {
    if (doneItem) {
      setDoneTasks([...doneTasks, doneItem]);
      const newTasksData = tasksData.filter((task) => task.id !== doneItem.id);
      setTasksData([...newTasksData]);
    }
  }, [doneItem]);

  useEffect(() => {
    handledeleteItem()
  },[deleteItem])


  const handledeleteItem = async () => {
    if (deleteItem) { 
      const filteredData = tasksData.filter(
          (elem) => elem.id !== deleteItem.id
        );
        setTasksData(filteredData);
        setDeleteitem(null);
    }
  }
  
  const fetchData = async () => {
    try {
        const response = await fetch(`${RESOURCE_URL}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }

        setTasksData(data);
      } catch (error) {
        console.error('Error fetching');
      }
  }
  
  const postData = async () => { 
    const responce = await fetch(`${RESOURCE_URL}`, {
    method: "PATCH", // Отправляем PATCH-запрос
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tasksData), 
    });
  }

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
            setDeleteItem={setDeleteitem}
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
