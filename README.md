🔖 Smart Bookmark Manager

Smart Bookmark Manager is a high-performance, full-stack Single Page Application (SPA) designed to serve as your secure personal library for web links. Built with the MERN stack and Clerk, it offers a sophisticated, centralized dashboard to organize your digital life with real-time synchronization.

🚀 Features
Secure User Authentication: Leverages Clerk for robust sign-in/sign-up flows, ensuring your bookmark collection remains private and accessible only to you.

Full CRUD Functionality: Seamlessly create, view, update, and delete bookmarks with an optimized interface that provides instant feedback.

Intuitive Editing Workflow: Features an intelligent "Scroll-to-Edit" mechanism that automatically focuses the workspace when modifying existing entries.

Modern Responsive UI: A sleek, dark-themed dashboard built with CSS Glassmorphism and fluid layouts for a premium experience on any device.

Dynamic Data Fetching: Optimized API communication using a custom Axios instance to ensure minimal latency during synchronization.

🛠️ Tech Stack
Frontend: React.js (Hooks, Functional Components)

Backend: Node.js, Express.js (MERN specialized)

Authentication: Clerk (Identity Provider)

HTTP Client: Axios

Styling: CSS3 (Flexbox, Grid, Glassmorphism)

Deployment: Vercel

📸 Screenshots
<img width="1915" height="919" alt="image" src="https://github.com/user-attachments/assets/137b47fb-6889-476f-844d-c9e006f553c6" />

<img width="1896" height="901" alt="image" src="https://github.com/user-attachments/assets/99111323-5e54-4117-9e34-5bd7bf9d9a23" />


⚙️ Installation & Setup
Follow these steps to run the frontend project locally.

Prerequisites
Node.js (v14 or higher)

npm or yarn

Steps
Clone the Repository

Bash
git clone https://github.com/akhilshekar/smart-bookmark-manager.git
cd smart-bookmark-manager
Install Dependencies

Bash

npm install
Environment Configuration
Create a .env file in the root directory and add your keys:

Code snippet

VITE_API_URL=https://smart-bookmark-manager-backend.vercel.app/api/bookmarks
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
Run the Development Server

Bash

npm run dev
🏗️ Architecture Information
The application follows a modular component-based architecture to ensure scalability and maintainability.

State Management: Utilizes React's useState and useEffect for predictable data flow and component lifecycle management.

Routing: Integrated with Vercel's rewrite rules to support clean, client-side routing for SPA performance.

API Layer: Centralized Axios configuration to handle base URLs and environment-specific endpoints.


👨‍💻 Developer
Akhil S Shekar
