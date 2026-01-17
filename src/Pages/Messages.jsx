import React from 'react'
import MessagesTabs from '../Components/MessagesComponents/MessagesTabs'
import MessagesChat from '../Components/MessagesComponents/MessagesChat'

const Messages = () => {
  return (
    <div>
      <MessagesTabs/>
      <MessagesChat/>
    </div>
  )
}

export default Messages