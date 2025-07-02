# 🔌 Scalable Socket.IO Chat App

A full-stack real-time chat application built with **Next.js**, **Express.js**, **Socket.IO

---

## 🚀 Features

- 💬 Real-time bi-directional chat via Socket.IO
- 🧠 Redis Pub/Sub for scalable WebSocket architecture
- 🧾 PostgreSQL with Prisma ORM for storing messages, users, and rooms
- 🧱 Fully typed using TypeScript (frontend + backend)
- 🌐 Next.js frontend (React Server Components + TailwindCSS)
- 🔐 JWT-based user authentication

---

## 🛠 Tech Stack

| Layer        | Tech                               |
|--------------|------------------------------------|
| Frontend     | Next.js 14 (App Router)            |
| Styling      | Tailwind CSS                       |
| Backend      | Express.js + Socket.IO             |
| Real-Time    | WebSockets with Redis Pub/Sub      |
| Database     | PostgreSQL + Prisma ORM            |
| Auth         | JWT + Middleware                   |
| Types        | TypeScript (Full Stack)            |
| Caching      | Redis                              |
| Dev Tools    | Nodemon, dotenv, etc.              |

---
## 📂 Folder Structure

├── front/ # Next.js 14 (App Router) frontend
│ ├── app/
│ ├── components/
│ ├── lib/
│ ├── providers/
│ ├── validations/
│ ├── types.ts
│ ├── middleware.ts
│ ├── package.json
│ └── ...
│
├── server/ # Express + Socket.IO backend
│ ├── config/
│ ├── controllers/
│ ├── generated/ # Prisma client
│ ├── middlewares/
│ ├── routes/
│ ├── socket.ts
│ ├── index.ts # Entry point
│ ├── prisma/ # Prisma schema and migrations
│ ├── .env
│ ├── package.json
│ └── ...
│
├── README.md
└── ...



