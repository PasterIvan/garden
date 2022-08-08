import {NavLink} from "react-router-dom";
import React from "react";
import style from "./HeaderMenu.module.css"
import logo from "./img/logo.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const scrollUp = () => {
    window.scrollTo(0, 0);
}

export const HeaderMenu = () => {

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
    };
    const handleCloseAndScrollUp = () => {
        setAnchorEl(null);
        window.scrollTo(0, 0);
    };

    return (
        <div className={style.menu}>
            <div className={style.logo}>
                <img src={logo} alt=''/>
                <NavLink onClick={scrollUp} to={'/main'}>Наш сад</NavLink>
            </div>
            <div className={style.burger}>
                <button className={style.buttonMenu}
                        onClick={handleClick}>
                    меню
                </button>
                <Menu className={style.burgerLinks}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button'
                    }}
                >

                    <MenuItem className={style.burgerLink} onClick={handleCloseAndScrollUp}>
                        <NavLink to={'/main'}>Наш сад</NavLink>
                    </MenuItem>
                    <MenuItem className={style.burgerLink} onClick={handleCloseAndScrollUp}>
                        <NavLink to={'/about_us'}>О нас</NavLink>
                    </MenuItem>
                    <MenuItem className={style.burgerLink} onClick={handleCloseAndScrollUp}>
                        <NavLink to={'/concurs'}>Конкурсные работы</NavLink>
                    </MenuItem>
                    <MenuItem className={style.burgerLink} onClick={handleCloseAndScrollUp}>
                        <NavLink to={'/about_festival'}>О фестивале</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <button className={style.buttonTrees}
                                onClick={scrollGardenPlan}>деревья</button>
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
                <button className={style.buttonTrees}
                        onClick={scrollGardenPlan}>деревья</button>
            </div>
        </div>
)
}