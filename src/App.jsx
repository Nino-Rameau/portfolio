import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import Competences from "./pages/competences";
import Projets from "./pages/projets";
import Experiences from "./pages/experiences";
import CharteGraphique from "./pages/charteGraphique";
import Cv from "./pages/cv";
import Contact from "./pages/contact";
import MentionsLegales from "./pages/mentionsLegales";
import Erreur from "./pages/erreur";
import Layout from "./components/layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/charteGraphique" element={<CharteGraphique />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentionsLegales" element={<MentionsLegales />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
