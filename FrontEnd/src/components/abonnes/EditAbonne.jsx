import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const EditAbonne = () => {
    const { id } = useParams();
    const [typeAbonnement,setTypeAbonnement] = useState("");
    const [dureeEnMois,setDureeEnMois] = useState("");

    const fetchData =async () => {
        try{
            const response = await axios.get("http://localhost:4000/abonnes/"+id);
            const data = response.data;
            setTypeAbonnement(data.typeAbonnement)
            setDureeEnMois(data.dureeEnMois)
        }
        catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData();
    },[id])

    const handleSubmit =async (e) => {
        e.preventDefault();
        if (!typeAbonnement,!dureeEnMois) {
            alert("Tout les champs sont obligatoires")
            return;
        }
        const editedAbonne = {typeAbonnement,dureeEnMois};
        try{
            const response =await axios.put("http://localhost:4000/abonnes/update/"+id,editedAbonne);
            const data = response.data
            console.log("abonne "+ data + "updated successfullt")
            alert("Updated successfully")
        }
        catch(err) {
            console.error(err)
            alert("Error ocured while updating the abonne")
        }
    }
    const handleAboChange = (e) => {
        e.preventDefault();
        setTypeAbonnement(e.target.value)
    }
    const setDurreeVhange = (e) => {
        e.preventDefault();
        setDureeEnMois(e.target.value);
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleAboChange} value={typeAbonnement}/>
            <input type="text" onChange={setDurreeVhange} value={dureeEnMois}/>
            <button type="submit">Mettre A Jour</button>
        </form>
        </>
    )

}
export default EditAbonne