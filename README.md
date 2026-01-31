# 📝 Notes Saver App

A clean, modern, and lightweight Notes / Paste Saver application built using React, Redux Toolkit, React Router, and Tailwind CSS.

This application allows users to create, edit, view, search, copy, share, and delete notes with persistent storage using the browser’s localStorage. The main goal of this project is to practice real-world React fundamentals, Redux state management, routing, and clean UI design.

---

## 🚀 Live Demo

👉 https://notes-saver-app.vercel.app

---

## 📸 Screenshots

### Home – Create & Edit Notes
![Home](screenshots/home.png)

### Pastes – View & Manage Notes
![Pastes](screenshots/pastes.png)

### View – Read-only Mode
![View](screenshots/view.png)

---

## ✨ Features

- Create new notes / pastes  
- Edit existing notes  
- View notes in read-only mode  
- Search notes by title  
- Copy notes to clipboard  
- Share notes using Web Share API  
- Delete notes  
- Persistent storage using localStorage  
- Clean and aesthetic dark UI  
- Fully responsive layout  

---

## 🔄 Application Flow

User Action  
↓  
React Component  
↓  
Redux Action Dispatch  
↓  
Redux Store Update  
↓  
UI Re-render + localStorage Sync  

When a user performs any action like creating, editing, or deleting a note, the React component dispatches a Redux action. The Redux slice updates the global state, which is immediately synced to localStorage. Once the state changes, React automatically re-renders the UI with the updated data.

---

## 🏗️ Architecture Overview

Navbar  
↓  
React UI (Home | Pastes | ViewPastes)  
↓  
Redux Toolkit (pasteSlice.js)  
↓  
Redux Store (store.js)  
↓  
localStorage  

The application follows a unidirectional data flow, making state changes predictable, easier to debug, and scalable.

---

## 🛠️ Tech Stack

- React  
- Redux Toolkit  
- React Router DOM  
- Tailwind CSS  
- React Icons  
- Vite  
- localStorage  
- Vercel (Deployment)  

---

## 📦 Local Setup

git clone https://github.com/RYUGA02/Notes-Saver-App.git  
cd Notes-Saver-App  
npm install  
npm run dev  

The application will run locally on http://localhost:5173

---

## 🧠 Learning Outcomes

This project helped in understanding Redux Toolkit for global state management, syncing state with localStorage, React Router for navigation, building clean UI with Tailwind CSS, and deploying a modern React application on Vercel.

---

## 👨‍💻 Author

Kush Kumar Singh  
Built as a hands-on project while learning modern React and frontend development best practices.
