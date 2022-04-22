import React, { FC, ReactNode } from 'react'

import './MessagesList.scss'

type Props = {
  children: ReactNode
}

export const MessagesList: FC<Props> = ({ children }) => (
  <div className='messages-list'>{children}</div>
)
