import styles from './ButtonSquareWithIcon.module.scss'

export default function ButtonSquareWithIcon({ children, onClick, label }) {
    return (
        <>
            <button
                onClick={onClick}
                className={styles['button']}
                aria-label={label}
            >
                {children}
            </button>
        </>
    )
}
