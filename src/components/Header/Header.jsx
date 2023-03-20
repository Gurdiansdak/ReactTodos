import styles from "./Header.module.css"



const Header = (props) => {
    return(
        <header className={styles.header}>
            <h1>Todos({props.compleateTodos}/{props.todos})</h1>
        </header>
    )
}

export default Header;