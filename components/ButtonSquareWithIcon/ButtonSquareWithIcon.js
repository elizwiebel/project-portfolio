import styles from './ButtonSquareWithIcon.module.scss'

export default function ButtonSquareWithIcon({ children, onClick }) {
    return (
        <>
            <button onClick={onClick} className={styles['button']}>
                {children}
            </button>
        </>
    )
}