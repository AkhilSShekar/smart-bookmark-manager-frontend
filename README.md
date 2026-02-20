Smart Bookmark Manager
A sleek, full-stack e-commerce-style bookmarking application built with the MERN stack. This tool allows users to securely save, organize, and manage their favorite web links with a modern, dark-themed user interface.

🚀 Features
Secure Authentication: Integrated with Clerk for seamless user sign-in and protected dashboard access.

Full CRUD Operations: Create, Read, Update, and Delete bookmarks with real-time state updates.

Modern UI/UX: Responsive design featuring glassmorphism, CSS variables, and smooth animations.

Smooth Navigation: Automatic scrolling to the form when editing a bookmark for better usability.

API Integration: Pre-configured Axios instance for communicating with a Vercel-hosted backend.

🛠️ Tech Stack
Frontend: React.js

Styling: CSS3 with Flexbox/Grid and Google Fonts (Inter)

Authentication: Clerk

HTTP Client: Axios

Deployment: Vercel

📂 Project Structure
Plaintext
src/
├── api/
│   └── axios.js          # API configuration
├── components/
│   ├── BookmarkCard.jsx  # Individual bookmark display
│   ├── BookmarkForm.jsx  # Logic for Adding/Editing
│   └── BookmarkList.jsx  # Grid layout for bookmarks
├── App.jsx               # Main application logic
├── main.jsx              # Entry point & Clerk Provider
└── index.css             # Global resets
⚙️ Setup Instructions
Clone the repository

Install dependencies:

Bash
npm install
Environment Variables:
Create a .env file in the root directory and add your credentials:

Code snippet
VITE_API_URL=https://smart-bookmark-manager-backend.vercel.app/api/bookmarks
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
Run the application:

Bash
npm run dev
🌐 Deployment
The project is configured for easy deployment on Vercel. The included vercel.json ensures that all frontend routes are correctly rewritten to the root to support SPA navigation.

📝 Author
Akhil S Shekar

2025 Graduate

Full Stack Developer specializing in the MERN stack

Would you like me to add a section on how to contribute or include specific API documentation for the backend endpoints?
