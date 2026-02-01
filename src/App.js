import './App.css';
import ConactMeSection from './components/ConactMeSection.js';

import Header from './components/header.js';
import { LandingPage } from './components/LandingPage.js';
import ProjectSection from './components/ProjectSection.js';

function App() {
  return (

    <main>
      <Header />
      <LandingPage />
      <ProjectSection />
      <ConactMeSection />
    </main>
      
    
  )
}

export default App;
