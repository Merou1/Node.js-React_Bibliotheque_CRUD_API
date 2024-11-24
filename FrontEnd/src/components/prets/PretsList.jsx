import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PretsList = () => {

    const [prets,setPrets] = useState([]);
    useEffect(() => {
        fetch("/prets")
        .then(result => result.json())
        .then(data => setPrets(data))
        .catch(error => console.error(error))
    },[])
    const handleDeletePret =async (id) => {
        const x = confirm("Are you sure ?");
        if(x) {
            try{
                const response = await axios.delete("http://localhost:4000/prets/delete/"+id);
                console.log("Pret with id : "+id+" Deleted")
                alert("Deleted Successfully")
                setPrets(p => p.filter(pret => pret.idPret != id))
            }
            catch(err){
                console.error(err);
                alert("Error while deleting Pret")
            }
        }
    }

    return(
        <>
    <Link to="/prets/add">Ajouter Pret</Link>        
    <h1>Liste des Prets</h1>
        {
        prets.length === 0 
        ? <p>Loading...</p>
        :(
        <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Id Livre</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Durrée En Jours</th>
                </tr>
            </thead>
            <tbody>
            {prets.map((pret,index) => {
                return(
                <tr key={index}>
                    <td style={{ border: "1px solid black", padding: "8px", }}>{pret.idLivre}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{pret.durreEnJours}</td>
                    <td>
                        <Link to={`/edit-pret/${pret.idPret}`}>
                            <button style={{ border: "1px solid black", padding: "8px" , marginRight:"5px"}}>Edit</button>
                        </Link>
                    </td>
                    <td>
                        <button onClick={() => handleDeletePret(pret.idPret)} style={{ border: "1px solid black", padding: "8px" }}>Supprimer</button>
                    </td>
                </tr>
                )
            })}
                
            </tbody>
        </table>)
}
        </>
    )
   
}
export default PretsList;