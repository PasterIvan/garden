import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import Button from "../../../common/Button/Button";
import style from "./HeaderMenu.module.css"
import logo from "./img/logo.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const HeaderMenu = () => {

    const scrollUp = () => {
        window.scrollTo(0, 0);
    }

    const scrollGardenPlan = () => {
        document.location.href = '#/main';
        setTimeout(function () {
            const divElement = document.getElementById('gardenPlan');
            divElement && divElement.scrollIntoView({behavior: 'smooth'});
        }, 100)
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        window.scrollTo(0, 0);
    };

    return (
        <div className={style.menu}>
            <div className={style.logo}>
                <img src={logo}/>
                <NavLink onClick={scrollUp} to={'/main'}>Наш сад</NavLink>
            </div>
            <div>
                <Button className={style.buttonMenu}
                        onClick={handleClick}>
                    меню
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <NavLink to={'/main'}>Наш сад</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <NavLink to={'/about_us'}>О нас</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <NavLink to={'/concurs'}>Конкурсные работы</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <NavLink to={'/about_festival'}>О фестивале</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Button className={style.buttonTrees}
                                onClick={scrollGardenPlan}>деревья</Button>
                    </MenuItem>
                </Menu>
            </div>
            <div className={style.text}>
                <div>
                    <NavLink onClick={scrollUp} to={'/main'}>Наш сад</NavLink>
                    <NavLink onClick={scrollUp} to={'/about_us'}>О нас</NavLink>
                    <NavLink onClick={scrollUp} to={'/concurs'}>Конкурсные работы</NavLink>
                    <NavLink onClick={scrollUp} to={'/about_festival'}>О фестивале</NavLink>
                </div>
                <Button className={style.buttonTrees}
                        onClick={scrollGardenPlan}>деревья</Button>
            </div>
        </div>
)
}