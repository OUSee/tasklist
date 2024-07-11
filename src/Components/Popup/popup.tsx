import { Dispatch, FC, useEffect, useState } from "react";
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
  const [updateItem, setUpdateItem] = useState(editItem);

  const { title, description } = updateItem;
  
  useEffect(() => { setUpdateItem(updateItem) }, [editItem])
  
  useEffect(() => {
    if (!editItem) {
      return;
    }

    function ESCkeyDownHandler(e: globalThis.KeyboardEvent) {
      if (editItem && e.key === "Escape") {
        e.preventDefault();
        setEditItem(null);
      }
    }

    const ENTkeyDownHandler = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Enter") {
        SaveChanges();
      }
    }

    document.addEventListener("keydown", ESCkeyDownHandler);
    document.addEventListener("keydown", ENTkeyDownHandler);

    return () => {
      document.removeEventListener("keydown", ESCkeyDownHandler);
      document.removeEventListener("keydown", ENTkeyDownHandler);
    };
  }, [updateItem]);

  const SaveChanges = () => {

    const titleinput = document.querySelector("#popup_title") as HTMLInputElement;
    const descinput = document.querySelector("#popup_description") as HTMLInputElement;

    setUpdateItem({id: editItem.id ,title: titleinput.value, description: descinput.value, doneState: false})

    const filteredData = tasksData.filter(
          (elem) => elem.id !== editItem.id
        );
        setTasksData([...filteredData, updateItem]);
        setEditItem(null);
    console.log(`new enrty is {title: ${updateItem.title}; Description: ${updateItem.description}} and edititem is set null`)
  };

  return (
    <div className={styles.popup}>
      <input
        id="popup_title"
        type="text"
        defaultValue={title}
        onChange={(event) =>
          setUpdateItem({ ...updateItem, title: event.target.value })
        }
        autoFocus
      />
      <input
        id="popup_description"
        className={styles.popup_description}
        type="text"
        defaultValue={description}
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
