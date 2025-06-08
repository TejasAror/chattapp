import { Server, Socket } from "socket.io";
import prisma from "./config/db.config.js";

interface CustomSocket extends Socket {
  room?: string;
  data: {
    user?: string;
  };
}

export function setupSocket(io: Server) {
  // Middleware: Validate room and optionally user
  io.use((socket: CustomSocket, next) => {
    const room = socket.handshake.auth.room || socket.handshake.headers.room;
    const user = socket.handshake.auth.user;

    if (!room) {
      return next(new Error("Invalid room. Please pass correct room ID."));
    }

    socket.room = room;
    socket.data.user = user || "Anonymous";
    next();
  });

  // On client connection
  io.on("connection", (socket: CustomSocket) => {
    socket.join(socket.room);

    console.log(`User connected: ${socket.id}, joined room: ${socket.room}`);

    // On receiving a chat message
    socket.on("message", async (data) => {
      const { message, name, group_id } = data;

      if (!message || !name || !group_id) {
        return socket.emit("error", { msg: "Missing required fields" });
      }

      try {
        const savedMessage = await prisma.chats.create({ data });
        socket.to(socket.room!).emit("message", savedMessage);
      } catch (error) {
        console.error("Error saving message:", error);
        socket.emit("error", { msg: "Failed to save message" });
      }
    });

    // On client disconnect
    socket.on("disconnect", (reason) => {
      console.log(`A user disconnected: ${socket.id} - Reason: ${reason}`);
    });
  });
}
