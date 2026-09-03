# Encinos Café & Bistro — Restaurant Website

<p>
  <img src="https://img.shields.io/badge/Status-Completed-58A96A?style=flat-square" alt="Completed">
  <img src="https://img.shields.io/badge/HTML5-E46C38?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-287FBA?style=flat-square&logo=css&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-276FA3?style=flat-square&logo=javascript&logoColor=white" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive_Design-58A96A?style=flat-square" alt="Responsive Design">
</p>

Responsive restaurant website for **Encinos Café & Bistro**, focused on presenting the restaurant, its menu and visual identity through a clean and accessible web experience.

This version preserves the original design and content while reorganizing the codebase to improve maintainability, validation and deployment.

## Overview

Encinos Café & Bistro is a multi-page informational website developed to provide customers with an accessible digital view of the restaurant and its menu.

The project preserves the original visual design, photography and content while improving the internal organization of the website.

The current version also removes unused demonstration pages and insecure legacy PHP/MySQL examples that were not part of the public-facing website.

## Features

- Responsive restaurant website
- Digital menu presentation
- Mobile-friendly interface
- Multi-page navigation
- Restaurant information and visual content
- Local images, fonts and visual assets
- Browser-side JavaScript interactions
- Organized and maintainable project structure

## Technology stack

| Area | Technologies |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 |
| Interactivity | JavaScript |
| Design | Responsive Web Design |
| Development | Node.js, npm |
| Version control | Git, GitHub |

## Project structure

    encinos-webpage-updated/
    ├── assets/
    │   ├── css/          # Styles and visual dependencies
    │   ├── fonts/        # Local fonts and icons
    │   ├── images/       # Restaurant photography and visual assets
    │   └── js/           # Browser scripts and dependencies
    ├── tools/            # Validation and build utilities
    ├── *.html            # Public website pages
    ├── package.json      # Development scripts
    └── README.md

## Getting started

### Requirements

Install:

- Node.js
- npm
- Git

### Installation

Clone the repository:

    git clone https://github.com/frannnkkyy/encinos-webpage-updated.git

Open the project:

    cd encinos-webpage-updated

Install the dependencies:

    npm install

Start the local development server:

    npm run dev

The website will be available at:

    http://localhost:8080

## Validation

Run the project validation tools with:

    npm run check

This helps verify the website before generating a production build.

## Production build

Generate the publishable version with:

    npm run build

The generated website will be available inside:

    dist/

## Technical improvements

This version of the project focuses not only on preserving the original website but also on improving its maintainability and public repository quality.

- Preserved the original layout, styles, photography and menu content
- Reorganized project assets into a clearer directory structure
- Removed unused demonstration pages
- Removed insecure legacy PHP/MySQL examples not used by the public website
- Improved custom scripts to verify that DOM elements exist before interacting with them
- Added validation and build tooling
- Removed passwords, credentials and database configuration from the public version

## Current scope

Encinos Café & Bistro is currently an informational restaurant website.

The public version focuses on presenting the restaurant and its menu rather than implementing server-side ordering, authentication or database functionality.

## What I learned

This project helped me practice:

- Building and maintaining responsive websites
- Organizing HTML, CSS and JavaScript projects
- Working with existing codebases
- Improving legacy frontend code
- Structuring static assets and dependencies
- Implementing safer browser-side JavaScript
- Preparing web projects for deployment
- Identifying and removing unnecessary or insecure legacy code
- Using npm scripts for validation and build workflows
- Maintaining a clean public GitHub repository

## Author

**Carlos Constantino**

- Portfolio: [portafoliofrann.netlify.app](https://portafoliofrann.netlify.app/)
- LinkedIn: [linkedin.com/in/fcoocarlos](https://www.linkedin.com/in/fcoocarlos/)
- GitHub: [github.com/frannnkkyy](https://github.com/frannnkkyy)

## Project status

The website is maintained as a portfolio project demonstrating responsive frontend development, codebase organization and modernization of an existing web project.
