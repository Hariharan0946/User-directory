# 🚀 User Directory – Frontend Assignment

A **modern, responsive User Directory application** built using **React + Vite**, showcasing clean component architecture, API integration, form validation, and production-ready deployment.

This project demonstrates **frontend fundamentals expected from product-based companies** for intern / fresher roles.

---

## 🛠️ Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-Build_Tool-purple?logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/CSS-Custom_Styling-blue?logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Netlify-Deployed-success?logo=netlify"/>
</p>

---

## 📌 Live Website

🔗 **Live URL:**  
https://loquacious-biscotti-47c1a9.netlify.app

---

## 📦 Features

### ✅ Core Features
- Fetch users from public API
- Display Name, Email, Phone
- Loading & error handling
- Real-time search (name & email)
- View user details (address, company, website)
- Add new user (frontend-only)
- Form validation with user-friendly errors

### 🌟 Bonus Enhancements
- Reusable React components
- Clean state management using hooks
- Modern card-based UI
- Responsive design (mobile + desktop)
- Production deployment with Netlify

---

## 🌐 API Used

**JSONPlaceholder Users API**  
https://jsonplaceholder.typicode.com/users



---

## 🖥️ Application Screens

### 🔹 Add New User
- Required fields: Name, Email, Phone
- Optional fields: Website, Company, Address
- Validation before submission
- Resets form after successful add

### 🔹 User List
- Displays users in cards
- Shows basic info by default
- Expand to view full details

### 🔹 Search
- Filter users by name or email
- Works in real time without reload

---

## 📂 Project Structure

user-directory/
│
├── src/
│ ├── components/
│ │ ├── AddUserForm.jsx
│ │ ├── UserCard.jsx
│ │ ├── UserList.jsx
│ │ ├── Loader.jsx
│ │ └── ErrorState.jsx
│ │
│ ├── pages/
│ │ └── UsersPage.jsx
│ │
│ ├── services/
│ │ └── userService.js
│ │
│ ├── styles/
│ │ └── global.css
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── public/
├── index.html
├── vite.config.js
├── package.json
└── README.md

yaml
Copy code

---

## ⚙️ Setup Instructions (Run Locally)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Hariharan0946/User-directory.git
cd user-directory
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Start development server
bash
Copy code
npm run dev
📍 App runs at:

arduino
Copy code
http://localhost:5173
🚀 Deployment (Netlify)
Build Command:

arduino
Copy code
npm run build
Publish Directory:

nginx
Copy code
dist
Auto-deploy enabled from GitHub main branch

🧠 Design Decisions
🧩 Component-Based Architecture
Each UI concern is isolated into reusable components for scalability and maintainability.

🔄 State Management with Hooks
Used useState and useEffect for predictable and clean state handling.

🎯 UX First Approach
Clear form validation messages

Smooth interactions

Clean spacing and alignment

🌍 Production Ready
Built using Vite for fast builds

Deployed with Netlify

No runtime errors in production

🧪 Testing
✔ Manual testing across components
✔ Form validation tested
✔ API error handling verified
✔ Mobile & desktop responsiveness checked

👨‍💻 Author
Hariharan Balasubramaniyam
Frontend / Backend Developer
React | JavaScript | Python | Django

📧 Email: steverogers0946@gmail.com
🔗 GitHub: https://github.com/Hariharan0946
