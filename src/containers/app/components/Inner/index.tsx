import React, { FC, ReactNode } from 'react'

import './Inner.scss'

export const Inner: FC<{children: ReactNode}> = ({ children }) => (
  <div className='inner'>{children}</div>
)
