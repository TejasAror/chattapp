import { io, Socket } from "socket.io-client";
import Env from "./env";

let socket: Socket;

export const getSocket = (options?: { room: string; user?: string }): Socket => {
  if (!socket) {
    socket = io(Env.BACKEND_URL, {
      autoConnect: false,
      auth: {
        room: options?.room,
        user: options?.user || "Anonymous",
      },
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });
  } else {
    // update auth if reconnecting or switching room
    socket.auth = {
      room: options?.room,
      user: options?.user || "Anonymous",
    };
  }

  return socket;
};
