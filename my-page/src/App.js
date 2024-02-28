import './css/app.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile';
import Skills from './components/Skills/Skills';
import AllProjects from './components/Projects/AllProjects';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Profile />
        <Skills />
        <AllProjects />
    </div>
  );
}

export default App;
