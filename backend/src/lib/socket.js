// // import { Server } from "socket.io";
// // import http from "http";
// // import express from "express";

// // const app = express();
// // const server = http.createServer(app);

// // const io = new Server(server, {
// //   cors: {
// //     origin: ["http://localhost:5173"],
// //   },
// // });

// // export function getReceiverSocketId(userId) {
// //   return userSocketMap[userId];
// // }

// // // used to store online users
// // const userSocketMap = {}; // {userId: socketId}

// // io.on("connection", (socket) => {
// //   console.log("A user connected", socket.id);

// //   const userId = socket.handshake.query.userId;
// //   if (userId) userSocketMap[userId] = socket.id;

// //   // io.emit() is used to send events to all the connected clients
// //   io.emit("getOnlineUsers", Object.keys(userSocketMap));

// //   socket.on("disconnect", () => {
// //     console.log("A user disconnected", socket.id);
// //     delete userSocketMap[userId];
// //     io.emit("getOnlineUsers", Object.keys(userSocketMap));
// //   });
// // });

// // export { io, app, server };



// // import { Server } from "socket.io";
// // import http from "http";
// // import express from "express";

// // const app = express();
// // const server = http.createServer(app);

// // // used to store online users
// // const userSocketMap = {}; // {userId: socketId}

// // const io = new Server(server, {
// //   cors: {
// //     origin: ["http://localhost:5173"],
// //   },
// // });

// // export function getReceiverSocketId(userId) {
// //   return userSocketMap[userId];
// // }

// // io.on("connection", (socket) => {
// //   console.log("A user connected", socket.id);

// //   const userId = socket.handshake.query.userId;
// //   if (userId) {
// //     userSocketMap[userId] = socket.id;
// //     io.emit("getOnlineUsers", Object.keys(userSocketMap));
// //   }

// //   socket.on("disconnect", () => {
// //     console.log("A user disconnected", socket.id);

// //     if (userId) {
// //       delete userSocketMap[userId];
// //       io.emit("getOnlineUsers", Object.keys(userSocketMap));
// //     }
// //   });
// // });

// // export { io, app, server };





// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();
// const server = http.createServer(app);

// // Online users map: { userId: socketId }
// const userSocketMap = {};

// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:5173"], // Add production origin too if needed
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// // 🔁 Helper to get socketId of a receiver
// export function getReceiverSocketId(userId) {
//   return userSocketMap[userId];
// }

// // 🔌 On socket connection
// io.on("connection", (socket) => {
//  const userId = socket.handshake.query.userId;


//   if (userId) {
//     userSocketMap[userId] = socket.id;
//     console.log(`[${new Date().toLocaleTimeString()}] ✅ Connected: ${userId} (${socket.id})`);
//   } else {
//     console.warn(`[${new Date().toLocaleTimeString()}] ⚠️ User connected without userId`);
//   }

//   // Broadcast online users to all sockets
//   io.emit("getOnlineUsers", Object.keys(userSocketMap));


//   // On disconnect
//   socket.on("disconnect", () => {
//     if (userId) {
//       delete userSocketMap[userId];
//       console.log(`[${new Date().toLocaleTimeString()}] ❌ Disconnected: ${userId} (${socket.id})`);
//     }
//     io.emit("getOnlineUsers", Object.keys(userSocketMap));
//   });
// });

// export { io, app, server };



import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

// used to store online users
const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };