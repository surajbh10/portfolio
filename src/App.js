import './App.css';
import { AboutMe } from './component/AboutMe.js';
import { ContactMe } from './component/ContactMe';
import { ContentSide } from './component/ContentSide.js';
import { Coverset } from './component/Coverset.js';
import { FooterSection } from './component/FooterSection';
import { Skills } from './component/Skills';
function App() {
  return (
    <div>
    <Coverset />
    <ContentSide />
    <AboutMe />
    <Skills/>
    <ContactMe />
    <FooterSection />
    </div>
  );
}
export default App;
