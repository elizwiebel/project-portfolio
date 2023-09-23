import { useState } from 'react'
import IconHeaderMenu from 'svgs/IconHeaderMenu'
// import styles from './HeaderButton.module.scss'
import Drawer from '@components/Drawer/Drawer'
import ButtonSquareWithIcon from '@components/ButtonSquareWithIcon/ButtonSquareWithIcon'

export default function HeaderButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <ButtonSquareWithIcon onClick={() => setIsOpen(true)}>
                <IconHeaderMenu />
            </ButtonSquareWithIcon>
            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                position='top'>
                <p>Content Coming Soon!</p>
            </Drawer>
        </>
    )
}