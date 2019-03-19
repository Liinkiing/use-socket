## use-socket
A hook to use with [socket.io](https://socket.io).

## Installation
With yarn
```bash
$ yarn add @liinkiing/use-socket
```

With npm
```bash
$ npm i @liinkiing/use-socket
```

## Documentation
https://liinkiing.github.io/use-socket/globals.html

## Example
```typescript jsx
import React, { FunctionComponent, useState } from 'react'
import { SocketProvider, useSocketOn, useSocket, useSocketEmit } from '@liinkiing/use-socket';

const Chat: FunctionComponent = () => {
  const [messages, setMessages] = useState([]);

  const socket = useSocket() // if you want to get access to your socket object

  // useSocketEmit("chat:send", { id: 'random', body: 'blabla'})
  // you can use this only if you are in the root body of your functional component
  // generally, you would use `socket = useSocket()` and then `socket.emit`, but maybe
  // this hook can serve ¯\_(ツ)_/¯

  useSocketOn("chat:message", newMessage =>
    setMessages([newMessage, ...messages])
  );

  return messages.length ? (
    <ul>
      {messages.map(message => (
        <li key={message.id}>{message.body}</li>
      ))}
    </ul>
  ) : (
    <p>No messages...</p>
  );
};

const App: FunctionComponent = () => (
  <SocketProvider url="https://your-ws-endpoint-here/">
    <Chat />
  </SocketProvider>
);
```
