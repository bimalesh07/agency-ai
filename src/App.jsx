import './App.css'
import "./index.css";
import Navbar from './components/Navbar'
import { useState } from 'react';

function App() {
const [Theme, setTheme] = useState(null)


  return (
    <>
      <div className="dark:bg-black relative">
        <Navbar theme={Theme} settheme={setTheme} />
      </div>
    </>
  );
}

export default App
