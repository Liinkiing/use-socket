import {DependencyList, useContext, useEffect} from "react";
import {SocketContext} from "./provider";

const useSocketOn = (event: string, callback?: (...args: any[]) => void, deps?: DependencyList): void => {
  const socket = useContext(SocketContext);
  useEffect(() => {
    if (socket && event && callback) {
      socket.on(event, callback);
    }

    return () => {
      if (socket && event && callback) {
        socket.removeListener(event, callback);
      }
    };
  }, [event, callback, socket, ...(deps ? deps : [])]);
};

export default useSocketOn;
