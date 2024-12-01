import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../components/style.css'

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
        <div className="component">
    <Link to="/prets/add"><h3>Ajouter Pret</h3></Link>        
    <h1>Liste des Prets</h1>
        {
        prets.length === 0 
        ? <p>Loading...</p>
        :(
        <table >
            <thead>
                <tr>
                    <th >Id Livre</th>
                    <th >Durrée En Jours</th>
                </tr>
            </thead>
            <tbody>
            {prets.map((pret,index) => {
                return(
                <tr key={index}>
                    <td>{pret.idLivre}</td>
                    <td>{pret.durreEnJours}</td>
                    <td>
                        <Link to={`/edit-pret/${pret.idPret}`}>
                            <button >Edit</button>
                        </Link>
                    </td>
                    <td>
                        <button onClick={() => handleDeletePret(pret.idPret)} >Supprimer</button>
                    </td>
                </tr>
                )
            })}
                
            </tbody>
        </table>)
}
        </div>
    )
   
}
export default PretsList;