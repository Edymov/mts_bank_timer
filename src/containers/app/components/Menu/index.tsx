import React, { FC, ReactNode } from 'react'

import './Menu.scss'

export const Menu: FC<{children: ReactNode}> = ({ children }) => (
  <div className='menu'>{children}</div>
)
