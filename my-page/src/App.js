import './css/app.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile';
import Skills from './components/Skills/Skills';
import AllProjects from './components/Projects/AllProjects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Profile />
        <Skills />
        <AllProjects />
        <ContactMe />
    </div>
  );
}

export default App;
