import Portal from '@components/Portal/Portal'
import styles from './Drawer.module.scss'
import IconCloseX from 'svgs/IconCloseX'
import Overlay from '@components/Overlay/Overlay'
import ButtonSquareWithIcon from '@components/ButtonSquareWithIcon/ButtonSquareWithIcon'
import HeaderMenu from '@components/HeaderMenu/HeaderMenu'
// import { useEffect } from 'react'

export default function Drawer({ children, isOpen, onClose, position }) {
    const drawerClasses = isOpen
        ? `${styles['drawer']} ${styles[`--${position}`]} ${styles['--open']}`
        : `${styles['drawer']} ${styles[`--${position}`]}`

    // Uncomment to disable body scrolling on drawer open
    // useEffect(() => {
    //     isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    // }, [isOpen])

    return (
        <>
            <Portal wrapperId="portal-drawer-menu">
                <Overlay onClose={onClose} isOpen={isOpen} />
                <div className={styles['drawer-container']}>
                    <div className={drawerClasses}>
                        <HeaderMenu>
                            <ButtonSquareWithIcon
                                onClick={() => onClose(true)}
                                label="Close drawer"
                            >
                                <IconCloseX />
                            </ButtonSquareWithIcon>
                        </HeaderMenu>
                        <div className={styles['drawer-main']}>{children}</div>
                    </div>
                </div>
            </Portal>
        </>
    )
}
