import { useEffect, useState } from "react";
import React from "react";

type Task = {
    id: string;
    title: string;
    description: string;
    doneState: boolean;
}

enum Options {
    dowload,
    update
}


export const localhostinterFace = (tasksData: Task[], element: Task,key: string, option: Options, setTasksData: React.Dispatch<React.SetStateAction<Task[]>>, elToRemove?: Task ) => {


    const downloadStorage = (key: string) => {
        let storage = localStorage.getItem(key);
        if (storage !== null) {
            setTasksData(JSON.parse(storage))
        }
        else {
            localStorage.setItem(key, JSON.stringify([...[], element]))
            console.log(`storage was empty, first element was set - ${element.id}: ${element.title}`)
            setTasksData([...[], element])
        }
    }

    const uploadStorage = (key: string, data: Task[]) => {
        localStorage.setItem(key , JSON.stringify(data));
    }

    const updateStorage = (key: string, taskToReplace: Task, currentTask: Task) => {
        if (tasksData) {
            const index = tasksData.indexOf(taskToReplace);
            if (index > -1) {
                const newData = tasksData.splice(index, 1, currentTask)
                uploadStorage(key, newData)
            }
        }
        else {
            console.log(`storage was empty, first task set - ${currentTask.title}: ${currentTask.description}`)
            uploadStorage(key, [...[],currentTask])
        }
    }

    const SortStorage = (key: string) =>{
        const storage = localStorage.getItem(key);
    }
   
    const localstorageInterfaceEXE = () => {
        switch (option) { 
            case Options.dowload: {
                downloadStorage(key)
                break;
            }
            case Options.update: {
                if (elToRemove !== null && elToRemove !== undefined) {
                    updateStorage(key, elToRemove, element)
                }
                else {
                    updateStorage(key, element, element)
                }
                break;
            }
        }
    }

    localstorageInterfaceEXE()

}