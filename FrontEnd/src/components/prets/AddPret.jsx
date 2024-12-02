import axios from "axios"
import { useEffect, useState } from "react"

const AddPret = () => {

    const [livres,setLivres] = useState([]);
    const[idLivre,setIdLivre] = useState();
    const [durreEnJours,setDurreEnJours] = useState(0)

    useEffect(() => {
        fetch("/livres")
        .then(result => result.json())
        .then(data =>  {
            console.log(data)
            setLivres(data)
            setIdLivre(livres[0].id)
        })//data==result.json()
        .catch(error => {
            console.error("Error fetching data:", error); 
        });
    },[])
    const handSelectleChange = (e) => {
        e.preventDefault();
        setIdLivre(e.target.value);

    }
    const handledDurreeChange = (e) => {
        e.preventDefault();
        setDurreEnJours(e.target.value)
    }
    const handleSubmit =async (e) => {
        e.preventDefault();
        const pret = {idLivre,durreEnJours}
        console.log("selectedLivre : "+idLivre)
        console.log("durre : "+durreEnJours)
        try{
            const response = await axios.post("http://localhost:4000/prets/add",pret);
            const data = response.data;
            console.log("pret-add data: "+data)
            alert("Pret ajouté avec succeès")
        }
        catch(err) {
            console.error(err)
            alert("Erreur lors de l'ajout du Pret")
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange={handSelectleChange} value={idLivre} name="" id="">
                <option value="" disabled>
                        -- Sélectionnez un livre --
                    </option>
                    {livres.map((livre) => (
                        <option key={livre.id} value={livre.id}>{livre.titre}</option>
                    ))}
                </select>
                <input onChange={handledDurreeChange} type="text" name="" id="" placeholder="Durre en Jours du Pret"/>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )

}
export default AddPret