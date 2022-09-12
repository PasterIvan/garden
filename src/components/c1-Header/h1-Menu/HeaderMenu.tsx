import React from 'react'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { NavLink } from 'react-router-dom'

import style from 'components/c1-Header/h1-Menu/HeaderMenu.module.scss'
import logo from './img/logo.svg'

export const scrollUp = (): void => {
  window.scrollTo(0, 0)
}

type ActionType = {
  [key: string]: boolean
}

export const HeaderMenu: React.FC = () => {
  const scrollGardenPlan = (): void => {
    document.location.href = '#/main'
    const timeout = 100

    setTimeout(() => {
      const divElement = document.getElementById('gardenPlan')

      if (divElement) {
        divElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, timeout)
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (): void => {
    setAnchorEl(null)
  }
  const handleCloseAndScrollUp = (): void => {
    setAnchorEl(null)
    window.scrollTo(0, 0)
  }

  const setAction = ({ isActive }: ActionType) => (isActive ? style.active : style.item)

  return (
    <div className={style.menu}>
      <div className={style.logo}>
        <img src={logo} alt="" />
        <NavLink onClick={scrollUp} to="/main">
          Наш сад
        </NavLink>
      </div>
      <div className={style.burger}>
        <button type="button" className={style.buttonMenu} onClick={handleClick}>
          меню
        </button>
        <Menu
          className={style.burgerLinks}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem
            className={`${style.burgerLink} ${style.active}`}
            onClick={handleCloseAndScrollUp}
          >
            <NavLink to="/main" className={setAction}>
              Наш сад
            </NavLink>
          </MenuItem>
          <MenuItem
            className={`${style.burgerLink} ${style.active}`}
            onClick={handleCloseAndScrollUp}
          >
            <NavLink to="/about_us" className={setAction}>
              О нас
            </NavLink>
          </MenuItem>
          <MenuItem
            className={`${style.burgerLink} ${style.active}`}
            onClick={handleCloseAndScrollUp}
          >
            <NavLink to="/concurs" className={setAction}>
              Конкурсные работы
            </NavLink>
          </MenuItem>
          <MenuItem
            className={`${style.burgerLink} ${style.active}`}
            onClick={handleCloseAndScrollUp}
          >
            <NavLink to="/about_festival" className={setAction}>
              О фестивале
            </NavLink>
          </MenuItem>
          <MenuItem
            className={`${style.burgerLink} ${style.active}`}
            onClick={handleCloseAndScrollUp}
          >
            <NavLink to="/contacts" className={setAction}>
              Контакты
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <button type="button" className={style.buttonTrees} onClick={scrollGardenPlan}>
              деревья
            </button>
          </MenuItem>
        </Menu>
      </div>
      <div className={`${style.text} ${style.active}`}>
        <div>
          <NavLink onClick={scrollUp} to="/main" className={setAction}>
            Наш сад
          </NavLink>
          <NavLink onClick={scrollUp} to="/about_us" className={setAction}>
            О нас
          </NavLink>
          <NavLink onClick={scrollUp} to="/concurs" className={setAction}>
            Конкурсные работы
          </NavLink>
          <NavLink onClick={scrollUp} to="/about_festival" className={setAction}>
            О фестивале
          </NavLink>
          <NavLink onClick={scrollUp} to="/contacts" className={setAction}>
            Контакты
          </NavLink>
        </div>
        <button type="button" className={style.buttonTrees} onClick={scrollGardenPlan}>
          деревья
        </button>
      </div>
    </div>
  )
}
