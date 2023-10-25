// import { useState } from 'react'
import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/NavTab";

function App() {
  // const [ useWhenNeeded ] = useState(0)

  return (
    <>
      <div className="d-flex flex-column min-vh-100 w-auto p-3">
        <div className="container mt-4 flex-grow-1">
          <header className="mb-4 bg-dark text-white p-3 w-auto p-3 rounded-4">
            <h1 className="display-4 text-center mb-5">Albert's Portfolio</h1>
            <Nav />
          </header>

          <main className="mb-5">
            <Outlet />
          </main>
        </div>

        <footer className="py-3 container mt-5 bg-dark rounded-4 text-light">
          <div className="container d-flex justify-content-around">
            <li className="list-unstyled">
              <strong>Github:</strong>
              <a href="https://github.com/Albyhua" className="ml-1 text-info">
                Albyhua
              </a>
            </li>
            <li className="list-unstyled">
              <strong>Email:</strong>
              <a href="mailto:albyhua@gmail.com" className="ml-1 text-info">
                Albyhua@gmail.com
              </a>
            </li>
            <li className="list-unstyled">
              <strong>Linkedin:</strong>
              <a
                href="https://www.linkedin.com/in/alby-hua/"
                className="ml-1 text-info"
              >
                Alby-hua
              </a>
            </li>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
