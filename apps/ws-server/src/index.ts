// import express from 'express';
// import { createServer } from 'http';
// import { Server, Socket } from 'socket.io';
// import { env } from '@repo/backend-common/config';
// const app = express();
// const httpServer = createServer(app);

// const io = new Server(httpServer, {
//   cors: {
//     origin: '*',
//   },
// });

// io.on('connection', (socket: Socket) => {
//   socket.on('disconnect', () => {
//     console.log('Player disconnected:', socket.id);
//   });
// });

// httpServer.listen(env.WSPORT || 3000, () => {
//   console.log(`WebSocket server running on port ${env.WSPORT || 3000}`);
// });
