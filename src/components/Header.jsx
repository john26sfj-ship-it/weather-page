import styles from "./css/Header.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <h1>Temperatures next 7 days, including today:</h1>
        </div>
    )
}