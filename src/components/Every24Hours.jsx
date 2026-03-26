import styles from "./css/Every24Hours.module.css"

export default function Every24Hours ({chunk, temps}) {
    let output = [];
    for (let i = 0; i < chunk.length; i++) {
        output.push(<div key={i} className={styles.goodShow}><p>{chunk[i]}</p><p>{temps[i]}℃</p></div>);
    }
    return (
        <>
            {output}
        </>
    )
}
