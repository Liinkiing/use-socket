import {useContext, useEffect, useState} from "react";
import {SocketContext} from "./provider";

const useSocketEmit = (event: string, ...args: any[]): void => {
  const socket = useContext(SocketContext);
  const [socketAvailable, setSocketAvailable] = useState(false);
  useEffect(() => {
    setSocketAvailable(true);

    return () => {
      setSocketAvailable(false);
    };
  }, [socket]);

  if (socketAvailable && socket && event) {
    socket.emit(event, ...args);
  }
};

export default useSocketEmit;
