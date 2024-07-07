import { Dispatch, FC, useState } from "react";
import { Task } from "../../types";
import { EditSaveIcon } from "../Icons/edit";
import styles from "./styles.module.css";

enum Options {
  dowload,
  update,
}

type Props = {
  editItem: Task;
  tasksData: Task[];
  setTasksData: Dispatch<React.SetStateAction<Task[]>>;
  setEditItem: Dispatch<React.SetStateAction<Task | null>>;
};

export const Popup: FC<Props> = ({
  editItem,
  tasksData,
  setTasksData,
  setEditItem,
}) => {
  //состояние для инпутов
  const [updateItem, setUpdateItem] = useState({ title: "", description: "" });

  const SaveChanges = () => {
    if (updateItem.title !== "" && updateItem.description !== "") {
      const newData = tasksData.find((item) => item.id === editItem.id);
      if (newData) {
        const data = {
          id: newData?.id,
          title: updateItem.title,
          description: updateItem.description,
          doneState: false,
        };

        const filteredData = tasksData.filter(
          (elem) => elem.id !== editItem.id
        );
        setTasksData([...filteredData, data]);
        setEditItem(null);
        console.log(`new enrty is ${data} and edititem is null`)
      }
    }
    else {
      const newData = tasksData.find((item) => item.id === editItem.id);
      
      if (newData) {
        const data = {
          id: newData?.id,
          title: editItem.title,
          description: editItem.description,
          doneState: false,
        };

        const filteredData = tasksData.filter(
          (elem) => elem.id !== editItem.id
        );
        setTasksData([...filteredData, data]);
        setEditItem(null);
        console.log(`new enrty is ${data} and edititem is null`)
      }
    }
  };

  return (
    <div className={styles.popup}>
      <label className={styles.label} htmlFor="Tile">Title</label>
      <input
        placeholder={editItem.title}
        id="popup_title"
        type="text"
        onChange={(event) =>
          setUpdateItem({ ...updateItem, title: event.target.value })
        }
      />
      <label className={styles.label} htmlFor="Desc">Description</label>
      <input
        placeholder={editItem.description}
        id="popup_description"
        className={styles.popup_description}
        type="text"
        onChange={(event) =>
          setUpdateItem({ ...updateItem, description: event.target.value })
        }
      />
      <button className={styles.saveButton} onClick={SaveChanges}>
        <EditSaveIcon width="2em" height="2em" changeEditState={false} />
      </button>
    </div>
  );
};
