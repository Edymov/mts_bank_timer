import React, { useState, useCallback, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Dispatch, RootState } from 'src/store'

import { getFunName } from 'src/helpers'
import { Container } from 'ui'
import { Messages } from '../Messages'
import { Buttons } from '../Buttons'
import { Inner } from '../../components/Inner'

export const App = () => {
  const [isTimerRunning, setTimerRunning] = useState(false)
  const timer = useRef<null | number>(null)
  const dispatch = useDispatch<Dispatch>()
  const { messages, replacingMode } = useSelector((state: RootState) => state.messages)

  const handleStartTimer = useCallback(() => {
    if (!timer.current) {
      setTimerRunning(() => true)
      timer.current = window.setInterval(() => {
        dispatch.messages.add(getFunName())
      }, 5000)
    }
  }, [dispatch.messages])

  const handleCancelTimer = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current)
      timer.current = null
      setTimerRunning(() => false)
      dispatch.messages.clear()
    }
  }, [dispatch.messages])

  const handleChangeMode = useCallback(() => {
    dispatch.messages.changeReplacingMode()
  }, [dispatch.messages])

  return (
    <main>
      <Container>
        <Inner>
          <Buttons
            handleStartTimer={handleStartTimer}
            handleCancelTimer={handleCancelTimer}
            checked={replacingMode}
            handleChangeMode={handleChangeMode}
            isTimerRunning={isTimerRunning}
          />
          <Messages data={messages} />
        </Inner>
      </Container>
    </main>
  )
}
