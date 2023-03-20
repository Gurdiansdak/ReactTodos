import styles from "./Create.module.css"

const CreateToDo = () => {
    return (
        <div className={styles.item}>
            <input type="text" placeholder="Enter some todo" />
            <button>+ADD</button>
        </div>
    )
}

export default CreateToDo