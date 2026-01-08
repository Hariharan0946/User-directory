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
## 📌 Project Objective

The objective of this assignment is to evaluate a candidate’s ability to:

- Build a scalable frontend application
- Integrate external APIs
- Handle application state cleanly
- Design reusable components
- Implement form validation
- Deliver a clean, responsive UI
- Deploy a frontend application to production

This project focuses purely on **frontend engineering** (no backend persistence required)

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

## 🌐 External API Used

JSON Placeholder Users API
   https://jsonplaceholder.typicode.com/users

This public API is commonly used for frontend prototyping and testing.  
It provides mock user data with fields like name, email, phone, address, and company.

---

## 📦 Features (Requirement-wise Breakdown)

### 1️⃣ User List Page
✔ Fetches users from API on page load  
✔ Displays the following fields:
- Name
- Email
- Phone  

✔ Handles:
- Loading state while data is being fetched
- Error state if API request fails

---

### 2️⃣ Search Users
✔ Search input provided  
✔ Filters users by:
- Name
- Email  

✔ Real-time filtering  
✔ Case-insensitive matching  
✔ No page reload required  

---

### 3️⃣ User Details View
✔ Each user is displayed in a card  
✔ On clicking **“Show Details”**, additional information is displayed:
- Website
- Company name
- Address  

✔ Toggle behavior (Show / Hide details)  
✔ Implemented without navigation for better UX  

---

### 4️⃣ Add New User (Frontend Only)
✔ A form to add a new user on the frontend  
✔ Fields:
- Name (required)
- Email (required, validated format)
- Phone (required)
- Website (optional)
- Company name (optional)
- Address (optional)

✔ Input validation:
- Required field checks
- Email format validation

✔ On successful submission:
- User is added to the list immediately
- Form resets automatically

> ⚠️ Note: No backend persistence is required as per assignment instructions.

---

## 🎨 UI & UX Expectations (Implemented)

✔ Clean, readable layout  
✔ Card-based UI  
✔ Proper spacing and alignment  
✔ Hover & focus states  
✔ Responsive design (mobile + desktop)  
✔ Minimal yet professional styling  

---

## 📂 Project Structure
```
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

```

---

## ⚙️ Setup Instructions (Run Locally)

### 1️⃣ Clone the repository
```
git clone https://github.com/Hariharan0946/User-directory.git
cd user-directory
```
2️⃣ Install dependencies
```
npm install
```
3️⃣ Start development server
```
npm run dev
```

## 📍 App runs at:
http://localhost:5173

🚀 Deployment Details

Platform: Netlify

Build Command:
```
npm run build
```

Publish Directory:
```
dist
```
---
## 🧠 Architecture & Design Decisions
### 🔹 Component-Based Architecture

  - Each UI responsibility is isolated into reusable components, making the application easier to scale and maintain.

### 🔹 Hooks-Based State Management

  - useState for UI and form state
  
  - useEffect for API calls
    
  - Clean, predictable data flow

### 🔹 Service Layer Pattern

  - API logic is abstracted into userService.js, keeping UI components clean and readable.

### 🔹 UX-First Validation

  - Form validation ensures users receive immediate and clear feedback, improving usability.

---

## 🧪 Testing

  -  Manual testing across components
  -  Form validation tested
  -  API error handling verified
  -  Mobile & desktop responsiveness checked

---
## 👨‍💻 Author
### Hariharan Balasubramaniyam





