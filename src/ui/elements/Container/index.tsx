import React, { FC, ReactNode } from 'react'

import './Container.scss'

type Props = {
  children: ReactNode,
}

export const Container: FC<Props> = ({ children }) => <div className='container'>{children}</div>
