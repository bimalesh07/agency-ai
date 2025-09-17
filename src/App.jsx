import './App.css'
import "./index.css";
import Navbar from './components/Navbar'
import { useState } from 'react';
import Hero from './components/Hero';
import Trusted from './components/Trusted';

function App() {
const [Theme, setTheme] = useState('light')


  return (
    <>
      <div className="dark:bg-black relative">
        <Navbar theme={Theme} settheme={setTheme} />
        <Hero />
        <Trusted/>
      </div>
    </>
  );
}

export default App
