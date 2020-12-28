import './App.css';
import {React} from 'react'
import {motion} from 'framer-motion'
// import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Home/>
    </div>
  );
}

const Home = () => {
  return (
    <div className = "home container">
      <motion.h2 animate = {{ fontSize: 50, color: "#000000", x: 100, y: 100}}>
        Hari, Ashwin, Manu
      </motion.h2>
    </div>
  )
}

export default App;