import React, { FC, memo } from 'react'
import { Message } from '../../components/Message'
import { MessagesList } from '../../components/MessagesList'

type Props = {
  data: Array<string>
}

const MessagesComponent: FC<Props>= ({ data }) => (
  <MessagesList>
    {data.length > 0
      ? data.map((item, index) => (<Message key={index}>{item}</Message>))
      : <Message>Сообщения не найдены</Message>}
  </MessagesList>
)

export const Messages = memo(MessagesComponent)
