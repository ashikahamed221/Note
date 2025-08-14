## 📝 NoteNest

A simple and fast note-taking app built with React + Vite, TypeScript, and TailwindCSS, with real-time synchronization powered by Firebase Firestore. Users can easily add and delete notes, and all changes are instantly updated across sessions using Firestore's onSnapshot feature.

## 🚀 Features

➕ Add Notes – Create new notes instantly.

❌ Delete Notes – Remove notes with a single click.

🔄 Real-time Sync – Notes update in real-time using Firebase Firestore onSnapshot.

☁ Cloud Storage – Notes are stored securely in Firebase Firestore.

🔔 Hot Toast Notifications – User-friendly toast alerts using react-hot-toast.

## 🛠️ Tech Stack

Frontend: React + Vite, TypeScript

Styling: TailwindCSS

Database: Firebase Firestore

Notifications: npm package react-hot-toast

📸 Screenshot

## 📦 Installation & Setup

1. **Clone the repository**

      git clone https://github.com/your-username/notenest.git
   
      cd notenest


2. **Install dependencies**

       npm install

## Setup Firebase

     1. Create a Firebase project at Firebase Console

     2. Enable Firestore Database.

     3. Get your Firebase config and update it in your firebase.ts file.

## Run the development server

npm run dev

⚙️ Firebase Config Example

       // firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



