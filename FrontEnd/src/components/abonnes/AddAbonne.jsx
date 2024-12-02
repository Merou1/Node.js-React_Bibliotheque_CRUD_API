import axios from "axios"
import { useState } from "react"

const AddAbonne = () => {
    const [typeAbonnement,setTypeAbonnement] = useState("")
    const [dureeEnMois,setDureeEnMois] = useState(0)

    const handleSetTypeAbo = (e) => {
        e.preventDefault();
        setTypeAbonnement(e.target.value)
    }
    const handleSetDuree = (e) => {
        e.preventDefault();
        setDureeEnMois(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const abonne = {typeAbonnement,dureeEnMois}
        if(!typeAbonnement || !dureeEnMois) {
            console.error("ALL DATA REQUIRED")
        }
        try{
            const response = await axios.post(`http://localhost:4000/abonnes/add`,abonne);
            const data = response.data
            for(let i = 0;i<e.target.children.length -1 ;i++){
                e.target.children[i].value = ""
            }
            console.log("abonne avec id : "+data.id+" ajouté")
            alert("Abonné ajouté avec succès")
        }
        catch(error) {
            console.error(error)
            alert("Erreur sait produite lors de l'ajout du produit")
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleSetTypeAbo} type="text" placeholder="Entrer Type D'Abonnement"/>
                <input onChange={handleSetDuree} type="text" placeholder="Entrer La Durée En Mois"/>   
                <button type="submit">Ajouter</button>     
            </form>
        </div>
    )
}
export default AddAbonne