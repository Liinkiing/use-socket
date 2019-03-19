import {useContext} from "react";
import {SocketContext} from "./provider";

const useSocket = (): SocketIOClient.Socket | null => useContext(SocketContext);

export default useSocket;
