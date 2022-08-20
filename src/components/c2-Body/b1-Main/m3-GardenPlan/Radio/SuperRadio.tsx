import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react'

import style from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,

  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e)
    }
    if (onChangeOption) {
      onChangeOption(e.currentTarget.value)
    }
  }

  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <label key={`${name}-${i}`} style={{ cursor: 'pointer' }} className={style[`button-${o}`]}>
          <input
            type="radio"
            name={name}
            checked={o === value}
            value={o}
            onChange={onChangeCallback}
            {...restProps}
          />
        </label>
      ))
    : []

  return <div className={style.buttons}>{mappedOptions}</div>
}

export default SuperRadio
