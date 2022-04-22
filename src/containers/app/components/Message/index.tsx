import React, { FC, ReactNode } from 'react'

import './Message.scss'

type Props = {
  children: ReactNode
}

export const Message: FC<Props> = ({ children }) => (
  <div className='message'>{children}</div>
)
