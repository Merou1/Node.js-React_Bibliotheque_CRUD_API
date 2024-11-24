import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";




const EditLivre = () => {
    const { id } = useParams();
    const [newLivre,setNewLivre] = useState({});
    const [titre,setTitre] = useState("");
    const [nbPage,setNbPage] = useState(0);
    const [auteur,setAuteur] = useState("");

    //console.log(titre)
    //console.log(nbPage)
    //console.log(auteur)

    const fetchLivre = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/livres/${id}`);
            //console.log(response)
            //console.log(response.data)
            const livreData = response.data;
            setTitre(livreData.titre || "");
            setNbPage(livreData.nbPage || 0);
            setAuteur(livreData.auteur || "");
        } catch (error) {
            console.error("Error fetching livre data:", error);
        }
    };


    useEffect( () => {  
        fetchLivre();
    },[id])


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
        setAuteur(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if(!titre || !auteur || !nbPage) {
                alert("Tous les champs sont obligatoires !");
                return;
            }
            const newL = {titre,nbPage,auteur};
            const response = await axios.put(`http://localhost:4000/livres/update/${id}`,newL)
            console.log("Livre mis à jour avec succès:", response.data);
            alert("Livre mis à jour avec succès !");
        }
        catch(error) {
            console.error(error)
            alert("Une erreur s'est produite. Veuillez réessayer.");
        }
    }



    return(
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleSetTitre} value={titre} type="text" placeholder="Entrer titre" />
            <input onChange={handleSetNbPage} value={nbPage} type="text" placeholder="Entrer Nombre de page"/>
            <input onChange={handleSetAuteur} value={auteur} type="text" placeholder="Entrer Auteur"/>
            <button type="submit">Mettre à Jour</button>
        </form>
        </>
    )
}
export default EditLivre;