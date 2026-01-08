🚀 User Directory Frontend Application (React)

A modern, scalable frontend application built using React that fetches user data from an external API, displays it in a clean UI, supports searching, viewing details, and adding new users (frontend-only).

This project demonstrates strong React fundamentals, clean component architecture, state management, form validation, and UI/UX best practices — aligned with product-based company expectations.

🛠️ Tech Stack
<p align="left"> <img src="https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/Vite-Build_Tool-purple?logo=vite"/> <img src="https://img.shields.io/badge/CSS-Modern_Styling-blue?logo=css3"/> <img src="https://img.shields.io/badge/API-JSONPlaceholder-orange"/> </p>
✨ Features Implemented

✅ Fetch users from external API
✅ Loading & error states
✅ Real-time search (name & email)
✅ User detail toggle (address, company, website)
✅ Add new user (frontend-only)
✅ Form validation with user-friendly errors
✅ Reusable, clean components
✅ Responsive layout (mobile & desktop)
✅ Local state + localStorage persistence
✅ Alphabetical sorting

📂 Project Structure
user-directory/
│
├── src/
│   ├── components/
│   │   ├── AddUserForm.jsx
│   │   ├── UserCard.jsx
│   │   ├── UserList.jsx
│   │   ├── Loader.jsx
│   │   └── ErrorState.jsx
│   │
│   ├── pages/
│   │   └── UsersPage.jsx
│   │
│   ├── services/
│   │   └── userService.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
├── vite.config.js
└── README.md

🌐 API Used

JSONPlaceholder Users API

https://jsonplaceholder.typicode.com/users


Used for:

Initial user list

Demonstrating API integration

Frontend data handling (no backend dependency)

⚙️ Setup Instructions (Run Locally)
1️⃣ Clone the Repository
git clone <repo-url>
cd user-directory

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run dev


📍 Application runs at:
http://localhost:5173

🔍 Functional Breakdown
1️⃣ User List Page

Fetches users on page load

Displays:

Name

Email

Phone

Shows:

Loading indicator

Error message on API failure

2️⃣ Search Users

Real-time filtering

Search by:

Name

Email

Case-insensitive

No page reloads

3️⃣ User Details View

Toggle details per user card

Displays:

Website

Company name

Address

Clean expand/collapse interaction

4️⃣ Add New User (Frontend Only)

Controlled form inputs

Fields:

Name (required)

Email (required, validated format)

Phone (required)

Website (optional)

Company name (optional)

Address (optional)

Validation errors shown inline

On submit:

User added to UI list

Saved in localStorage

Form resets automatically

🎨 UI & UX Design

✔ Card-based layout
✔ Soft shadows & rounded corners
✔ Clear spacing & hierarchy
✔ Accessible form inputs
✔ Hover & focus states
✔ Mobile-friendly responsive design
✔ Professional color palette

Designed to look clean, modern, and recruiter-ready — not a raw demo UI.

🧠 Design Decisions
🧩 Component-Based Architecture

Reusable components (UserCard, UserList, AddUserForm)

Separation of concerns

🪝 React Hooks

useState for local state

useEffect for API calls

Clean, readable logic

💾 LocalStorage Persistence

Newly added users persist across reloads

Demonstrates real-world frontend behavior

📈 Scalability

Easily extendable to:

Pagination

Backend API

Authentication

UI frameworks

🧪 Testing & Validation

✔ Manual testing across browsers
✔ Handles empty states
✔ Prevents invalid form submission
✔ Graceful error handling

📌 Assignment Requirements Coverage
Requirement	Status
API Integration	✅
Search	✅
User Details	✅
Add User	✅
Validation	✅
Reusable Components	✅
Hooks Usage	✅
UI & UX	✅
Optional Bonus Tasks	✅
👨‍💻 Author

Hariharan Balasubramaniyam
Frontend & Backend Developer | React | Python | Django

📧 Email: steverogers0946@gmail.com

📱 Phone: 8925689589

⭐ Final Notes

This project focuses on clean code, readability, and scalability

Designed to reflect real-world frontend development standards

Suitable for internship and entry-level frontend evaluations