# 📺 BBC iPlayer Clone

A **BBC iPlayer-inspired web app** built using **React.js** and **Material UI**, designed to replicate the visual layout and navigation experience of the official BBC iPlayer website.  
This project focuses on **UI design and component structure**, with dynamic navigation links and responsive layout — built purely for **educational and portfolio purposes**.

---

## 🚀 Live Demo
🔗 [Live Preview](https://sarika-t.github.io/bbcSample/)  

---

## 🧩 Features

✅ **BBC-inspired UI** — same layout, typography, and design consistency  
✅ **Fully responsive design** — optimized for desktop, tablet, and mobile  
✅ **Dynamic navigation links** — pages like *Home, News, Sport, Business, Innovation, Culture, Travel* added dynamically  
✅ **Explore Section** — secondary navigation includes *Earth, Video, Live*, etc.  
✅ **Footer with external links** — includes Terms, Privacy, Accessibility, Contact, etc.  
✅ **React Router Integration** — navigation handled via `react-router-dom`  
✅ **Material UI Components** — used for consistent and modern styling  
✅ **SASS support** — for scalable, modular CSS styling  

---

## ⚙️ Not Implemented / Under Development

⚠️ **Sign In**, **Filter**, and **Search** functionalities are not available due to **BBC iPlayer region restrictions**:  
> “Sorry, BBC iPlayer isn’t available in your region.”

This project is built for **UI demonstration** only and does not include playback or API integration.

---

## 🏗️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | React.js (v19) |
| **Routing** | React Router DOM (v7.8.2) |
| **UI Library** | Material UI (MUI v7) |
| **Styling** | SCSS (Sass Loader v16) |
| **Deployment** | GitHub Pages |
| **Testing** | React Testing Library |
| **Package Management** | npm |

---

## 📁 Folder Structure


├── public/
│ ├── index.html
│ └── favicon.ico
├── src/
│ ├── assests/
│ │ ├── icon.js
│ ├── components/
│ │ ├── Common/
| | |  ├── Common.scss
│ │ |  ├── LinksBBC.jsx
│ │ |  ├── SearchBar.jsx
│ │ ├── Content/
| | |  ├── FotterLinks.jsx
│ │ |  ├── FooterLinks.scss
│ │ ├── Header/
| | |  ├── Header.jsx
│ │ |  ├── Header.scss
│ │ └── Maninpage/
| |    ├── Mainpage.jsx
│ │    ├── Mainpage.scss
│ ├── App.jsx
│ ├── index.jsx
│ └── logo.svg
| └── App.css
| └── App.test.jsx
| └── index.css
| └── reportWebVitals.jsx
| └── setupTests.jsx
├──.gitignore
└── README.md
├── package-lock.json
└── package.json



---

## ⚡ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Sarika-T/bbcSample.git

# Navigate to the project folder
cd my-app

# Install dependencies
npm install

# Run the development server
npm start


Deployment (GitHub Pages Setup)

This project is preconfigured for deployment using GitHub Pages.

1.Add the homepage field in package.json

Make sure your package.json includes the following line (replace yourusername):
"homepage": "https://sarika-t.github.io/bbcSample/"

2.Deploy to GitHub Pages

Run the following commands:

npm run predeploy
npm run deploy


predeploy will build the optimized production version.

deploy will push the build folder to the gh-pages branch.

BBCPlayer app will be live at:
👉 https://sarika-t.github.io/bbcSample/

---

## 🚧 Future Enhancements

These are the planned updates to improve the project in future releases:

- 🔐 Add **Sign In / Authentication** functionality  
- 🔎 Implement **Search and Filter** for content browsing  
- 🧠 Integrate **AI-based recommendations** (e.g., trending shows, personalized news)  
- 🖼️ Add **image assets and category thumbnails** dynamically  
- 📱 Improve **mobile-first layout , Responsiveness** and animations  

---

## 📜 Disclaimer

This project is **not affiliated with or endorsed by BBC**.  
It is a **frontend UI clone** built for **educational and portfolio purposes only**.  
All rights to logos, brand, and content belong to **BBC**.

---

## 👨‍💻 Author

**T Sarika**  
Frontend Developer | React.js | UI/UX Enthusiast  
📫 [talarisarika22@gmail.com](mailto:talarisarika22@gmail.com)  
🌐 [LinkedIn](https://linkedin.com/in/sarika-talari-7a1b91217) | [GitHub](https://github.com/Sarika-T/)
