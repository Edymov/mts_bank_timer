import React, { FC, memo } from 'react'

import { Button, Checkbox } from 'ui'
import { Menu } from '../../components/Menu'

type Props = {
  handleStartTimer: () => void,
  handleCancelTimer: () => void,
  handleChangeMode: () => void,
  isTimerRunning: boolean,
  checked: boolean
}

export const ButtonsComponent: FC<Props>=  ({
  handleStartTimer, handleCancelTimer, isTimerRunning, handleChangeMode, checked }) =>
(
  <Menu>
    <Button onClick={handleStartTimer} disabled={isTimerRunning}>Старт</Button>
    <Button onClick={handleCancelTimer} disabled={!isTimerRunning}>Сброс</Button>
    <Checkbox onChange={handleChangeMode} checked={checked} label='Заменять сообщения' />
  </Menu>
)


export const Buttons = memo(ButtonsComponent)
