# Browser Extensions React Tutorial Project.

## ... 

## Implementing Routing(From CHATGPT).

Here’s the **standard React Router setup** for a **Vite + React** app using React Router v6+.

---

## 1️⃣ Install React Router

```bash
npm install react-router-dom
```

---

## 2️⃣ Project Structure (Example)

```
src/
 ├── main.jsx
 ├── App.jsx
 └── pages/
      ├── Home.jsx
      ├── About.jsx
      └── NotFound.jsx
```

---

## 3️⃣ main.jsx (Wrap App with BrowserRouter)

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

---

## 4️⃣ App.jsx (Define Routes)

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
```

---

## 5️⃣ Example Page Component

### pages/Home.jsx

```jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

export default Home;
```

---

## 6️⃣ Programmatic Navigation (Optional)

```jsx
import { useNavigate } from "react-router-dom";

function Example() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/about")}>
      Go to About
    </button>
  );
}
```

---

# ✅ That’s the Standard Setup

* `BrowserRouter` → wraps your app
* `Routes` → container for routes
* `Route` → defines path + component
* `Link` → navigation without reload
* `useNavigate` → programmatic navigation

