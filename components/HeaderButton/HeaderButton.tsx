import { useState } from "react";
import IconHeaderMenu from "svgs/IconHeaderMenu";
import Drawer from "@components/Drawer/Drawer";
import ButtonSquareWithIcon from "@components/ButtonSquareWithIcon/ButtonSquareWithIcon";
import NavMenu from "@components/NavMenu/NavMenu";

export default function HeaderButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ButtonSquareWithIcon onClick={() => setIsOpen(true)} label={"Open drawer"}>
                <IconHeaderMenu />
            </ButtonSquareWithIcon>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="top">
                <NavMenu />
            </Drawer>
        </>
    );
}
