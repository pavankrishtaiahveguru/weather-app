# 🌦️ Weather Forecast App

A modern **Weather Forecast Web Application** built using **React, Vite, and Tailwind CSS** that provides real-time weather information for any city using the **OpenWeather API**. The application displays temperature, weather conditions, humidity, wind speed, visibility, and pressure with dynamic weather icons and background images.

---

## 🚀 Features

* 🔎 Search weather by city name
* 🌡️ Display current temperature
* ☁️ Dynamic weather icons based on conditions
* 🌄 Weather-based background images
* 💨 Wind speed information
* 💧 Humidity levels
* 👁️ Visibility details
* 📊 Atmospheric pressure data
* ⚡ Fast development using Vite
* 🔐 Secure API key handling using environment variables

---

## 🛠️ Tech Stack

* **React.js**
* **Vite**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **OpenWeather API**
* **React Icons**

---

## 📁 Project Structure

```id="wf1"
src
 ├── components
 │    └── Weather.jsx
 │
 ├── assets
 │    └── images
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## ⚙️ Installation

Clone the repository

```id="wf2"
git clone https://github.com/pavankrishtaiahveguru/weather-app.git
```

Navigate to the project directory

```id="wf3"
cd weather-app
```

Install dependencies

```id="wf4"
npm install
```

Start the development server

```id="wf5"
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```id="wf6"
VITE_WEATHER_API_KEY=your_openweather_api_key
```

Get your free API key from:

https://openweathermap.org/api

---

## 📸 Screenshots

You can add your project UI screenshot here.

Example:

```id="wf7"
assets/weather-ui.png
```

---

## 📌 Future Improvements

* 🌍 Auto-detect user location weather
* 📅 5-day weather forecast
* 🌙 Dark mode support
* 📱 Improved mobile responsiveness
* ⏳ Loading animations

---

## 👨‍💻 Author

**Pavan Veguru**

* GitHub: https://github.com/pavankrishtaiahveguru
* LinkedIn: https://www.linkedin.com/in/pavan-veguru-b01923282

---

## 📄 License

This project is created for learning and portfolio purposes.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
