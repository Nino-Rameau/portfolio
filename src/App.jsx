import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

const Accueil = lazy(() => import("./pages/accueil"));
const Competences = lazy(() => import("./pages/competences"));
const Projets = lazy(() => import("./pages/projets"));
const CharteGraphique = lazy(() => import("./pages/projets/charteGraphique"));
const Cv = lazy(() => import("./pages/cv"));
const Contact = lazy(() => import("./pages/contact"));
const MentionsLegales = lazy(() => import("./pages/mentionsLegales"));
const Erreur = lazy(() => import("./pages/erreur"));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentionsLegales" element={<MentionsLegales />} />
            <Route path="/projets/charteGraphique" element={<CharteGraphique />} />
            <Route path="*" element={<Erreur />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
