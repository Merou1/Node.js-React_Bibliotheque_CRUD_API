import { useState } from 'react'
import LivresList from './components/Livres/LivresList'
import AbonnesList from './components/abonnes/AbonnesList'
import PretsList from './components/prets/PretsList'
import Welcome from './components/Welcome'
import EditLivre from './components/Livres/EditLivre'
import AddLivre from './components/Livres/AddLivre'
import AddAbonne from './components/abonnes/AddAbonne'
import EditAbonne from './components/abonnes/EditAbonne'
import AddPret from './components/prets/AddPret'
import EditPret from './components/prets/EditPrets'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Welcome />} />
          <Route path="/livres" element={<LivresList />} />
          <Route path="/abonnes" element={ <AbonnesList />} />
          <Route path="/prets" element={<PretsList />} />
          <Route path="/edit-livre/:id" element={<EditLivre />} />
          <Route path="livres/add" element={<AddLivre />} />
          <Route path="prets/add" element={<AddPret />} />
          <Route path="abonnes/add" element={<AddAbonne />} />
          <Route path="/edit-abonne/:id" element={<EditAbonne />} />
          <Route path="/edit-pret/:idPret" element={<EditPret />} />

        </Routes>

       
      </Router>
    </>
  )
}

export default App
