import styles from "./Todo.module.css"

const ToDo = (props) => {
    return (
        <div className={styles.Todo}>
            <div>
                <input checked={props.status} type="checkbox" />
                <p className={props.status ? styles.compleat : " "}>{props.title}</p>
            </div>
            <div>
                <button>Edit</button>
                <button>Del</button>
            </div>
        </div>
    )
}

export default ToDo