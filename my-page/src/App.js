import './css/app.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Profile />
        <Skills />
    </div>
  );
}

export default App;
