import React, { FC, ReactNode } from 'react'
import cx from 'classnames'

import './Button.scss'

type Props = {
  children: ReactNode,
  onClick: () => void,
  disabled?: boolean
}

export const Button: FC<Props> = ({ children, onClick, disabled= false }) => (
  <button
    className={cx('button', { 'button--disabled': disabled })}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
)
