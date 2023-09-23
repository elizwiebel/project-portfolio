import styles from './Overlay.module.scss'

export default function Overlay({ onClose, isOpen }) {
    const overlayClasses = isOpen ? `${styles['overlay']} ${styles['--open']}` : `${styles['overlay']}`

    return (
        <div onClick={() => onClose(true)} className={overlayClasses}></div>
    )
}