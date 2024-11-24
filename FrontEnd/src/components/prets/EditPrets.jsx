import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const EditPret = () => {
    const [durreEnJours,setDurreEnJours] = useState(0);
    const {idPret} = useParams();
    const getPret =async () => {
        try {
            console.log("1 - "+idPret)
            const response =await axios.get(`http://localhost:4000/prets/${idPret}`);
            console.log("2 - "+idPret)
            const data = response.data;
            setDurreEnJours(data.durreEnJours);
        }
        catch(err) {
            console.error(err)
        }
    }
    useEffect(() => {
         function fetchData() {  //wes useEffect la kenti atpasse async fct wrappeha west shy fct eadiya matpassihash nishan sinn maghatkhdemsh
             getPret();
        }
        fetchData();
    },[])
    const handleChange = (e) => {
        e.preventDefault()
        setDurreEnJours(e.target.value)
    }
    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            const response =await axios.put(`http://localhost:4000/prets/update/${idPret}`,
                { durreEnJours : Number(durreEnJours)} 

            )
            const data = response.data;
            console.log("pret with id : " + data.idPret + " updated")
            alert("Mise à jour éfféctuée avec succès")
        }
        catch(err) {
            console.error(err)
            alert("Erreur lors de la mise à jour de Pret")
        }

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="number" name="" id="" value={durreEnJours}/>
            <button type="submit">Mettre A Jour</button>
        </form>
        </>
    )
}
export default EditPret;