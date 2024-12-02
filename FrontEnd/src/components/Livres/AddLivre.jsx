import axios from "axios"
import { useEffect, useState } from "react"

const AddLivre = () => {

    const [titre,setTitre] = useState("")
    const [nbPage,setNbPage] = useState(null)
    const [auteur,setAueteur] = useState("")

    const handleSetTitre = (e) => {
        e.preventDefault();
        setTitre(e.target.value)
    }
    const handleSetNbPage = (e) => {
        e.preventDefault();
        setNbPage(e.target.value)
    }
    const handleSetAuteur = (e) => {
        e.preventDefault();
        setAueteur(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!titre || !auteur || !nbPage) {
            alert("Tous les champs sont obligatoires !");
            return;
        }
        const newLivre = {titre,nbPage,auteur}
        try{
            const response = await axios.post(`http://localhost:4000/livres/add`,newLivre);
            const data = response.data
            for(let i = 0;i<e.target.children.length -1 ;i++){
                e.target.children[i].value = ""
            }
            console.log("Livre avec id : "+data.id+" ajouté avec succès")
            alert("Ajouté avec succès")
        }
        catch(error) {
            console.error(error)
            alert("Erreur sait produite lors de l'ajout du produit")
        }
    }
    
    return(
        <div >
            <form onSubmit={handleSubmit}>
                <input onChange={handleSetTitre} value={titre} type="text" placeholder="Entrer titre" />
                <input onChange={handleSetNbPage} value={nbPage} type="text" placeholder="Entrer Nombre de page"/>
                <input onChange={handleSetAuteur} value={auteur} type="text" placeholder="Entrer Auteur"/>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}
export default AddLivre;