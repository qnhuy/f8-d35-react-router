import React from "react"
import styles from './Todo.module.scss'

function Todo() {
    let uniqId = 0


    const [inputValue, setInputValue] = React.useState('')
    let [tasks, setTasks] = React.useState([])

    function handleAddTask() {
        if (inputValue.trim()) {
            const newTask = { id: ++uniqId, content: inputValue, completed: false }
            setTasks([...tasks, newTask])
        }
        // reset input value after add task
        setInputValue('')
    }

    function handleInputOnchange(e) {
        setInputValue(e.target.value)
    }

    function handleMarkTask(taskId) {
        setTasks(prev => prev.map(task => (
            task.id === taskId ? { ...task, completed: !task.completed } : task
        )))
    }

    function handleDeleteTask(taskId) {
        if (confirm(`Are you sure to delete task ${tasks.find(task => task.id === taskId).content}?`)) {
            tasks = tasks.filter(task => task.id !== taskId)
            setTasks(tasks)
        }
    }

    return (
        <div className={styles.todoWrapper}>
            <div className={styles.header}>
                <h2 className={styles.headerContent}>Todo List</h2>
                <i className={`${styles.headerIcon} fa-solid fa-book`}></i>
            </div>

            <div className={styles.taskStatuses}>
                <div className={`${styles.taskStatus} ${styles.taskTotal}`}>
                    <i className={`${styles.taskStatusIcon} fa-solid fa-circle-dot`}></i>
                    <p className={styles.taskStatusContent}>Total: </p>
                    <p className={styles.taskNumber}>{tasks.length}</p>
                </div>
                <div className={`${styles.taskStatus} ${styles.taskComplete}`}>
                    <i className={`${styles.taskStatusIcon} fa-solid fa-circle-check`}></i>
                    <p className={styles.taskStatusContent}>Complete: </p>
                    <p className={styles.taskNumber}>{tasks.filter(task => task.completed).length}</p>
                </div>
                <div className={`${styles.taskStatus} ${styles.taskUncomplete}`}>
                    <i className={`${styles.taskStatusIcon} fa-solid fa-circle-minus`}></i>
                    <p className={styles.taskStatusContent}>Uncomplete: </p>
                    <p className={styles.taskNumber}>{tasks.filter(task => !task.completed).length}</p>
                </div>
            </div>

            <div className={styles.addTask}>
                <input type="text" className={styles.taskInput} placeholder="Add your task!"
                    value={inputValue}
                    onChange={handleInputOnchange}
                />
                <button className={styles.submitBtn}
                    onClick={handleAddTask}
                    onKeyDown={e => e.key === 'Enter' ? handleAddTask : null}
                >
                    Add
                </button>
            </div>

            <ul className={styles.taskList}>
                {tasks.length < 1 && (
                    <div className={styles.taskEmpty}>
                        <h3>Your task list is empty.</h3>
                        <p>Add your first task!</p>
                    </div>
                )}
                {tasks.map((task, index) => (
                    <li key={index} className={`${styles.taskItem} ${task.completed ? 'completed' : ''}`}>
                        <input type="checkbox" className={styles.taskCheckbox}
                            checked={task.completed}
                            onChange={() => handleMarkTask(task.id)}
                        />
                        <p className={styles.taskContent}>{task.content}</p>
                        <i className={`${styles.taskDelete} fa-solid fa-xmark`} onClick={() => handleDeleteTask(task.id)}></i>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Todo