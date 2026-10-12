# Anand P Portfolio

A modern personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. It showcases my software engineering experience, projects, education, skills, and a contact form.

## Features

- Responsive single-page portfolio layout
- Smooth section scrolling and fixed navigation
- Experience and education timeline sections
- Project cards with live demo and GitHub links
- Skills section with technology icons
- Contact form powered by EmailJS
- Animated UI transitions for a polished experience

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Scroll
- Lucide Icons
- React Icons
- EmailJS

## Project Structure

- src/App.jsx – main page composition and section layout
- src/constants.jsx – profile data, experience, projects, skills, and education
- src/components/ – reusable sections for Home, Experience, Projects, Skills, Education, Contact, Footer, and Navbar
- src/index.css – global styles and Tailwind setup

## Getting Started

1. Install dependencies:
   npm install

2. Start the development server:
   npm run dev

3. Open the app in your browser at:
   http://localhost:5173

## Production Build

To create a production build:

npm run build

To preview the built app locally:

npm run preview

## Customizing the Portfolio

Update the content in src/constants.jsx to change:

- Resume link
- Project details
- Skills
- Education
- Experience
- Social/profile links

## Notes

- The contact form uses EmailJS with credentials configured in src/components/ContactMe.jsx.
- If you want to deploy this portfolio, you can host it on Vercel, Netlify, or any static hosting provider.
