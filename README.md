# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React PDF Browser

## Overview
The React PDF Browser is a web application that enables users to browse, search, and read PDFs easily. It includes features such as a list view with thumbnail previews, a search bar, and an integrated PDF viewer for seamless user experience.

---

## Features
1. **List View**: Displays a list of PDFs with titles, authors, and thumbnail previews.
2. **Search Functionality**: Allows users to filter PDFs by name.
3. **PDF Viewer**: Enables users to view the selected PDF within the application.
4. **Responsive Design**: Ensures compatibility across different screen sizes and devices.

---

## Setup Instructions

### Prerequisites
Make sure you have the following installed on your system:
- **Node.js**: [Download here](https://nodejs.org/)
- **npm**: Comes with Node.js installation.

### Steps to Set Up
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>

   
Navigate to the Project Directory:
bash
Copy code
cd react_pdf_browser
Install Dependencies:
bash
Copy code
npm install
Run the Application Locally:
bash
Copy code
npm start
Access the Application: Open your browser and navigate to http://localhost:3000.
Assumptions
The application retrieves the list of PDFs from an API.
The API provides valid PDF URLs, titles, authors, and other metadata.
PDF thumbnails are generated dynamically using the first page of each PDF. If a PDF cannot generate a thumbnail, a default placeholder image is used.
Users access the application on modern browsers supporting React.js features and JavaScript.
How to Use the Application
1. Browse PDFs
When you open the application, you'll see a list of available PDFs with their titles, authors, and thumbnail previews.
2. Search for PDFs
Use the search bar at the top to filter PDFs by their title. The list updates in real time based on your search query.
3. View a PDF
Click on any PDF item in the list to open it in the integrated viewer. The viewer displays the PDF content in an iframe for easy reading.
4. Close the Viewer
Use the "Close" button in the viewer to return to the main list view.
Technologies Used
Frontend: React.js, HTML, CSS
PDF Handling: pdf.js library
API: Sample data fetched from https://api.npoint.io/dee51ea017d20efdfcc8
Styling: Responsive design using plain CSS
