import React from "react"
import styles from './Counter.module.scss'

function Counter() {
    const [value, setValue] = React.useState(0)

    function getState() {
        if (value === 0) {
            return 'Bằng không'
        } else if (value > 0) {
            return 'Dương'
        } else if (value < 0) {
            return 'Âm'
        }
    }

    return <div className={styles.wrapper}>
        <div className={styles.output} style={{ color: value > 0 ? 'green' : value < 0 ? 'red' : 'gray' }}>
            <h1 className={styles.number}>{value}</h1>
            <h4>{getState()}</h4>
        </div>
        <div className={styles.actions}>
            <button className={styles.action} onClick={() => setValue(value - 1)}>
                <i className={`${styles.actionIcon} fa-solid fa-minus`}></i>
                Decrease
            </button>
            <button className={styles.action} onClick={() => setValue(value + 1)}>
                <i className={`${styles.actionIcon} fa-solid fa-plus`}></i>
                Increase
            </button>
            <button className={styles.action} onClick={() => setValue(0)}>
                <i className={`${styles.actionIcon} fa-solid fa-rotate-left`}></i>
                Reset
            </button>
        </div>
    </div>
}

export default Counter