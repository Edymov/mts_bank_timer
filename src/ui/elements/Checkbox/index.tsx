import React, { FC, useId } from 'react'
import cx from 'classnames'

type Props = {
  /**
   * Аттрибут Id
   */
  id?: string,
  /**
   * Аттрибут label
   */
  label?: string,
  /**
   * Аттрибут Name
   */
  name?: string,
  /**
   * Аттрибут Disabled
   */
  disabled?: boolean,
  /**
   * Аттрибут Checked
   */
  checked: boolean,
  /**
   * Обработчик onChange, вызывается при изменении состояния
   */
  onChange: () => void,
}

import './Checkbox.scss'

/**
 * Компонент Checkbox
 */
const CheckboxComponent: FC<Props> = ({ id, name, label, disabled = false, checked, onChange }) => {
  const newId = useId()
  const classes = cx('checkbox', {
    'checkbox--disabled': disabled,
  })

  return (
    <div className='checkbox-field'>
      <input
        className={classes}
        id={id || newId}
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        type='checkbox'
        readOnly
      />
      <label htmlFor={newId}>{label && <span className='checkbox__text'>{label}</span>}</label>
    </div>
  )
}

export const Checkbox = React.memo(CheckboxComponent)
