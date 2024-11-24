import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const AbonnesList = () => {

    const [abonnes,setAbonnes] = useState([{}])
    useEffect(() => {
        fetch("/abonnes")
        .then(result => result.json())
        .then(data => setAbonnes(data))
        .catch(error => console.error(error))
    },[])
    const handleDeleteAbonne =async (id) => {
        try{
            const x = confirm("Are you sure ?");
            console.log(x)
            if(x) {
                const response = await axios.delete("http://localhost:4000/abonnes/delete/"+id)
                console.log("Abonne with id: "+id+" deleted")
                alert("Deleted Successfully")
                setAbonnes(a => a.filter(abonne => abonne.id != id))
            }
            else {
                return;
            }
        }
        catch(err) {
            console.error(err);
            alert("Error while deleting Abonne")
        }
    }

    return(
        <>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

        <div>
            <Link to="/abonnes/add">Ajouter abonne</Link>
        </div>
        <div>
        <h1>Liste des Abonnés</h1>
        {
        abonnes.length ==0
        ? (<p>Loading...</p> )
        :(<table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Type d'Abonnement</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Durrée en Mois</th>
                </tr>
            </thead>
            <tbody>
                {abonnes.map((abonne,index) => {
                    return(
                    <tr key={index}>
                        <td style={{ border: "1px solid black", padding: "8px" }}>{abonne.typeAbonnement}</td>
                        <td style={{ border: "1px solid black", padding: "8px" }}>{abonne.dureeEnMois}</td>
                        <td>
                            <Link to={`/edit-abonne/${abonne.id}`}>
                            <button style={{ border: "1px solid black", padding: "8px" , marginRight:"5px"}}>Edit</button>
                            </Link>
                        </td>

                        <td>
                            <button onClick={() => handleDeleteAbonne(abonne.id)} style={{ border: "1px solid black", padding: "8px" }}>Supprimer</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>)
        }
         </div>
           </div>
        </>
    )
}
export default AbonnesList;